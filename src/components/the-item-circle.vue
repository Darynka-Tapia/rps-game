<template>
  <div class="item">
    <div class="item-rounded">
      <img alt="item image" :src="imagePath"  />
    </div>
  </div>
</template>
<script setup>
  
const props = defineProps(['borderColor', 'borderColorShadow', 'imagePath'])

</script>

<style lang="scss" scoped>
.item{
  @apply flex justify-center items-center w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-white rounded-full cursor-pointer;
  border: 22px solid v-bind(borderColor);
  box-shadow: 2px 8px 2px -0px v-bind(borderColorShadow);
  user-select: none; 
  & .item-rounded{
    @apply flex justify-center items-center w-[107px] h-[107px] sm:w-[156px] sm:h-[156px] rounded-full;
    -webkit-box-shadow: inset 0px 8px 25px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 8px 25px 0px rgba(0,0,0,0.75);
    box-shadow: inset 0px 8px 25px 0px rgba(0,0,0,0.75);
  }
  & img{
    @apply w-16 h-16 object-contain;
  }
}
.item:active{
  box-shadow: 0px 0px 12px 8px v-bind(borderColorShadow);
}
</style>