<template>
  <section class="hero">
    <div class="hero-copy">
      <p class="eyebrow">
        <span class="eyebrow-line"></span> КОЛЛЕКЦИЯ ИГР ДЛЯ КАЖДОГО
      </p>
      <h1>Хороший вечер<br />начинается <em>с игры.</em></h1>
      <p class="hero-description">
        Здесь легко найти игру под настроение. Открой каталог, выбери
        понравившуюся и узнай о ней больше.
      </p>
      <RouterLink class="button" to="/games"
        >Смотреть коллекцию <span>↗</span></RouterLink
      >
      <div class="hero-note">
        <strong>03</strong><span>игры для начала<br />твоей коллекции</span>
      </div>
    </div>
    <div class="hero-art" aria-hidden="true">
      <div class="art-circle"></div>
      <div class="art-card art-card-back">UNO<span>+</span></div>
      <div class="art-card art-card-front">♟<span>Шахматы</span></div>
      <div class="art-sticker">ТВОЙ ХОД<br />✳</div>
    </div>
  </section>
  <section class="home-bottom">
    <span>01 / ВЫБЕРИ</span><span>02 / УЗНАЙ ПРАВИЛА</span
    ><span>03 / ИГРАЙ</span>
  </section>
</template>
