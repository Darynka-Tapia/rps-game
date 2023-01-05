import { ref } from 'vue';
import { GAME_OPTIONS } from '@/helpers/const.js';

const SELECT_COMPONENT = 'c_select';
const RESULT_COMPONENT = 'c_result';
const componentToUse = ref('c_select');

const YOU_LOSE = 'you lose';
const YOU_WIN = 'you win';

const score = ref(0);

export function useComponentChange() {
    const YouWin = ref(false);
const resultMsj = ref(YOU_LOSE);

    function componentChange(component){
        componentToUse.value = component;
    }
    function gameRules(item, itemRandom){
        item === 'paper' ? paper(itemRandom) : null;
        item === 'rock' ? rock(itemRandom) : null;
        item === 'scissors' ? scissors(itemRandom) : null;
    }
    function paper(oponent){
        if (oponent === 'rock') { 
            areYouWin()
            updateScore();
        }
    }
    function rock(oponent){
        if (oponent === 'scissors') { 
            areYouWin()
            updateScore();
        }
    }
    function scissors(oponent){
        if (oponent === 'paper') { 
            areYouWin()
            updateScore();
        }
    }
    function areYouWin(){
        YouWin.value = true; 
        resultMsj.value = YOU_WIN; 
    }

    function updateScore(){
        score.value++;
    }


    return { 
        componentChange,
        componentToUse,
        gameRules,
        score,
        YouWin,
        resultMsj
    }
}