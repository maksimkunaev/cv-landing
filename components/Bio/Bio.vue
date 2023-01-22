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
  max-width: 100%;
  max-height: 100%;
  border-radius: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

.bio-photo
  flex 1
</style>
