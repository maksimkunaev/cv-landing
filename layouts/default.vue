<template>
  <div class="container">
    <TheHeader />
    <ScrollToTop />
    <Nuxt />
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
  background: var(--primary-bg-color);
  color: var(--primary-color);
  transition: color 0.2s, background-color 0.2s
  padding-bottom: 48px;
</style>
