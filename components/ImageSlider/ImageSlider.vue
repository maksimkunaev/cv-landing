<template>
    <div class="slider-container">
      <!-- Thumbnails -->
      <div class="thumbnail-carousel">
        <img 
          v-for="(img, idx) in images"
          :key="idx"
          :src="img"
          :alt="`${altPrefix} screenshot ${idx + 1}`"
          @click="openLightbox(idx)"
          class="thumbnail"
        />
      </div>
  
      <!-- Lightbox -->
      <div v-if="isLightboxOpen" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox">×</button>
        <img :src="images[currentIndex]" class="lightbox-image" />
        <div class="lightbox-nav">
          <button @click.stop="prevImage">‹</button>
          <span>{{ currentIndex + 1 }} / {{ images.length }}</span>
          <button @click.stop="nextImage">›</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ImageSlider",
    props: {
      images: {
        type: Array,
        required: true,
      },
      altPrefix: {
        type: String,
        default: "Project",
      },
    },
    data() {
      return {
        isLightboxOpen: false,
        currentIndex: 0,
      };
    },
    methods: {
      openLightbox(index) {
        this.currentIndex = index;
        this.isLightboxOpen = true;
        document.body.style.overflow = "hidden";
      },
      closeLightbox() {
        this.isLightboxOpen = false;
        document.body.style.overflow = "";
      },
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
    },
  };
  </script>
  
  <style lang="stylus" scoped>
  .slider-container {
    margin: 16px 0;
  }
  
  .thumbnail-carousel {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 8px;
  }
  
  .thumbnail {
    height: 180px;
    border-radius: 4px;
    cursor: zoom-in;
    border: 1px solid var(--quaternery-color);
    transition: transform 0.2s;
  
    &:hover {
      transform: scale(1.02);
    }
  }
  

  /* Lightbox Styles */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .lightbox-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
  
  .lightbox-image {
    max-height: 80vh;
    max-width: 90vw;
    object-fit: contain;
  }
  
  .lightbox-nav {
    position: absolute;
    bottom: 20px;
    color: white;
    display: flex;
    align-items: center;
    gap: 20px;
  
    button {
      background: none;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
    }
  }
  </style>