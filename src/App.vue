<script setup>
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/images/logo.svg" width="125" height="125" />
    <img alt="Vue logo" class="logo" src="./assets/images/logo-bonus.svg" width="125" height="125" />
    <img alt="Vue logo" class="logo" src="./assets/images/image-rules.svg" width="125" height="125" />
    <img alt="Vue logo" class="logo" src="./assets/images/image-rules-bonus.svg" width="125" height="125" />
    <img alt="Vue logo" class="logo" src="./assets/images/icon-spock.svg" width="125" height="125" />
    <img alt="Vue logo" class="logo" src="./assets/images/icon-scissors.svg" width="125" height="125" />
    <img alt="Vue logo" class="logo" src="./assets/images/icon-rock.svg" width="125" height="125" />
    <img alt="Vue logo" class="logo" src="./assets/images/icon-paper.svg" width="125" height="125" />
    <img alt="Vue logo" class="logo" src="./assets/images/icon-lizard.svg" width="125" height="125" />
    <img alt="Vue logo" class="logo" src="./assets/images/icon-close.svg" width="125" height="125" />
    <img alt="Vue logo" class="logo" src="./assets/images/bg-triangle.svg" width="125" height="125" />
    <img alt="Vue logo" class="logo" src="./assets/images/bg-pentagon.svg" width="125" height="125" />
  </header>

  <main>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
