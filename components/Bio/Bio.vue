<template>
  <div class="bio-root">
    <div class="bio-photo">
      <img :src="bio.photo" alt="" />
    </div>
    <h2 class="header-L bio-name">{{ bio.name }}</h2>
    <p class="bio-item text-L">{{ bio.occupation }}</p>
  </div>
</template>

<script>
import { bio } from "~/constants/cv";

export default {
  name: "Bio",
  mounted() {
  },

  data() {
    return {
      bio,
      isLoading: false,
    };
  },
};
</script>

<style lang="stylus" scoped>
.bio-root
  display flex
  flex-direction: column
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
.bio-item, .bio-photo, .bio-name {
  margin-top: 24px;
}

.bio-photo
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);


.bio-photo img
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
</style>
