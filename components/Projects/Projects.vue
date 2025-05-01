<template>
  <ul class="projects-list">
    <li
      v-for="project in projects"
      :key="project.title"
      class="projects-item"
    >
      <Project :item="project" />
    </li>
  </ul>
</template>

<script>
import { projects } from "~/constants/cv";
import Project from "./Project"; // We'll create this next

export default {
  name: "Projects",
  components: {
    Project,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<style lang="stylus">
.projects-list
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  flex-wrap wrap

.projects-item {
  margin-top: 40px;
  border-bottom: 1px solid var(--quaternery-color);
  padding-bottom: 24px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    border-bottom: none;
  }
}
</style>