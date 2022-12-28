<template>
  <div class="item">
    <div class="item-rounded">
      <img alt="Vue logo" :src="imagePath"  />
    </div>
  </div>
</template>
<script setup>
  defineProps({
    borderColor: String,
    borderColorShadow: String,
    imagePath: String
  })

</script>

<style scoped>
.item{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 50%;
  border: 22px solid v-bind(borderColor);
  box-shadow: 2px 8px 2px -0px v-bind(borderColorShadow);
}
.item .item-rounded{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 156px;
  height: 156px;
  border-radius: 50%;

  -webkit-box-shadow: inset 0px 8px 25px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: inset 0px 8px 25px 0px rgba(0,0,0,0.75);
  box-shadow: inset 0px 8px 25px 0px rgba(0,0,0,0.75);
}
.item img{
  width: 75px;
  height: 75px;
  object-fit: contain;
}
</style>