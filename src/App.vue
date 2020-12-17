<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="title">Configurator</div>
      </div>
    </section>
    <file-picker></file-picker>
    <button class="button" @click="save">Save</button>
  </div>
</template>

<script>

import FilePicker from "@/components/FilePicker";
export default {
  name: 'App',
  components: {
    FilePicker
  }
}
</script>

<style lang="scss">

</style>
