<template>
  <div class="project-card">
    <!-- Header -->
    <div class="project-header">
      <h2 class="project-title">{{ item.title }}</h2>
      <div class="project-meta">
        <a v-if="item.link" :href="item.link" target="_blank" class="project-link">
          View Project →
        </a>
        <span class="project-date">{{ item.date }}</span>
      </div>
    </div>

    <!-- Problem -->
    <div class="product-section">
      <h3 class="section-title">What it solves</h3>
      <p class="product-description">{{ item.problemStatement }}</p>
    </div>

    <!-- Screenshots -->
    <ImageSlider 
      v-if="item.screenshots" 
      :images="item.screenshots" 
      :alt-prefix="item.title"
    />

    <!-- Solution -->
    <div class="tech-section">
      <h3 class="section-title">How it works</h3>
      <ul class="feature-list">
        <li v-for="(feature, index) in item.keyFeatures" :key="index">
          {{ feature }}
        </li>
      </ul>
    </div>

    <!-- Technologies -->
    <div class="tech-stack-wrapper">
      <h3 class="section-title">Technologies</h3>
      <div class="tech-stack">
        <span 
          v-for="(tech, index) in item.technologies" 
          :key="index" 
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Results - NEW SECTION -->
    <div v-if="item.results" class="results-section">
      <h3 class="section-title">Results</h3>
      <ul class="results-list">
        <li v-for="(result, index) in item.results" :key="index" class="result-item">
          <span class="result-icon">✓</span>
          {{ result }}
        </li>
      </ul>
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
    }
  }
};
</script>

<style lang="stylus" scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 8px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
}

.project-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.project-link {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 0.875rem;
  
  &:hover {
    text-decoration: underline;
  }
}

.section-title {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
}

.product-description {
  margin: 0;
  line-height: 1.5;
}

.feature-list, .results-list {
  padding-left: 1.25rem;
  margin: 0.5rem 0 1rem;
  line-height: 1.5;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--tag-bg);
  color: var(--tag-text);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

/* NEW RESULTS STYLES */
.results-list {
  list-style: none;
  padding-left: 0;
}

.result-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.result-icon {
  color: var(--success-color);
  font-weight: bold;
}
</style>