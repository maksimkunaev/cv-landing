<template>
  <div class="socials-root">
    <a
      v-for="social in socials"
      :key="social.link"
      :href="social.link"
      target="_blank"
      class="socials-link"
    >
      <!-- <Card class="socials-item"> -->
      {{ social.label }}
      <!-- </Card> -->
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

.socials-link
  text-decoration: none
  border-radius: 8px;
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  border: 1px solid var(--quaternery-color);

  margin-right: 16px;
  color: var(--tertiary-color)

  @media (max-width: 600px)
    margin-top: 16px;

  &:hover, &:focus
    background-color: var(--quaternery-color)
</style>
