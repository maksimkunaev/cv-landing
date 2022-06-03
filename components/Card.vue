<template>
  <div class="card-root">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="stylus">
.card-root
  border-radius: 8px;
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  border: 1px solid var(--quaternery-color);
</style>
