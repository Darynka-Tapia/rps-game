<script setup>
import TheItemCircle from '@/components/the-item-circle.vue'
import TheScissors from '@/assets/images/icon-scissors.svg'
import ThePaper from '@/assets/images/icon-paper.svg'
import TheRock from '@/assets/images/icon-rock.svg'

</script>


<template>
  <div class="game-container">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/images/logo.svg" width="125" height="80" />
      <div class="score">
        <p class="score__title">Score </p>
        <p class="score__number">12</p>
      </div>
    </header>
    <main>
      <the-item-circle 
        :borderColor="'#5870f5'" 
        borderColorShadow="#2c47c3"
        :imagePath="ThePaper"
      />
      <the-item-circle 
        :borderColor="'#eca019'" 
        borderColorShadow="#c66c19"
        :imagePath="TheScissors"
      />
      <the-item-circle 
        :borderColor="'#d93852'" 
        :borderColorShadow="'#9a182f'"
        :imagePath="TheRock"
        class="rock"
      />
    </main>
    <footer>
      <button> rules </button>
    </footer>
  </div>
  
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');
.game-container{
  font-family: 'Barlow Semi Condensed', sans-serif;
  background-image: var(--radial-gradient);
  width: 100%;
  height: 100vh;
  padding: 40px 2px;
}
header{
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  height: auto;
  border: 2px solid var(--header-outline);
  padding: 12px 14px;
  margin: 0 auto;
  border-radius: 10px;
}
.score{
  background: white;
  height: 80px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
}
.score__title{
  font-size: 12px;
  color: var(--score-text);
  text-transform: uppercase;
}
.score__number{
  color: var(--dark-text);
  font-size: 44px;
  font-weight: 700;
}

main{
  margin: 50px auto;
  width: 100%;
  max-width: 600px;
  display: grid;
  height: 60vh;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2,minmax(0,1fr));
  grid-template-rows: repeat(2,minmax(0,1fr));
}

main > .rock{
  grid-column: 1 / 3;
  grid-row: 2 / 3;
}

footer {
  display: flex;
  justify-content: flex-end;
  padding: 0 40px;
}
footer button {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 8px 22px;
  border-radius: 4px;
}
</style>
