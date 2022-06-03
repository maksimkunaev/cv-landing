<template>
  <ul class="experience-list">
    <li
      v-for="company in companies"
      :key="company.link"
      class="experience-item"
    >
      <Company :item="company" />
    </li>
  </ul>
</template>

<script>
import { companies } from "~/constants/cv";
import Company from "./Company";

export default {
  name: "Experience",
  components: {
    Company,
  },
  data() {
    return {
      companies,
    };
  },
};
</script>

<style lang="stylus">
.experience-list
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--layout-width);
  margin: 0 auto;

.experience-item {
  margin-top: 40px;
  width: 100%;

  &:first-child {
    margin-top: 0;
  }
}
</style>
