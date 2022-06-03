<template>
  <div>
    <label :key="option.id">
      <input
        type="checkbox"
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
  name: "CheckboxGroup",
  props: {
    option: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selected: [],
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
