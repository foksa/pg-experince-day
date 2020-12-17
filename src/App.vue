<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="title">Configurator</div>
      </div>
    </section>
    <file-picker></file-picker>
    <configuration-editor></configuration-editor>
  </div>
</template>

<script>

import FilePicker from "@/components/FilePicker";
import ConfigurationEditor from "@/components/ConfigurationEditor";
export default {
  name: 'App',
  components: {
    ConfigurationEditor,
    FilePicker
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
