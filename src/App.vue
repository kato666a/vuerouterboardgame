<template>
  <div class="app">
    <header class="header">
      <RouterLink class="brand" to="/">
        <span class="brand-icon">✦</span>
        <span>игровая<span class="brand-dot">.</span></span>
      </RouterLink>

      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/games">Игры</RouterLink>
        <RouterLink to="/about">О проекте</RouterLink>
        <RouterLink to="/contacts">Контакты</RouterLink>
      </nav>
      <RouterLink class="header-action" to="/games"
        >Выбрать игру <span>↗</span></RouterLink
      >
    </header>

    <main class="content">
      <RouterView />
    </main>
    <footer class="footer">
      <span>Игра начинается с выбора.</span
      ><span>Учебный проект · Vue Router</span>
    </footer>
  </div>
</template>
