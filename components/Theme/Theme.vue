<template>
  <div>
    <component :is="'style'">
      :root {
      {{ themeCSS }}
      }
    </component>
    <ThemeSwitcher @input="onChange" :value="themeName" />
  </div>
</template>

<script>
import { themes } from "./themes";
import { setTheme, getTheme } from "./utils/themes";
import ThemeSwitcher from "~/components/Theme/Switcher.vue";

export default {
  components: {
    ThemeSwitcher,
  },
  data() {
    return {
      themeName: "",
      defaultTheme: "dark",
    };
  },
  mounted() {
    this.themeName = getTheme() || this.defaultTheme;
  },
  methods: {
    onChange(themeName) {
      this.themeName = themeName;
      setTheme(themeName);
    },
  },
  computed: {
    themeObj() {
      return themes[this.themeName] || themes[this.defaultTheme] || {};
    },
    themeCSS() {
      const { themeObj } = this;
      let style = "";

      const themesStyles = Object(themeObj && themeObj.settings);

      for (const key in themesStyles) {
        style += `${key}: ${themesStyles[key]};`;
      }

      return style;
    },
  },
};
</script>
