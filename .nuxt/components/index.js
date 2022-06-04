export { default as List } from '../../components/List.vue'
export { default as Loader } from '../../components/Loader.vue'
export { default as Bio } from '../../components/Bio/Bio.vue'
export { default as ExperienceCompany } from '../../components/Experience/Company.vue'
export { default as Experience } from '../../components/Experience/Experience.vue'
export { default as Skills } from '../../components/Skills/Skills.vue'
export { default as Socials } from '../../components/Socials/Socials.vue'
export { default as TheHeader } from '../../components/TheHeader/TheHeader.vue'
export { default as ThemeSwitcher } from '../../components/Theme/Switcher.vue'
export { default as Theme } from '../../components/Theme/Theme.vue'
export { default as ThemeThemes } from '../../components/Theme/themes.js'
export { default as ControlsRadio } from '../../components/controls/Radio/Radio.vue'
export { default as ControlsCheckbox } from '../../components/controls/Checkbox/Checkbox.vue'
export { default as ThemeUtilsThemes } from '../../components/Theme/utils/themes.js'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
