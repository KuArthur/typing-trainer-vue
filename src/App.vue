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

  created () {
    this.$store.dispatch('getText')
  },

  computed: {
    getText () {
      return this.$store.getters.getText
    }
  }

}
</script>
