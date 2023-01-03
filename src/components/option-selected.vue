<script setup>
import TheItemCircle from '@/components/the-item-circle.vue';

import ThePaper from '@/assets/images/icon-paper.svg';
import { GAME_OPTIONS } from '@/helpers/const.js'


const emit = defineEmits(['ItemSelected']);
let GAME_OPTIONS2 = {key:'paper', borderColor: '#5870f5', borderColorShadow: '#2c47c3', imagePath: ThePaper};
let random = GAME_OPTIONS[getRandomInt()];

const items = ['rock', 'paper', 'scissors'];
function getRandomInt() {
    let min = Math.ceil(0);
    let max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// const gameWith = GAME_OPTIONS.find(item => item.key === option); el option sera con el prod que reciba
</script>

<template>
    <div class="all-items-container">
        <div class="rps-options">
            <div class="you-picked">
                <h2 class="player-title">You picked</h2>
                <the-item-circle
                    :borderColor="GAME_OPTIONS2.borderColor" 
                    :borderColorShadow="GAME_OPTIONS2.borderColorShadow"
                    :imagePath="GAME_OPTIONS2.imagePath"
                />
            </div>
            <div class="house-picked">
                <h2 class="player-title">The house picked</h2>
                <the-item-circle
                    :borderColor="random.borderColor" 
                    :borderColorShadow="random.borderColorShadow"
                    :imagePath="random.imagePath"
                />
            </div>
            
            
        </div>
    </div>
</template>

<style lang="scss" scope>
    .player-title {
        @apply text-white text-center my-8 text-2xl uppercase;
    }
</style>