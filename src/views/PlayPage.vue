<template>
  <PageLayout>
    <h1 class="page-title animate__animated animate__fadeInDown">Prikaz Cinematic Chess</h1>

    <GlassSection title="Igraj u pregledniku">
      <p>
        U ovoj web verziji prikazan je Cinematic Chess bez računalnog
        protivnika. Za igranje protiv bota potrebno je preuzeti punu verziju
        aplikacije putem poveznice u zaglavlju stranice.
      </p>
      <div class="iframe-wrapper">
        <iframe
          title="Cinematic Chess – igra na itch.io"
          frameborder="0"
          src="https://itch.io/embed-upload/16490293?color=333333"
          allowfullscreen
          ><a href="https://fran-klasic.itch.io/cinematic-chess"
            >Play Cinematic Chess on itch.io</a
          ></iframe
        >
      </div>
    </GlassSection>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "../components/PageLayout.vue";
import GlassSection from "../components/GlassSection.vue";
</script>

<style scoped>
h1 {
  font-size: var(--text-4xl);
  text-align: center;
  margin-bottom: var(--space-4xl);
}

h1:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}

.iframe-wrapper {
  position: relative;
  width: 100%;
  max-width: 1024px;
  margin: var(--space-xl) auto 0;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.iframe-wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 768px) {
  h1 {
    font-size: var(--text-3xl);
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: var(--text-2xl);
  }
}
</style>
