<script setup>
import TheItemCircle from '@/components/the-item-circle.vue'
import { GAME_OPTIONS } from '@/helpers/const.js'

/*
import TheScissors from '@/assets/images/icon-scissors.svg'
import ThePaper from '@/assets/images/icon-paper.svg'
import TheRock from '@/assets/images/icon-rock.svg' */

const emit = defineEmits(['ItemSelected']);

function itemSelected(option){
    emit('ItemSelected', option)
}
</script>

<template>
    <div class="all-items-container">
        <p class="message">Select your option for playing</p>
        <div class="rps-options">
            <the-item-circle
                v-for="(options, i) in GAME_OPTIONS"
                :key="i"
                :borderColor="options.borderColor" 
                :borderColorShadow="options.borderColorShadow"
                :imagePath="options.imagePath"
                :class="options.key"
                @click="itemSelected(options.key)"
            />
        </div>
    </div>
</template>

<style lang="scss" scope>
.all-items-container{
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
}
</style>