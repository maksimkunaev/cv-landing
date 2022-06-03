<template>
  <div class="skills-root">
    <List :list="skills" />
  </div>
</template>

<script>
import { skills } from "~/constants/cv";

export default {
  name: "Skills",
  data() {
    return {
      skills,
    };
  },
};
</script>

<style lang="stylus">
.skills-root
  display: flex
  width: var(--layout-width);
  margin: 0 auto;
</style>
