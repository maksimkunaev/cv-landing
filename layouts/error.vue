<template>
  <div class="error-root">
    <h1 v-if="error.statusCode === 404" class="header-M">Page not found</h1>

    <h1 v-else class="header-M">
      Error occured <span class="text-XS">{{ error.message }}</span>
    </h1>
    <NuxtLink class="error-link text-L" to="/">Home page</NuxtLink>

    <!-- <div class="error-root">
   
    <NuxtLink to="/">Home</NuxtLink>
  </div> -->
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>

<style lang="stylus">
.error-root
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  background: var(--primary-bg-color);
  color: var(--primary-color);
  align-items: center;
  justify-content: center;

.error-link
  margin-top: 16px;
</style>
