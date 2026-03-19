<template>
  <PageLayout>
    <h1 class="page-title animate__animated animate__fadeInDown">O igri Cinematic Chess</h1>

    <GlassSection title="Što je Cinematic Chess" :delay="2">
      <figure
        class="image-placeholder image-placeholder--section"
        aria-label="Placeholder: prikaz igre Cinematic Chess"
      >
        <div class="image-placeholder__inner">
          <span class="image-placeholder__label">Placeholder: prikaz igre</span>
        </div>
      </figure>
      <p>
        Cinematic Chess predstavlja računalnu šahovsku igru razvijenu s ciljem
        objedinjavanja klasičnih pravila šaha i suvremenih vizualnih
        tehnologija. Sustav zadržava formalizirana pravila igre definirana
        međunarodnim standardima, dok istovremeno uvodi naglašenu
        kinematografsku i estetsku komponentu prikaza partije.
      </p>
      <p>
        Za razliku od klasičnih digitalnih šahovskih aplikacija, koje su
        prvenstveno usmjerene na funkcionalnost i minimalizam prikaza,
        Cinematic Chess stavlja dodatni naglasak na audiovizualni doživljaj.
        Time se omogućuje korisniku da šahovsku partiju ne doživljava
        isključivo kao niz poteza, već kao strukturirani i dinamični narativ.
      </p>
      <p>
        Sustav je koncipiran kao web aplikacija koja služi kao distribucijska
        platforma za izvođenje igre unutar web preglednika, čime se osigurava
        pristupačnost bez potrebe za lokalnom instalacijom softvera.
      </p>
    </GlassSection>

    <GlassSection title="Arhitektura i način rada sustava" :delay="3">
      <p>
        Arhitektura igre temelji se na jasno definiranoj podjeli odgovornosti
        između upravljačkog, logičkog i vizualnog sloja. Logički sloj zadužen
        je za implementaciju pravila kretanja šahovskih figura, provjeru
        valjanosti poteza te simulaciju potencijalnih stanja partije.
      </p>
      <p>
        Vizualni sloj odgovoran je za prikaz šahovske ploče, animaciju figura
        i upravljanje kamerom, dok upravljački sloj koordinira izmjenu poteza,
        inicijalizaciju igre i sinkronizaciju promjena između logike i prikaza.
      </p>
      <p>
        Posebna pažnja posvećena je odvajanju logičkih podataka od vizualnih
        objekata unutar Unity okruženja. Time je omogućena simulacija poteza
        nad kopijom stanja ploče, bez izravnog utjecaja na prikaz u sceni,
        čime se povećava pouzdanost i modularnost sustava.
      </p>
    </GlassSection>

    <GlassSection title="Korištene tehnologije" :delay="4">
      <p>
        Razvoj igre proveden je u Unity razvojnome okruženju korištenjem
        programskog jezika C#. Objektno orijentirani pristup omogućio je
        modeliranje šahovskih figura kao zasebnih klasa s definiranim
        pravilima kretanja i pripadajućim metodama.
      </p>
      <p>
        Igra je izvožena u WebGL formatu, čime je omogućeno njezino pokretanje
        unutar web preglednika bez dodatnih instalacija. Time je postignuta
        platformna neovisnost i jednostavna distribucija sustava.
      </p>
      <p>
        Za analizu pozicija i generiranje računalnih poteza integriran je
        šahovski engine Stockfish, čime je omogućena igra protiv računalnog
        protivnika te dodatna provjera ispravnosti implementirane šahovske
        logike.
      </p>
    </GlassSection>

    <GlassSection title="Kinematografska realizacija" :delay="5">
      <p>
        Jedna od ključnih karakteristika sustava jest naglašena vizualna i
        kinematografska prezentacija partije. Za upravljanje kamerama i
        prijelazima korišten je Unity alat Cinemachine, koji omogućuje
        dinamičko praćenje figura i naglašavanje ključnih trenutaka tijekom
        igre.
      </p>
      <p>
        Audio komponenta implementirana je pomoću Addressables sustava, čime
        je omogućeno dinamičko učitavanje zvučnih resursa tijekom izvođenja
        aplikacije. Dodatno, primijenjen je vanjski alat za analizu glazbe
        koji generira vremenske oznake ritmičkih naglasaka, čime se postiže
        precizna sinkronizacija animacija i glazbene podloge.
      </p>
      <p>
        Takav pristup rezultira sustavom u kojem su logika igre, vizualna
        prezentacija i zvučni elementi međusobno usklađeni, stvarajući
        jedinstveni audiovizualni doživljaj šahovske partije.
      </p>
    </GlassSection>

    <GlassSection title="Pohrana podataka i modularnost sustava" :delay="6">
      <p>
        Sustav uključuje mehanizam za pohranu šahovskih partija i povijesti
        poteza u JSON formatu, čime je omogućena kasnija reprodukcija partije,
        analiza odigranih poteza te generiranje animacijskih zapisa.
      </p>
      <p>
        Upravljanje trajnim podacima implementirano je putem centralizirane
        komponente temeljene na Singleton obrascu dizajna. Time je osigurana
        konzistentnost rada s datotekama te globalna dostupnost sustava za
        pohranu tijekom cijelog životnog ciklusa aplikacije.
      </p>
      <p>
        Modularna struktura omogućuje jednostavno održavanje, nadogradnju
        funkcionalnosti i potencijalno proširenje sustava dodatnim analizama,
        naprednijim AI algoritmima ili proširenim kinematografskim efektima.
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

.image-placeholder {
  margin: 0 auto var(--space-xl);
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
