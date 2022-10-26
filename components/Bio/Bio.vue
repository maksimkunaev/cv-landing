<template>
  <div class="bio-root">
    <h2 class="header-L">{{ bio.name }}</h2>
    <p class="bio-item text-L">{{ bio.occupation }}</p>
    <div class="bio-photo">
      <img :src="bio.photo" alt="" />
    </div>
    <p class="bio-item text-S bio-description" v-html="formattedDescription" />

    <Socials class="bio-item" :socials="bio.socials" />
  </div>
</template>

<script>
import { bio } from "~/constants/cv";
import Socials from "~/components/Socials/Socials";
// import { skills } from "../../constants/cv";

export default {
  name: "Bio",
  components: {
    Socials,
  },
  data() {
    return {
      bio,
      isLoading: false,
    };
  },
  computed: {
    formattedDescription() {
      console.log(bio);
      return bio.description.replace(
        /{skills}/g,
        bio.skills
          .map((skill) => `<span class="text-M">${skill}</span>`)
          .join(", ")
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.bio-root
  display flex
  flex-direction: column
  align-items: center;
  width: var(--layout-width);
  max-width: 100%;
  margin: 0 auto;

.bio-item, .bio-photo {
  margin-top: 24px;
}

.bio-photo
  width: 400px;
  height: 400px;
  max-width: 100%;
  max-height: 100%;
  border-radius: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 300px;
    height: 300px;
  }

.bio-description
  text-align: center;
</style>
