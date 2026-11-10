<script setup>
import { games } from "../data/games";
</script>

<template>
  <section class="catalog-page">
    <div class="page-heading">
      <div>
        <p class="eyebrow">КАТАЛОГ / 03 ИГРЫ</p>
        <h1>Выбирай свою игру<span class="heading-star">✳</span></h1>
      </div>
      <p>
        От спокойной стратегии до весёлого хаоса — найди игру для своего вечера.
      </p>
    </div>

    <div class="cards">
      <RouterLink
        v-for="game in games"
        :key="game.id"
        class="card"
        :to="{ name: 'game', params: { id: game.id } }"
      >
        <span class="card-top"
          >ИГРА / 0{{ games.indexOf(game) + 1 }} <span>↗</span></span
        >
        <span class="emoji">{{ game.emoji }}</span>
        <span class="card-bottom"
          ><strong>{{ game.name }}</strong
          ><small>Узнать больше</small></span
        >
      </RouterLink>
    </div>
  </section>
</template>
