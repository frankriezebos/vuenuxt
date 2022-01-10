export { default as Cards } from '../../components/Cards.vue'
export { default as CarouselBs5 } from '../../components/Carousel-bs5.vue'
export { default as Carousel } from '../../components/Carousel.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as Intro } from '../../components/Intro.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Sidebar } from '../../components/Sidebar.vue'

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
