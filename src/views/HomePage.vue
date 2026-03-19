<template>
  <PageLayout>
    <div class="hero animate__animated animate__fadeInDown animate__slow">
      <figure
        class="image-placeholder image-placeholder--hero"
        aria-label="Placeholder: hero image"
      >
        <img
          src="/public/images/MainUI.png"
          alt="Korisničko sučelje"
          class="image-placeholder__inner"
        />
      </figure>
      <h1>Cinematic Chess</h1>
      <p class="hero-intro">
        Cinematic Chess predstavlja računalnu šahovsku igru koja objedinjuje
        klasična pravila šaha s kinematografskim prikazom partije. Ova web
        stranica pruža pregled projekta, pristup igri u pregledniku te mogućnost
        preuzimanja pune verzije.
      </p>
    </div>

    <div class="nav-cards">
      <RouterLink
        to="/o-web-stranici"
        class="nav-card animate__animated animate__fadeInUp animate__delay-1s"
      >
        <h2>O web stranici</h2>
        <p>Informacije o svrhi stranice, tehnologijama i arhitekturi.</p>
      </RouterLink>
      <RouterLink
        to="/o-igri"
        class="nav-card animate__animated animate__fadeInUp animate__delay-2s"
      >
        <h2>O igri</h2>
        <p>
          Opis Cinematic Chess, arhitekture sustava i korištenih tehnologija.
        </p>
      </RouterLink>
      <RouterLink
        to="/sahovska-ploca"
        class="nav-card animate__animated animate__fadeInUp animate__delay-3s"
      >
        <h2>Šahovska ploča</h2>
        <p>Interaktivna demonstracija šahovske ploče u web aplikaciji.</p>
      </RouterLink>
      <RouterLink
        to="/igraj"
        class="nav-card animate__animated animate__fadeInUp animate__delay-4s"
      >
        <h2>Igraj</h2>
        <p>Pokreni Cinematic Chess direktno u pregledniku.</p>
      </RouterLink>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "../components/PageLayout.vue";
import { RouterLink } from "vue-router";
</script>

<style scoped>
.hero-intro {
  font-size: var(--text-lg);
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-4xl);
  line-height: 1.85;
}

h1 {
  font-size: var(--text-4xl);
  text-align: center;
  margin-bottom: var(--space-xl);
}

h1:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}

.image-placeholder {
  margin: 0 auto var(--space-2xl);
  max-width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(30, 41, 59, 0.8) 0%,
    rgba(15, 23, 42, 0.9) 100%
  );
  border: 1px dashed var(--color-text-muted);
}

.image-placeholder--hero {
  max-width: 800px;
}

.image-placeholder__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 120px;
}

.image-placeholder__label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.hero {
  margin-bottom: var(--space-4xl);
}

.nav-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-xl);
}

.nav-card {
  display: block;
  padding: var(--space-xl);
  background: var(--color-bg-elevated);
  border-radius: var(--radius-xl);
  padding: var(--space-xl) var(--space-2xl);
  box-shadow: var(--shadow-lg);
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.nav-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
}

.nav-card {
  animation-fill-mode: both;
}

.nav-card h2 {
  font-size: var(--text-xl);
  margin: 0 0 var(--space-sm);
  color: var(--color-section-heading);
}

.nav-card p {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.6;
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
