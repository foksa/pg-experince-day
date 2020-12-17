<template>
  <section class="section">
    <div class="field">
      <div class="label">Timeout</div>
      <input class="input" v-bind:class="{'is-danger': timeoutError}"  type="number" placeholder="0" v-model="timeout">
      <p class="help is-danger">{{timeoutError}}</p>
    </div>
    <div class="field">
      <div class="label">Device name</div>
      <input class="input" v-model="deviceName">
    </div>
    <feedback-editor></feedback-editor>
    <div class="field pt-3">
      <button class="button" @click="save">Save</button>
    </div>
  </section>
</template>

<script>
import FeedbackEditor from "@/components/FeedbackEditor";
export default {
name: "ConfigurationEditor",
  components: {FeedbackEditor},
  data() {
    return {
      errors: {}
    }
  },
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
    },
    timeoutError() {
      return this.errors.timeout || "";
    }
  },
  methods: {
    async save() {
      this.errors = {};
      let err = await this.$store.dispatch('validate');
      if (err) {
        //alert(err)
        this.errors = await this.$store.dispatch('getErrors');
        console.log(this.errors);
      }
      else {
        this.$store.dispatch('save');
      }
    }
  }
}
</script>

<style scoped>

</style>