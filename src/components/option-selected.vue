<script setup>
import { ref } from 'vue';
import TheItemCircle from '@/components/the-item-circle.vue';

import ThePaper from '@/assets/images/icon-paper.svg';
import { GAME_OPTIONS } from '@/helpers/const.js'
import { useComponentChange } from '@/composables/useComponentChange.js';

const {
  componentChange,
  gameRules,
  YouWin,
  resultMsj
} = useComponentChange();
function goTo(){
    componentChange('c_select');
}
const props = defineProps(['itemForGame'])

const ResultMessage = ref('you lose');

const emit = defineEmits(['ItemSelected']);
let random = GAME_OPTIONS[getRandomInt()];
const gameWith = GAME_OPTIONS.find(item => item.key === props.itemForGame);
gameRules(props.itemForGame, random.key);

const items = ['rock', 'paper', 'scissors'];
function getRandomInt() {
    let min = Math.ceil(0);
    let max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
</script>

<template>
    <div class="rps-selected-container">
        <div class="rps-option-selected">
            <div class="you-picked">
                <h2 class="player-title">You picked</h2>
                <the-item-circle
                    :borderColor="gameWith.borderColor" 
                    :borderColorShadow="gameWith.borderColorShadow"
                    :imagePath="gameWith.imagePath"
                    :class="{'win': YouWin}"
                />
            </div>
            <div class="house-picked">
                <h2 class="player-title">The house picked</h2>
                <the-item-circle
                    :borderColor="random.borderColor" 
                    :borderColorShadow="random.borderColorShadow"
                    :imagePath="random.imagePath"
                    :class="{'win': !YouWin}"
                />
            </div>
        </div>
        <div class="results-container">
            <p>{{ resultMsj }}</p>
            <button @click="goTo()">play again</button>
        </div>
    </div>
</template>

<style lang="scss" scope>
    .rps-selected-container{
        @apply flex flex-col justify-center h-full gap-12;
        & .rps-option-selected{
            @apply w-full grid items-center justify-items-center mx-auto my-0;
            max-width: 600px;
            grid-template-columns: repeat(2,minmax(0,1fr));
            grid-template-rows: repeat(1,minmax(0,1fr));
            & .player-title {
                @apply text-white text-center my-8 text-2xl uppercase;
            }
        }
        & .results-container{
            @apply w-60 my-0 mx-auto;
            & p{
                @apply text-6xl text-white uppercase text-center;
            }
            & button {
                @apply bg-white w-60 uppercase py-2 rounded-lg my-4 text-gray-700;
            }
            & button:hover{
                @apply text-red-600;
            }
        }
    }
    
    

    .item.win{
        box-shadow: 0px 0px 150px 100px rgba(155,155,155,0.8);
    }
</style>