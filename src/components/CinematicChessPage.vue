<template>
  <div class="page">
    <div class="bg-layer vignette"></div>
    <div class="bg-layer glow"></div>

    <main class="content">
      <ScrollFade :delay="1">
        <h1>Cinematic Chess</h1>
      </ScrollFade>

      <GlassSection title="Što je Cinematic Chess" :delay="2">
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
          inicijalizaciju igre i sinkronizaciju promjena između logike i
          prikaza.
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

      <GlassSection title="Interaktivni prikaz šahovske ploče" :delay="7">
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
      <GlassSection title="Prikaz Cinematic Chess">
        <p>
          U ovoj web verziji prikazan je Cinematic Chess bez računalnog
          protivnika. Za igranje protiv bota potrebno je preuzeti punu verziju
          aplikacije.
        </p>
        <div class="iframe-wrapper">
          <iframe
            frameborder="0"
            src="https://itch.io/embed-upload/16490293?color=333333"
            allowfullscreen=""
            ><a href="https://fran-klasic.itch.io/cinematic-chess"
              >Play Cinematic Chess on itch.io</a
            ></iframe
          >
        </div>
      </GlassSection>
    </main>
  </div>
</template>

<script>
import GlassSection from "./GlassSection.vue";
import ChessPreview from "./ChessPreview.vue";
import ScrollFade from "./ScrollFade.vue";

export default {
  name: "CinematicChessPage",
  components: {
    GlassSection,
    ChessPreview,
    ScrollFade,
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #0b1020;
  overflow-x: hidden;
}

.bg-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
}

.vignette {
  background: radial-gradient(circle, transparent 40%, rgba(0, 0, 0, 0.8) 100%);
}

.glow {
  background:
    radial-gradient(
      circle at 30% 20%,
      rgba(99, 102, 241, 0.18),
      transparent 40%
    ),
    radial-gradient(
      circle at 70% 60%,
      rgba(14, 165, 233, 0.14),
      transparent 45%
    );
  filter: blur(80px);
}

.content {
  position: relative;
  z-index: 2;
  max-width: 1300px;
  margin: 0 auto;
  padding: 160px 32px 120px;
  font-family: "Inter", system-ui, sans-serif;
  color: #e5e7eb;
  line-height: 1.85;
}

h1 {
  font-size: 3.6rem;
  text-align: center;
  margin-bottom: 96px;
}
p {
  font-size: larger;
  text-align: justify;
}
.iframe-wrapper {
  position: relative;
  width: 100%;
  max-width: 1024px;
  margin: 32px auto 0; /* center horizontally */
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}

.iframe-wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
