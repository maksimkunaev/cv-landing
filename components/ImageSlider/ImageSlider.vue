<template>
  <div class="slider-container">
    <!-- Main Image -->
    <div class="main-image-wrapper">
      <img :src="images[activeIndex]" :alt="`${altPrefix} screenshot ${activeIndex + 1}`"
        @click="openLightbox(activeIndex)" class="main-image" />
    </div>

    <!-- Thumbnails -->
    <div v-if="images.length > 1" class="thumbnails">
      <div v-for="(img, idx) in images" :key="idx" @click="activeIndex = idx" class="thumbnail-wrapper"
        :class="{ active: idx === activeIndex }">
        <img :src="img" :alt="`${altPrefix} thumbnail ${idx + 1}`" class="thumbnail" />
      </div>
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
      activeIndex: 0,
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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.main-image-wrapper {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid rgba(100, 200, 255, 0.2);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  cursor: zoom-in;
  
  &:hover {
    border-color: rgba(100, 200, 255, 0.4);
    box-shadow: 0 8px 24px rgba(100, 200, 255, 0.2);
    transform: translateY(-2px);
  }
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s;
  
  .main-image-wrapper:hover & {
    transform: scale(1.02);
  }
}

.thumbnails {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 4px 0;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(100, 200, 255, 0.05);
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(100, 200, 255, 0.3);
    border-radius: 2px;
    
    &:hover {
      background: rgba(100, 200, 255, 0.5);
    }
  }
}

.thumbnail-wrapper {
  flex-shrink: 0;
  width: 80px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;
  border: 2px solid rgba(100, 200, 255, 0.15);
  cursor: pointer;
  transition: all 0.2s;
  opacity: 0.6;
  
  &:hover {
    opacity: 0.9;
    border-color: rgba(100, 200, 255, 0.4);
  }
  
  &.active {
    opacity: 1;
    border-color: rgba(100, 200, 255, 0.6);
    box-shadow: 0 0 12px rgba(100, 200, 255, 0.3);
  }
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(100, 200, 255, 0.2);
  border: 2px solid rgba(100, 200, 255, 0.4);
  color: white;
  font-size: 2rem;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(100, 200, 255, 0.3);
    border-color: rgba(100, 200, 255, 0.6);
  }
}

.lightbox-image {
  max-height: 85vh;
  max-width: 90vw;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(100, 200, 255, 0.3);
}

.lightbox-nav {
  position: absolute;
  bottom: 30px;
  color: white;
  display: flex;
  align-items: center;
  gap: 30px;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid rgba(100, 200, 255, 0.3);

  button {
    background: rgba(100, 200, 255, 0.2);
    border: 1px solid rgba(100, 200, 255, 0.4);
    color: white;
    font-size: 2rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    
    &:hover {
      background: rgba(100, 200, 255, 0.3);
      border-color: rgba(100, 200, 255, 0.6);
    }
  }
  
  span {
    font-size: 0.9rem;
    color: rgba(100, 200, 255, 0.9);
  }
}
</style>