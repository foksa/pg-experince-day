<template>
  <div>
    <div class="control">
      <label class="radio">
        <input type="radio" value="visibleFeedback" v-model="picked" @click="selectFeedbackType">
        Visible Feedback
      </label>
      <label class="radio">
        <input type="radio" value="audibleFeedback" v-model="picked" @click="selectFeedbackType">
        Audible feedback
      </label>
    </div>
    <div class="control">
      <div class="select">
        <select v-model="feedbackValue" @change="updateFeedbackValue">
          <template>
            <option  v-for="(value, key) in feedbackOptions" v-bind:key="key" :value="value">{{key}}</option>
          </template>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackEditor",
  data() {
    return {
      picked: 'visibleFeedback',
      feedbackValue: 0,
      feedbackData: {
        audibleFeedback: {
          BEEP: 0,
          BUUP_BUUP: 1,
          BEEP_BUUP: 2,
          BEEP_BEEP: 3
        },
        visibleFeedback: {
          GREEN: 0,
          RED: 1,
          BLUE: 2
        }
      }
    }
  },
  computed: {
    feedbackOptions: function() {
      return this.feedbackData[this.picked]
    }
  },
  methods: {
    selectFeedbackType: function () {
      this.feedbackValue = 0;
    }
  }
}
</script>

<style scoped>

</style>