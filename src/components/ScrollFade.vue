<template>
  <div ref="el" class="fade" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ScrollFade",
  props: {
    delay: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return { visible: false };
  },
  computed: {
    style() {
      return {
        transitionDelay: `${this.delay * 0.1}s`,
      };
    },
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.visible = true;
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(this.$refs.el);
  },
};
</script>

<style scoped>
.fade {
  opacity: 0;
  transform: translateY(48px);
  transition:
    opacity 1s ease,
    transform 1s ease;
}

.fade.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
