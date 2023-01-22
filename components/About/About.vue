<template>
  <p class="about-root text-M" v-html="formattedDescription" />
</template>

<script>
import { bio } from "~/constants/cv";

export default {
  name: "About",
  data() {
    return {
      bio,
      isLoading: false,
    };
  },
  computed: {
    formattedDescription() {
      return bio.description.replace(
        /{technologies}/g,
        bio.technologies
          .map((skill) => `<span class="text-L">${skill}</span>`)
          .join(", ")
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.about-root
  height: 100%;
  text-align: center
</style>
