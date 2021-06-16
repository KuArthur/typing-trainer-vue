<template>
    <div class="text">
        <span :class= "handleCheckError(idx)" v-for="(letter, idx) in text" :key="idx"> {{letter}} </span>
    </div>
</template>

<script>
export default {
  props: {
    text: {
      type: Array,
      required: true
    },
    hasError: {
      type: Boolean,
      required: true
    },
    activeIndex: {
      type: Number,
      required: true
    }
  },

  methods: {
    handleCheckError (index) {
      if (index === this.activeIndex) {
        return ['default', this.hasError ? 'error' : 'active']
      }
      return ['default', index < this.activeIndex ? 'success' : '']
    }
  }
}
</script>
