<template>
  <div class="index-page-container">
    <div
      v-for="section in sections"
      :id="section.link"
      :key="section.link"
      class="wrapper"
    >
      <div class="inner">
        <div class="component">
          <!-- {{ section.label }} -->
          <component :is="section.componentName" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sections } from "~/constants/cv";

export default {
  name: "IndexPage",
  data() {
    return {
      sections,
    };
  },
};
</script>

<style lang="stylus" scoped>
@import "@/assets/css/stylus-variables.styl"
$header-height = 80px

.wrapper
  overflow: auto;
  margin: 0 auto;

  &:nth-child(2n)
    .inner
      background-color: var(--opacity-bg-color);
.inner
  padding: 48px 24px
  margin-top $header-height

  @media only screen and (max-device-width: $tablet-size)
    margin-top: 40px;
    padding: 16px;

  @media only screen and (max-device-width: $mobile-size)
    margin-top: 20px;

.component
  width: $layout-width;
  max-width: 100%;
  margin 0 auto
</style>
