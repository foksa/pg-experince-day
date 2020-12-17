<template>
  <section class="section">
    <div class="field">
      <div class="label">Timeout</div>
      <input class="input" type="number" placeholder="0" v-model="timeout">
    </div>
    <div class="field">
      <div class="label">Device name</div>
      <input class="input" v-model="deviceName">
    </div>
    <feedback-editor></feedback-editor>
  </section>
</template>

<script>
import FeedbackEditor from "@/components/FeedbackEditor";
export default {
name: "ConfigurationEditor",
  components: {FeedbackEditor},
  computed: {
    timeout: {
      get() {
        return this.$store.state.timeout;
      },
      set(val) {
        this.$store.commit('setTimeout', Number(val))
      }
    },
    deviceName: {
      get() {
        return this.$store.state.deviceName
      },
      set(val) {
        this.$store.commit('setDeviceName', val)
      }
    }
  }
}
</script>

<style scoped>

</style>