<template>
  <header class="app-header">
    <div class="header-left">
      <h1>Cinematic Chess</h1>
    </div>

    <nav class="header-right">
      <a href="#opis">Opis</a>

      <!-- PREUZMI -->
      <a href="#" @click.prevent="downloadCinematicChess"> Preuzmi </a>

      <a href="#igraj">Igraj</a>
    </nav>

    <!-- POPUP -->
    <transition name="fade-scale">
      <div v-if="showPopup" class="popup">
        <p>
          Preuzimanje je započeto.<br />
          Dostupno za <strong>Windows</strong> operacijski sustav.
        </p>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      showPopup: false,
      downloadUrl: "/CinematicChessBuild/CinematicChess.zip",
    };
  },
  methods: {
    downloadCinematicChess() {
      // trigger download
      const link = document.createElement("a");
      link.href = this.downloadUrl;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // show popup
      this.showPopup = true;

      // auto-hide popup
      setTimeout(() => {
        this.showPopup = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
/* ================= HEADER ================= */

.app-header {
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;

  background-color: #0f172a;
  color: #ffffff;
}

.header-left h1 {
  font-size: 1.5rem;
  margin: 0;
}

.header-right {
  display: flex;
  gap: 24px;
}

.header-right a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.header-right a:hover {
  opacity: 0.7;
}

/* ================= POPUP ================= */

.popup {
  position: fixed;
  top: 80px;
  right: 32px;
  background: rgba(30, 41, 59, 0.95);
  color: #e5e7eb;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  z-index: 1100;
}

/* ================= ANIMATION ================= */

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
