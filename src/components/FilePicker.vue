<template>
  <div>
    <button class="button" @click="pickFile()">
      Load Configuration
    </button>
    <input id="selectFile" type="file" style="display: none" ref="picker" v-on:change="handleUpload">
  </div>
</template>
<script>

export default {
  name: 'file-picker',
  components: {},
  data: function () {
    return {
      filename: null
    }
  },

  methods: {

    pickFile() {
      this.$refs.picker.click()
    },

    handleUpload(e) {
      let fileReader = new FileReader();

      fileReader.onload = (event) => {
        this.$store.dispatch('parse', event.target.result)
      };

      if (e.target.files[0]) {

        fileReader.readAsArrayBuffer(e.target.files[0]);
        e.target.value = null;
      }

      return false;
    }
  }
}
</script>
<style>

</style>