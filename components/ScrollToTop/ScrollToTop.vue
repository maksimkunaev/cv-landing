<template>
  <a
    href="#top"
    class="scroll-to-top"
    aria-label="Back to top"
    title="Back to top"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path
        d="M22.5 40V13.7L10.1 26.1 8 24 24 8l16 16-2.1 2.1-12.4-12.4V40Z"
      /></svg
  ></a>
</template>

<script>
export default {
  name: "ScrollToTop",
};
</script>

<style lang="stylus">
.scroll-to-top
  position: fixed;
  bottom: 24px;
  right: 24px;
  border: 1px solid var(--tertiary-color)
  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: var(--border-radius);
  text-decoration: none;

  svg path
    fill var(--tertiary-color)

.scroll-to-top:hover {
  text-decoration: none;
}
</style>
