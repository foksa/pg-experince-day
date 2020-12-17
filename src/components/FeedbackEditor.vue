<template>
  <div>
    <div class="control">
      <label class="radio">
        <input type="radio" value="visibleFeedback" v-model="feedbackType">
        Visible Feedback
      </label>
      <label class="radio">
        <input type="radio" value="audibleFeedback" v-model="feedbackType">
        Audible feedback
      </label>
    </div>
    <div class="control">
      <div class="select">
        <select v-model="feedbackValue">
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

    feedbackType:{
      get() {
        return this.$store.state.feedbackType;
      },
      set(val) {
        this.$store.commit('setFeedbackType', val)
      }
    },
    feedbackValue:{
      get() {
        return this.$store.state.feedbackValue;
      },
      set(val) {
        this.$store.commit('setFeedbackValue', val)
      }
    },
    feedbackOptions: function() {
      return this.feedbackData[this.feedbackType]
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>