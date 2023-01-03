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
      <p class="message">Select your option for playing</p>
      <div class="rps-options">
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
      </div>
      
    <div class="rules">
      <button> rules </button>
    </div>
    </main>
  </div>
  
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');
.game-container{
  @apply w-full h-full py-10 px-0.5;
  font-family: 'Barlow Semi Condensed', sans-serif;
  background-image: var(--radial-gradient);
  & header{
    @apply flex justify-between w-full h-auto py-3 px-4 my-0 mx-auto rounded-xl;
    max-width: 500px;
    border: 2px solid var(--header-outline);
    & .score{
      @apply bg-white w-24 h-20 flex justify-center items-center flex-col rounded-xl;
      & .score__title{
        @apply text-xs uppercase;
        color: var(--score-text);
      }
      & .score__number{
        @apply text-4xl font-bold;
        color: var(--dark-text);
      }
    }
  }
  & main{
    @apply flex flex-col justify-between;
    height: calc(100% - 94px);
    & .message{
      @apply text-center my-4 text-2xl text-white;
    }
    & .rps-options{
      @apply m-auto w-full grid items-center justify-items-center;
      max-width: 600px;
      grid-template-columns: repeat(2,minmax(0,1fr));
      grid-template-rows: repeat(2,minmax(0,1fr));
      & .rock{
        grid-column: 1 / 3;
        grid-row: 2 / 3;
      }
    }
    & .rules {
      @apply flex justify-end py-0 px-10; 
      & button {
        @apply text-base uppercase bg-transparent text-white py-2 px-6 rounded border-2 border-solid border-white;
        font-family: 'Barlow Semi Condensed', sans-serif;
      }
    }
  }
}


</style>
