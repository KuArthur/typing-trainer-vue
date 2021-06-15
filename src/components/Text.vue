<template>
    <div class="text">
        <span v-for="(letter, idx) in text" :key="idx"> {{letter}} </span>
    </div>
</template>

<script>
export default {
  props: {
    text: {
      type: Array,
      required: true
    }
  }
}
</script>
