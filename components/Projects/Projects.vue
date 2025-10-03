<template>
  <ul class="projects-list">
    <li v-for="(project, index) in projects" :key="project.title" class="projects-item"
      :class="{ 'alternate': index % 2 !== 0 }">
      <Project :item="project" :alternate="index % 2 !== 0" />
    </li>
  </ul>
</template>

<script>
import { projects } from "~/constants/cv";
import Project from "./Project";

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
  gap: 60px;

.projects-item {
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(100, 200, 255, 0.3) 50%, 
      transparent
    );
  }
}
</style>