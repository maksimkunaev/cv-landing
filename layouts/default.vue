<template>
  <div class="container">
    <TheHeader />
    <ScrollToTop />
    <NuxtPage />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
html, body, #__nuxt, #__layout, .container
  min-height 100%

.container
  display: flex;
  flex-direction: column;
  
  font-family sans-serif
  color: var(--primary-color);
  transition: color 0.2s, background-color 0.2s
  padding-bottom: 48px;
  background-image: linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0));
</style>
