<template>
  <div class="socials-root">
    <a
      v-for="social in socials"
      :key="social.link"
      :href="social.link"
      target="_blank"
      class="socials-link"
    >
      <Card class="socials-item">
        {{ social.label }}
      </Card>
    </a>
  </div>
</template>

<script>
export default {
  name: "Socials",
  props: {
    socials: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="stylus">
.socials-root
  display: flex;

  @media (max-width: 600px) {
    flex-direction:  column
  }


.socials-item
  margin-top: 16px;
  margin-right: 16px;
  color: var(--tertiary-color)

.socials-link
  text-decoration: none
</style>
