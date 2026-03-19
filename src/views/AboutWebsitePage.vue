<template>
  <PageLayout>
    <h1 class="page-title animate__animated animate__fadeInDown">O web stranici</h1>

    <GlassSection title="Svrha stranice" :delay="2">
      <p>
        Ova web stranica služi kao informativna prezentacija projekta Cinematic
        Chess. Svrha stranice jest pružanje pregleda projekta, pristup
        pregledničkoj verziji igre te mogućnost preuzimanja pune verzije
        aplikacije za lokalno izvođenje.
      </p>
      <p>
        Stranica objedinjuje dokumentaciju arhitekture sustava, opis
        korištenih tehnologija i interaktivne elemente koji omogućuju
        korisniku da se upozna s projektom prije preuzimanja ili igranja.
      </p>
    </GlassSection>

    <GlassSection title="Tehnologije web stranice" :delay="3">
      <p>
        Web stranica je razvijena korištenjem suvremenih front-end tehnologija:
      </p>
      <ul class="tech-list">
        <li>
          <strong>Vue 3</strong> – reaktivni okvir za izgradnju korisničkog
          sučelja i komponentnu arhitekturu.
        </li>
        <li>
          <strong>TypeScript</strong> – statička tipizacija za poboljšanu
          održivost i manje grešaka u kodu.
        </li>
        <li>
          <strong>Vite</strong> – alat za brzi razvoj i optimiziranu
          produkcijsku izgradnju projekta.
        </li>
      </ul>
    </GlassSection>

    <GlassSection title="Struktura i arhitektura stranice" :delay="4">
      <p>
        Stranica je strukturirana kao višestranična aplikacija s navigacijom
        između odvojivih sadržajnih sekcija. Sastoji se od glavnog zaglavlja s
        navigacijom, početne stranice s pregledom te zasebnih stranica za
        informacije o web stranici, opis igre, interaktivnu šahovsku ploču i
        igranje u pregledniku.
      </p>
      <p>
        Arhitektura je statička i front-end isključiva: svi resursi učitavaju
        se na klijentu. Namjera stranice jest informativna – pruža pregled
        projekta Cinematic Chess, poveznicu na igranje u pregledniku te
        mogućnost preuzimanja pune verzije igre.
      </p>
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

.tech-list {
  margin: var(--space-lg) 0;
  padding-left: 1.5rem;
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.85;
}

.tech-list li {
  margin-bottom: var(--space-sm);
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
