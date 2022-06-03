<template>
  <RadioGroup
    label="Brand color"
    v-model="themeValue"
    @input="onChange"
    :options="options"
  />
</template>

<script>
import RadioGroup from "~/components/controls/Radio/Radio";
import { themes } from "./themes";

export default {
  components: {
    RadioGroup,
  },
  data() {
    return {
      themes,
      themeValue: this.value,
    };
  },
  props: {
    value: {
      type: String,
      default: () => "",
    },
  },
  watch: {
    value() {
      this.themeValue = this.value;
    },
  },
  computed: {
    options() {
      return Object.keys(this.themes).map((key) => ({
        id: key,
        label: this.themes[key].label,
      }));
    },
  },
  methods: {
    onChange(theme) {
      this.$emit("input", theme);
    },
  },
};
</script>

<style lang="stylus"></style>
