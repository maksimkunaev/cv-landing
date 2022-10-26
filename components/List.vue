<template>
  <ul class="list-root">
    <li v-for="item in list" :key="item">
      <p class="list-item text-S">
        {{ item }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Company",
  props: {
    list: {
      type: Array,
      defualt: () => [],
    },
  },
};
</script>

<style lang="stylus">
.list-root {
  list-style: outside;
  margin-left: 16px;
}

.list-item {
  margin-top: 8px;
}
</style>
