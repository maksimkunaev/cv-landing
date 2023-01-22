<template>
  <div class="position-root">
    <h2 class="header-M position-name">{{ item.position }}</h2>

    <a :href="item.link" target="_blank" class="position-title">
      <span class="text-S position-selected">{{ item.label }} </span>

      <span class="text-S position-date"
        >{{ item.startDate }} - {{ item.endDate }}</span
      >
    </a>

    <p class="text-S position-skills">{{ item.responsibilities }}</p>
  </div>
</template>

<script>
export default {
  name: "Company",
  props: {
    item: {
      type: Object,
      defualt: () => ({}),
    },
  },
};
</script>

<style lang="stylus">
.position-root {
  display flex
  flex-direction: column
}

.position-title {
  display flex
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
  margin-top 16px
}

.position-name {
  text-transform uppercase
}

.position-selected
  color: var(--secondary-color);

.position-skills {
  align-self: flex-start;
  margin-top: 16px;
}

.position-date
  text-align right
</style>
