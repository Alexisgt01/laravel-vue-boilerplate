<template>
  <router-link :to="$props.route" class="link">
    <span class="link__first" :data-hover="$props.first">{{ $props.first }}</span>
    <span class="link__last" :data-hover="$props.last" v-if="$props.last">{{ $props.last }}</span>
  </router-link>
</template>

<script>
export default {
  name: "link",
  props: {
    route: {
      type: Object,
      required: true,
    },
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: false,
      default: null,
    }
  }
}
</script>

<style scoped>

</style>
