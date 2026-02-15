<template>
  <ScrollFade :delay="delay">
    <section class="glass block">
      <h2>{{ title }}</h2>
      <slot />
    </section>
  </ScrollFade>
</template>

<script>
import ScrollFade from "./ScrollFade.vue";

export default {
  name: "GlassSection",
  components: { ScrollFade },
  props: {
    title: String,
    delay: Number,
  },
};
</script>

<style scoped>
.glass {
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 40px 48px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
}

.block {
  margin-bottom: 96px;
}

h2 {
  font-size: 1.9rem;
  margin-bottom: 20px;
  color: #f8fafc;
}

p {
  font-size: 1.25rem;
  color: #dbeafe;
}
</style>
