<template>
  <div class="typing-trainer">
    <Text :text="getText" />
  </div>

</template>

<script>
import Text from './components/Text.vue'
export default {
  name: 'App',
  components: { Text },
  data () {
    return {
      hasError: false,
      errors: 0,
      activeIndex: 0
    }
  },

  created () {
    this.$store.dispatch('getText')
  },

  mounted () {
    const onKeypress = e => {
      console.log(e)
      this.updateIndex(e.key)
    }
    document.addEventListener('keypress', onKeypress)
  },

  computed: {
    getText () {
      return this.$store.getters.getText
    }
  },

  methods: {
    updateIndex (letter) {
      this.hasError = false

      const text = this.getText

      const newIndex = this.activeIndex + 1

      if (newIndex > text.length) {
        // eslint-disable-next-line no-useless-return
        return
      }
      const currentLetter = text[this.activeIndex]

      if (currentLetter !== letter) {
        this.errors++
        this.hasError = true

        // eslint-disable-next-line no-useless-return
        return
      }

      this.activeIndex = newIndex
    }
  }

}
</script>
