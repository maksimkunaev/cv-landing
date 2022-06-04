<template>
  <Checkbox :value="themeToBoolean" @input="onChange" />
</template>

<script>
import Checkbox from "~/components/controls/Checkbox/Checkbox";
import { themes } from "./themes";

export default {
  components: {
    Checkbox,
  },
  data() {
    return {
      themes,
    };
  },
  props: {
    value: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    themeToBoolean() {
      return this.value === "light";
    },
  },
  methods: {
    booleanToTheme(val) {
      return val ? "light" : "dark";
    },
    onChange(val) {
      this.$emit("input", this.booleanToTheme(val));
    },
  },
};
</script>

<style lang="stylus"></style>
