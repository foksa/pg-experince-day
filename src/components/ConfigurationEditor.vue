<template>
  <section class="section">
    <div class="field">
      <div class="label">Timeout</div>
      <input class="input" type="number" placeholder="0">
    </div>
    <div class="field">
      <div class="label">Device name</div>
      <input class="input">
    </div>
    <feedback-editor></feedback-editor>
  </section>
</template>

<script>
import FeedbackEditor from "@/components/FeedbackEditor";
export default {
name: "ConfigurationEditor",
  components: {FeedbackEditor}
}
</script>

<style scoped>

</style>