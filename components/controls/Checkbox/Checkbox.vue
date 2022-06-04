<template>
  <div>
    <label :key="option.id" id="switch" class="switch">
      <input
        class="input"
        type="checkbox"
        :id="option.id"
        :value="option.id"
        v-model="selected"
        @change="onChange"
      />
      <span class="slider" />
    </label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    option: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: false,
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
$switch-height = 34px / 2
$switch-width = 45px
$radius = 34px
$slider-width = 28px
$slider-height = 28px

.switch {
  position: relative;
  display: inline-block;
  width: $switch-width
  height $switch-height
}

/* Hide default HTML checkbox */
.switch .input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--tertiary-color);
  transition: 0.4s;
  height $switch-height
  border-radius: $radius
}

.slider:before {
  position: absolute;
  content: "";
  height: $slider-width;
  width: $slider-height;
  left: 0px;
  bottom: 4px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  transition: 0.4s;
  background: white url(static/icons/night.svg);
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
}

.input:checked + .slider {
  background-color: var(--secondary-color)
}

.input:checked + .slider:before {
  transform: translateX(24px);
  background: white url(static/icons/day.svg);
  background-repeat: no-repeat;
  background-position: center;
}
</style>
