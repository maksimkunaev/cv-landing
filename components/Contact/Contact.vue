<template>
  <div class="contacts-root">
    <div class="contacts-buttons">
      <a
        v-for="social in bio.socials"
        :key="social.link"
        :href="social.link"
        target="_blank"
        class="contact-button"
      >
        {{ social.label }}
      </a>
    </div>
    <a
      v-for="social in bio.contacts"
      :key="social.link"
      :href="social.link"
      target="_blank"
      class="socials-link"
    >
      {{ social.label }}
    </a>
  </div>
</template>

<script>
import { bio } from "~/constants/cv";

export default {
  name: "Bio",
  data() {
    return {
      bio,
      isLoading: false,
    };
  },
  computed: {
    formattedDescription() {
      return bio.description.replace(
        /{technologies}/g,
        bio.technologies
          .map((skill) => `<span class="text-M">${skill}</span>`)
          .join(", ")
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.contacts-root
  display flex
  flex-direction: column
  align-items: center;
  max-width: 100%;
  margin: 0 auto;

.contacts-buttons
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;

.socials-link
  padding: 16px 32px;

.contact-button
  text-decoration: none
  border-radius: var(--border-radius);
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  border: 1px solid var(--quaternery-color);

  margin-right: 16px;
  color: var(--tertiary-color)

  @media (max-width: $mobile-size)
    margin-top: 16px;

  &:hover, &:focus
    background-color: var(--quaternery-color)
</style>
