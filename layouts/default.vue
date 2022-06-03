<template>
  <div class="container">
    <TheHeader />
    <div class="main">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="stylus">
html, body, #__nuxt, #__layout, .container
  height 100%

.container
  display: flex;
  flex-direction: column;
  font-family sans-serif
  background: var(--primary-bg-color);
  color: var(--primary-color);
  transition: color 0.2s, background-color 0.2s

.main
  flex 1
  overflow: auto;
  padding: 32px 16px;
  width: 100%
  max-width: 100%
  margin: 0 auto;
</style>
