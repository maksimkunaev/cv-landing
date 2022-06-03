<template>
  <div class="company-root">
    <a :href="item.link" target="_blank" class="company-title">
      <h2 class="header-M">{{ item.label }}</h2>
    </a>
    <p class="company-item text-M company-position">
      {{ item.position }}, {{ item.startDate }} - {{ item.endDate }}
    </p>

    <List class="company-item company-skills" :list="item.responsibilities" />
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
.company-root {
  display flex
  flex-direction: column
  align-items: center;
}

.company-item {
  margin-top: 8px;
}

.company-title {
  display flex
  align-items: center;
  text-decoration: none;
}

.company-position {
  color: var(--secondary-color);
}

.company-skills {
  align-self: flex-start;
}
</style>
