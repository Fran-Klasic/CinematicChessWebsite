<template>
  <PageLayout>
    <h1 class="page-title animate__animated animate__fadeInDown">Interaktivni prikaz šahovske ploče</h1>

    <GlassSection title="Demonstracija" :delay="2">
      <p>
        Sljedeći prikaz predstavlja pojednostavljenu demonstraciju koncepta
        interaktivne šahovske ploče unutar web aplikacije. Iako ne
        implementira cjelokupnu logiku sustava Cinematic Chess, ilustrira
        način povezivanja korisničke interakcije i vizualnog prikaza.
      </p>
      <p>
        U potpunoj verziji sustava svaka korisnička akcija prolazi kroz
        logički sloj provjere, nakon čega se valjani potez sinkronizirano
        prikazuje kroz animaciju i prilagodbu kamere.
      </p>

      <ChessPreview />
    </GlassSection>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "../components/PageLayout.vue";
import GlassSection from "../components/GlassSection.vue";
import ChessPreview from "../components/ChessPreview.vue";
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
