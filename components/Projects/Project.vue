<template>
  <div class="project-card" :class="{ 'alternate': alternate }">
    <!-- Screenshots Side -->
    <div class="project-visual">
      <ImageSlider v-if="item.screenshots" :images="item.screenshots" :alt-prefix="item.title" />
    </div>

    <!-- Content Side -->
    <div class="project-info">
      <div class="project-header">
        <h2 class="project-title">{{ item.title }}</h2>
        <span class="project-date">{{ item.date }}</span>
      </div>

      <div class="section">
        <h3 class="section-title">Problem</h3>
        <p class="section-text">{{ item.problemStatement }}</p>
      </div>

      <div class="section">
        <h3 class="section-title">Solution</h3>
        <ul class="list">
          <li v-for="(feature, index) in item.keyFeatures" :key="index">
            {{ feature }}
          </li>
        </ul>
      </div>

      <div class="section">
        <h3 class="section-title">Tech Stack</h3>
        <div class="tech-stack">
          <span v-for="(tech, index) in item.technologies" :key="index" class="tech-tag">
            {{ tech }}
          </span>
        </div>
      </div>

      <div v-if="item.results" class="section results">
        <h3 class="section-title">Impact</h3>
        <ul class="list impact-list">
          <li v-for="(result, index) in item.results" :key="index">
            {{ result }}
          </li>
        </ul>
      </div>

      <a v-if="item.link" :href="item.link" target="_blank" class="project-link">
        View Live Project →
      </a>
    </div>
  </div>
</template>

<script>
import ImageSlider from "~/components/ImageSlider/ImageSlider.vue";

export default {
  name: "ProjectCard",
  components: { ImageSlider },
  props: {
    item: {
      type: Object,
      required: true,
      validator: (value) => {
        return [
          'title',
          'problemStatement',
          'keyFeatures',
          'technologies'
        ].every(field => field in value)
      }
    },
    alternate: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="stylus" scoped>
.project-card {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 1.8rem;
  padding: 2rem;
  border-radius: 12px;
  background: rgba(40, 50, 70, 0.25);
  border: 1px solid rgba(100, 200, 255, 0.1);
  transition: all 0.3s;
  
  &:hover {
    border-color: rgba(100, 200, 255, 0.3);
    box-shadow: 0 8px 32px rgba(100, 200, 255, 0.15);
  }

  &.alternate {
    grid-template-columns: 1.1fr 0.9fr;
    
    .project-visual {
      order: 2;
    }
    
    .project-info {
      order: 1;
    }
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    
    &.alternate {
      .project-visual {
        order: 1;
      }
      
      .project-info {
        order: 2;
      }
    }
  }
}

.project-visual {
  display: flex;
  align-items: flex-start;
  max-height: 500px;
  overflow: hidden;
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(100, 200, 255, 0.2);
}

.project-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;
}

.project-date {
  color: rgba(100, 200, 255, 0.6);
  font-size: 0.875rem;
  font-weight: 500;
  flex-shrink: 0;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.section-title {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 700;
  color: rgba(100, 200, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.section-text {
  margin: 0;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
}

.list {
  padding-left: 1.25rem;
  margin: 0;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
  list-style: circle;
  
  li {
    margin-bottom: 0.4rem;
  }
}

.impact-list {
  list-style: none;
  padding-left: 0;
  
  li {
    position: relative;
    padding-left: 1.5rem;
    
    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: rgba(100, 200, 255, 0.8);
      font-weight: bold;
    }
  }
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(100, 200, 255, 0.12);
  color: rgba(100, 200, 255, 0.95);
  border: 1px solid rgba(100, 200, 255, 0.25);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(100, 200, 255, 0.2);
    border-color: rgba(100, 200, 255, 0.4);
  }
}

.project-link {
  display: inline-flex;
  align-items: center;
  color: rgba(100, 200, 255, 0.95);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: 2px solid rgba(100, 200, 255, 0.3);
  border-radius: 8px;
  background: rgba(100, 200, 255, 0.05);
  transition: all 0.2s;
  align-self: flex-start;
  margin-top: 0.5rem;
  
  &:hover {
    background: rgba(100, 200, 255, 0.15);
    border-color: rgba(100, 200, 255, 0.5);
    transform: translateX(4px);
  }
}
</style>