<script setup>
import { computed } from "vue";
import { games } from "../data/games";

// Vue Router передаёт сюда :id из адреса /games/:id.
const props = defineProps({ id: { type: String, required: true } });
const game = computed(() => games.find((item) => item.id === props.id));
</script>

<template>
  <section v-if="game" class="detail-page">
    <RouterLink class="text-link" to="/games">← Назад к коллекции</RouterLink>
    <div class="detail-layout">
      <div class="detail-visual">
        <span class="detail-number">ИГРА / {{ id.toUpperCase() }}</span
        ><span class="big-emoji">{{ game.emoji }}</span
        ><span class="detail-corner">✳</span>
      </div>
      <div class="detail-info">
        <p class="eyebrow">ИЗ КОЛЛЕКЦИИ ИГРОВАЯ</p>
        <h1>{{ game.name }}</h1>
        <p class="detail-description">{{ game.description }}</p>
        <div class="detail-divider"></div>
        <p class="detail-hint">Собери друзей. Выбери игру. Начни вечер.</p>
        <RouterLink class="button" to="/games"
          >Другие игры <span>↗</span></RouterLink
        >
      </div>
    </div>
  </section>

  <section v-else class="simple-page">
    <h1>Такой игры нет</h1>
    <RouterLink class="button" to="/games">К списку игр</RouterLink>
  </section>
</template>
