<script setup>
import { ref } from 'vue';
import AllItems from '@/components/all-items.vue';
import OptionSelected from '@/components/option-selected.vue';
import { useComponentChange } from '@/composables/useComponentChange.js';

const {
  componentToUse,
  componentChange,
  score
} = useComponentChange();

const itemForGame = ref('');
function ItemSelected(option){
  itemForGame.value = option;
  componentChange('c_result');
}

const isOpenRules = ref(false);
function openRules(){
  console.log('here');
  isOpenRules.value = true;
}
</script>


<template>
  <div class="game-container">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/images/logo.svg" width="125" height="80" />
      <div class="score">
        <p class="score__title">Score </p>
        <p class="score__number">{{ score }}</p>
      </div>
    </header>
    <main>
      <all-items 
        v-if="componentToUse === 'c_select'"
        @ItemSelected="ItemSelected"
      /> 
      <!--  -->
      <OptionSelected
        v-if="componentToUse === 'c_result'"
        :item-for-game="itemForGame"
      />
    <div class="rules">
      <button @click="openRules"> rules </button>
    </div>
    </main>
  </div>
  
  <Teleport to="body">
    <Transition>
      <div v-if="isOpenRules" class="modal-container">
        <div class="modal">
          <button @click="isOpenRules = false" class="btn-close">X</button>
          <img src="@/assets/images/image-rules.svg" alt="">
        </div>
      </div>
    </Transition>
  </Teleport>
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
    & .rules {
      @apply flex justify-end py-0 px-10; 
      & button {
        @apply text-base uppercase bg-transparent text-white py-2 px-6 rounded border-2 border-solid border-white;
        font-family: 'Barlow Semi Condensed', sans-serif;
      }
    }
  }
}

.modal-container{
  position: fixed;
  z-index: 999;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background:rgba(0, 0, 0, 0.6);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  & .btn-close{
    align-self: flex-end;
    color: red;
    font-weight: 800;
    margin-bottom: 25px;

  }
}


</style>
