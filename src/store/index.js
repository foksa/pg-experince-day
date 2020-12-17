import Vue from 'vue'
import Vuex from 'vuex'

import {Configuration} from "@/generated/configuration";
import {saveAs} from 'file-saver';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timeout:0,
    deviceName:'',
  },
  getters: {
  },
  mutations: {
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
    }

  }
})
