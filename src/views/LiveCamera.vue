<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Анализатор</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large" @click="snapshot">Анализатор</ion-title>
          </ion-toolbar>
        </ion-header>
        
        
        <div style="text-align: center; margin-top: 20vh; margin-left: 5vw; margin-right: 5vw;">
          <ion-label style="font-size: 20px;"><b>Определите тип сырья</b></ion-label><br/>
          <ion-label style="font-size: 20px;">с помощью искусственного интеллекта</ion-label>

          <br/><br/>
          <ion-label>Загрузите фотографию или сделайте новую сейчас, чтобы получить результаты.</ion-label>
        </div>
        <file-pond
            name="test"
            ref="pond"
            label-idle="Drop files here..."
            v-bind:allow-multiple="true"
            accepted-file-types="image/jpeg, image/png"
            server="/api"
            v-bind:files="myFiles"
            v-on:init="handleFilePondInit"
          />
      </ion-content>
      <ion-modal @willDismiss="Modal_onWillDismiss" trigger="open-modal" :is-open="message_modal_isOpen == 'showClassificationDetails'" :initial-breakpoint="0.45" :breakpoints="[0, 0.45]" handle-behavior="cycle">
        <ion-content class="ion-padding">
            <div class="ion-margin-top">
                <ion-row>
                    <ion-col size="8"><br />
                        <ion-label style="margin-left: 1vw; white-space: pre-wrap; font-size: 20px;"><b>{flaggedTemp_CurrentPointOnView.organization}</b><br />
                        </ion-label>
                        <ion-label style="margin-left: 1vw; white-space: pre-wrap; font-size: 20px;">город {flaggedTemp_CurrentPointOnView.city}<br /><br />
                        </ion-label>
                        <ion-label style="margin-left: 1vw; white-space: pre-wrap; font-size: 17px;">
                            <ion-icon :icon="callOutline" style="font-size: 14px;" /> {flaggedTemp_CurrentPointOnView.phone}
                        </ion-label><br />
                        <ion-label style="margin-left: 1vw; white-space: pre-wrap; font-size: 17px;">
                            <ion-icon :icon="calendarOutline" style="font-size: 14px;" /> {flaggedTemp_CurrentPointOnView.receptionDays}
                        </ion-label>
                        <ion-label style="margin-left: 1vw; white-space: pre-wrap; font-size: 17px;"><br /><br />
                            <ion-icon :icon="cubeOutline" style="font-size: 14px;" /> Принимается сырье:<br /><i>{flaggedTemp_CurrentPointOnView.specialization}</i>
                        </ion-label>
                    </ion-col>
                    <ion-col size="4">
                        <img src="../assets/graphics/bouncy-artificial-intelligence.png" />
                    </ion-col>
                </ion-row>

                <br />
                <ion-button color="dark" @click="Modal_onWillDismiss" expand="block">Хорошо</ion-button>
            </div>

        </ion-content>
    </ion-modal>
    </ion-page>
  </template>

  <style scoped>
.uploadcare--widget__button.uploadcare--widget__button_type_open {
background-color: #29c12b;

}
</style>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonModal } from '@ionic/vue';
  

  //import Camera from "simple-vue-camera";

  import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles

// Create component
const FilePond = vueFilePond(
);

  import axios from 'axios'
  import VueAxios from 'vue-axios'
  
  export default defineComponent({
    name: 'Tab2Page',
    components: { 
        IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonModal, FilePond
      },
    data(){
      return{
        myFiles: ["cat.jpeg"],
        message_modal_isOpen: "none",
        options: {
          quality: 100
        }
      }
    },
    mounted(){
      //

      
    },
    setup() {
      //
    },
    methods: {
      handleFilePondInit: function () {
      console.log("FilePond has initialized");

      // FilePond instance methods are available on `this.$refs.pond`
    },
      processImageWithClassification(){
        var url = "https://taskillsai.cognitiveservices.azure.com/customvision/v3.0/Prediction/02117fba-3582-4f98-b166-6c0be7002079/classify/iterations/Iteration1/url";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Prediction-key", "5e6cde9909f444aea91a2ee2c48b2677");
        xhr.setRequestHeader("Content-Type", "application/json");

        // eslint-disable-next-line
        var parent_this = this

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
              console.log(xhr.status);
              var req_data = JSON.parse(xhr.responseText)
              console.log(req_data);
              var probs = []
              probs["carton"] = req_data.predictions.find(o => o.tagName === 'carton').probability;
              probs["paper"] = req_data.predictions.find(o => o.tagName === 'paper').probability;
              probs["glass"] = req_data.predictions.find(o => o.tagName === 'glass').probability;
              probs["metal"] = req_data.predictions.find(o => o.tagName === 'metal').probability;
              console.log("carton", probs)

              parent_this.message_modal_isOpen = "showClassificationDetails"
              
          }};

        xhr.send(this.snapshot);

      }
    }
  });
  </script>
  