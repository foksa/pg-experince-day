import Vue from 'vue'
import Vuex from 'vuex'

import {Configuration} from "@/generated/configuration";
import {saveAs} from 'file-saver';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feedbackType:'visibleFeedback',
    feedbackValue:0,
    timeout:0,
    deviceName:'',
    feedback: {
      visibleFeedback: 0
    }
  },
  getters: {
  },
  mutations: {
    setTimeout: (state, value) => {
      console.log('Mutation.setTimeout:', value)
      state.timeout = value;
    },
    setDeviceName: (state, value) => {
      console.log('Mutation.setDeviceName:', value)
      state.deviceName = value;
    },
    setFeedbackType: (state, value) => {
      console.log('Mutation.setFeedbackType:', value)
      state.feedbackType = value;
      delete state.visibleFeedback;
      delete state.audibleFeedback;
      state[state.feedbackType] = state.feedbackValue;
      console.log(state)
    },
    setFeedbackValue: (state, value) => {
      console.log('Mutation.setFeedbackValue:', value)
      state.feedbackValue = value;
      state[state.feedbackType] = value;
    }

  },
  actions: {
    /**
     * Action to validate data on state
     *
     * @param context
     * @returns {string}
     */
    validate: (context) => {
      let err = Configuration.verify(context.state);
      if (err) {
        console.log('Error:', err);
      }
      return err
    },
    /**
     * Get array of all errors
     * returns {array}
     */
    getErrors: ({state}) => {
      let errors = {};

      let obj = {
        timeout: state.timeout,
        deviceName: state.deviceName,
        audibleFeedback: state.audibleFeedback,
        visibleFeedback: state.visibleFeedback
      }
      while (Configuration.verify(obj)) {
        let tmp = Configuration.verify(obj).split(':');
        errors[tmp[0]] = tmp[1];
        delete obj[tmp[0]];
      }

      console.log(errors);

      return errors;
    },
    /**
     * Save configuration to file
     *
     * @param context
     */
    save: (context) => {

      //Generate Configuration from state
      let dataToSave = Configuration.fromObject(context.state);
      console.log('Data to save', dataToSave)

      //Create binary data to be saved
      let binaryData = Configuration.encode(dataToSave).finish();

      //Save data
      let blob =  new Blob([binaryData], { type: 'application/protobuf' });
      saveAs(blob, 'config.pb');
    },

    /**
     * Parse file stream to configuration
     *
     * @param context
     * @param stream
     */
    parse: (context, stream) => {

      //Get Uint8Array from stream that can be decoded
      let arr = new Uint8Array(stream)

      let msg = Configuration.decode(arr);
      console.log('Loaded data',msg);
      context.commit('setTimeout', msg.timeout);
      context.commit('setDeviceName', msg.deviceName);

      if (msg.audibleFeedback) {
        context.commit('setFeedbackValue', msg.audibleFeedback);
        context.commit('setFeedbackType', 'audibleFeedback')
      }
      if (msg.visibleFeedback) {
        context.commit('setFeedbackValue', msg.visibleFeedback);
        context.commit('setFeedbackType', 'visibleFeedback')
      }

      console.log(context.state);
    }

  }
})
