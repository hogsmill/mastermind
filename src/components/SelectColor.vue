<template>
  <div id="selectColor" class="rounded shadow-sm">
    <div>
      <div class="red" @click="setValue('red')"> </div>
      <div class="orange" @click="setValue('orange')"> </div>
      <div class="yellow" @click="setValue('yellow')"> </div>
    </div>
    <div>
      <div class="blue" @click="setValue('blue')"> </div>
      <div class="green" @click="setValue('green')"> </div>
      <div class="purple" @click="setValue('purple')"> </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setValue(color) {
      var updateData = document.getElementById('updateData').value
      if (!updateData) {
        updateData = {}
      }
      var updateMethod = document.getElementById('updateMethod').value
      updateData.color = color
      this.$store.dispatch(updateMethod, updateData)
    }
  }
}
</script>

<style>
  #selectColor { background-color: #fff; width: 100px; border: 1px solid #ccc; position: absolute; z-index: 10; padding-top: 6px; visibility: hidden; }
  #selectColor div div { display: inline-block; width: 20px; height: 20px; margin: 3px; }
</style>
