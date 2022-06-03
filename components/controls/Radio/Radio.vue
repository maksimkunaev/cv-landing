<template>
  <div class="radio-root">
    <label class="radio-label" v-for="option in options" :key="option.id">
      <input
        class="radio-input"
        type="radio"
        :id="option.id"
        :value="option.id"
        v-model="selected"
        @change="onChange"
      />
      <span>{{ option.label }}</span> <br />
    </label>
  </div>
</template>

<script>
export default {
  name: "Radio",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      selected: "",
    };
  },
  created() {
    this.setSelected(this.value);
  },
  watch: {
    value(newValue) {
      this.setSelected(newValue);
    },
  },
  methods: {
    onChange(event) {
      this.$emit("input", this.selected);
    },
    setSelected(value) {
      this.selected = value;
    },
  },
};
</script>

<style lang="stylus">
.radio-root
  display: flex;

.radio-input
  opacity 0
  width: 0
  display: none;

.radio-label
  cursor: pointer;
  font-size: 1.4rem;
  padding: 16px 12px;
</style>
