// Superhero Mo Easter Egg with MP3 audio

(() => {
  const moLogoEasterEgg = document.querySelector('.mo-logo');
  const heroEggModal = document.getElementById('heroEasterEgg');
  const closeHeroEggButton = document.getElementById('closeHeroEgg');
  const heroThemeAudio = document.getElementById('heroTheme');

  function playHeroTheme() {
    if (!heroThemeAudio) return;

    heroThemeAudio.pause();
    heroThemeAudio.currentTime = 0;
    heroThemeAudio.volume = 0.45;

    heroThemeAudio.play().catch((error) => {
      console.warn('Mo theme audio could not play:', error);
    });
  }

  function stopHeroTheme() {
    if (!heroThemeAudio) return;

    heroThemeAudio.pause();
    heroThemeAudio.currentTime = 0;
  }

  function openHeroPopup() {
    if (!heroEggModal) return;

    heroEggModal.classList.remove('hidden');
    heroEggModal.setAttribute('aria-hidden', 'false');

    playHeroTheme();
  }

  function closeHeroPopup() {
    if (!heroEggModal) return;

    heroEggModal.classList.add('hidden');
    heroEggModal.setAttribute('aria-hidden', 'true');

    stopHeroTheme();
  }

  if (moLogoEasterEgg && heroEggModal) {
    moLogoEasterEgg.setAttribute('tabindex', '0');
    moLogoEasterEgg.setAttribute('role', 'button');
    moLogoEasterEgg.setAttribute(
      'aria-label',
      'Open Captain Transferable Skills easter egg'
    );

    moLogoEasterEgg.addEventListener('click', openHeroPopup);

    moLogoEasterEgg.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openHeroPopup();
      }
    });
  }

  if (closeHeroEggButton) {
    closeHeroEggButton.addEventListener('click', closeHeroPopup);
  }

  if (heroEggModal) {
    heroEggModal.addEventListener('click', (event) => {
      if (event.target === heroEggModal) {
        closeHeroPopup();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      heroEggModal &&
      !heroEggModal.classList.contains('hidden')
    ) {
      closeHeroPopup();
    }
  });
})();