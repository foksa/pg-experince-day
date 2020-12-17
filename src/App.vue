<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="title">Configurator</div>
      </div>
    </section>
    <file-picker></file-picker>
    <configuration-editor></configuration-editor>
    <button class="button" @click="save">Save</button>
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
    async save() {
      let err = await this.$store.dispatch('validate');
      if (err) {
        alert('Invalid format')
      }
      else {
        this.$store.dispatch('save');
      }

    }
  }
}
</script>

<style lang="scss">

</style>
