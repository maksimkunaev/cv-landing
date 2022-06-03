<template>
  <header class="header-root">
    <Theme class="header-theme" />

    <div class="header-tabs">
      <NuxtLink
        v-for="tab in tabs"
        :key="tab.link"
        :to="tab.link"
        class="header-button"
        :class="{ 'header-active': activeTab === tab.link }"
        >{{ tab.label }}</NuxtLink
      >
    </div>
  </header>
</template>

<script>
import { tabs } from "~/constants/cv";

export default {
  name: "TheHeader",
  data() {
    return {
      tabs,
      activeTab: "",
    };
  },
  watch: {
    $route: {
      handler: function (search) {
        console.log(search.path);
        this.activeTab = search.path;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="stylus">
.header-root
  display: flex;
  border-bottom: 1px solid var(--quaternery-color);
  justify-content: center;
  position relative

  @media (max-width: 600px) {
    flex-direction: column
    align-items: center;
    justify-content: center;
  }


.header-tabs
  display: flex;

  @media (max-width: 600px) {
    margin-top: 8px
  }

.header-button
  padding: 24px 40px;

  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  color: var(--tertiary-color);
  border-bottom: 1px solid var(--tertiary-color);

  display: flex;
  align-items: center;
  justify-content: center;

  border-width: 0;
  opacity: 0.8;

  transition: border-width 0.2s, opacity 0.2s;

  @media (max-width: 600px) {
    font-size: 12px
    padding: 16px
  }

.header-active
  border-width: 1px;
  opacity: 1;

.header-theme
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 600px) {
    transform none
    position: static;
    margin-top: 16px
  }
</style>
