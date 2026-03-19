<template>
  <header class="app-header">
    <div class="header-left">
      <RouterLink to="/" class="logo-link">
        <h1>Cinematic Chess</h1>
      </RouterLink>
    </div>

    <nav class="header-right">
      <RouterLink to="/">Početna</RouterLink>
      <RouterLink to="/o-web-stranici">O stranici</RouterLink>
      <RouterLink to="/o-igri">O igri</RouterLink>
      <RouterLink to="/sahovska-ploca">Šahovska ploča</RouterLink>
      <RouterLink to="/igraj">Igraj</RouterLink>
      <button
        type="button"
        class="theme-toggle"
        :aria-label="isDark ? 'Uključi svijetli način' : 'Uključi tamni način'"
        :aria-pressed="!isDark"
        :title="isDark ? 'Svijetli način' : 'Tamni način'"
        @click="toggleTheme"
      >
        <span class="theme-toggle__track">
          <svg class="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
          </svg>
          <svg class="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          <span class="theme-toggle__thumb"></span>
        </span>
      </button>
      <button
        type="button"
        class="download-btn"
        @click="openGameDownload"
      >
        Preuzmi
      </button>
    </nav>

    <Transition name="fade-scale">
      <div v-if="showPopup" class="popup" role="status" aria-live="polite">
        <p>
          Stranica za preuzimanje otvorit će se u novoj kartici.<br />
          Dostupno za <strong>Windows</strong> operacijski sustav.
        </p>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { GAME_DOWNLOAD_URL } from "../constants";

const showPopup = ref(false);
const POPUP_DURATION_MS = 3000;

const THEME_KEY = "cinematic-chess-theme";
const THEME_DARK = "dark";
const THEME_LIGHT = "light";

const isDark = ref(true);

function getStoredTheme(): string {
  try {
    return localStorage.getItem(THEME_KEY) ?? THEME_DARK;
  } catch {
    return THEME_DARK;
  }
}

function applyTheme(theme: string): void {
  isDark.value = theme === THEME_DARK;
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* ignore */
  }
}

function toggleTheme(): void {
  const next = isDark.value ? THEME_LIGHT : THEME_DARK;
  applyTheme(next);
}

function openGameDownload(): void {
  window.open(GAME_DOWNLOAD_URL, "_blank", "noopener,noreferrer");
  showPopup.value = true;
  setTimeout(() => {
    showPopup.value = false;
  }, POPUP_DURATION_MS);
}

onMounted(() => {
  applyTheme(getStoredTheme());
});
</script>

<style scoped>
.app-header {
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) var(--space-lg);

  background-color: var(--color-header-bg);
  color: var(--color-text-inverse);
}

.logo-link {
  text-decoration: none;
  color: inherit;
}

.logo-link:hover {
  opacity: 0.9;
}

.header-left h1 {
  font-size: var(--text-xl);
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.header-right a,
.download-btn {
  color: var(--color-text-inverse);
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s ease;
  padding: var(--space-xs) var(--space-sm);
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
}

.header-right a:hover,
.download-btn:hover {
  opacity: 0.9;
}

.download-btn {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.download-btn:hover {
  transform: scale(1.05);
}

.download-btn:active {
  transform: scale(0.98);
}

.header-right a.router-link-exact-active {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.header-right a:focus-visible,
.download-btn:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}

.theme-toggle {
  position: relative;
  padding: 0;
  width: 56px;
  height: 28px;
  min-width: 56px;
  min-height: 28px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 999px;
}

.theme-toggle__track {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 100%);
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.theme-toggle:hover .theme-toggle__track {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.12) 100%);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2), 0 0 12px rgba(99, 102, 241, 0.25);
}

.theme-toggle:focus-visible .theme-toggle__track {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}

.theme-toggle__thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(145deg, #fff 0%, #e2e8f0 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
}

.theme-toggle[aria-pressed="false"] .theme-toggle__thumb {
  transform: translateX(0);
}

.theme-toggle[aria-pressed="true"] .theme-toggle__thumb {
  transform: translateX(28px);
}

.theme-toggle__icon {
  position: absolute;
  top: 50%;
  width: 14px;
  height: 14px;
  margin-top: -7px;
  color: rgba(255, 255, 255, 0.9);
  transition: opacity 0.25s ease;
  pointer-events: none;
}

.theme-toggle__icon--sun {
  left: 7px;
  opacity: 1;
}

.theme-toggle__icon--moon {
  right: 7px;
  left: auto;
  opacity: 0.6;
}

.theme-toggle[aria-pressed="true"] .theme-toggle__icon--sun {
  opacity: 0.6;
}

.theme-toggle[aria-pressed="true"] .theme-toggle__icon--moon {
  opacity: 1;
}

.popup {
  position: fixed;
  top: 80px;
  right: var(--space-lg);
  background: var(--color-popup-bg);
  color: var(--color-text-primary);
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  font-size: var(--text-base);
  z-index: 1100;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

@media (max-width: 900px) {
  .header-right {
    flex-wrap: wrap;
  }

  .header-right a:not(.logo-link) {
    font-size: var(--text-sm);
  }
}

@media (max-width: 768px) {
  .app-header {
    flex-wrap: wrap;
    padding: var(--space-md) var(--space-lg);
  }

  .header-left h1 {
    font-size: var(--text-lg);
  }

  .header-right {
    gap: var(--space-sm);
  }

  .popup {
    top: 70px;
    right: var(--space-md);
    left: var(--space-md);
    padding: var(--space-md);
  }
}
</style>
