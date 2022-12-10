<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>Анализатор</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" v-if="state == 'main'">
        <ion-header collapse="condense">
            <ion-toolbar>
                <ion-title size="large" @click="datashow">Анализатор</ion-title>
            </ion-toolbar>
        </ion-header>

        <div style="text-align: center; margin-top: 20vh; margin-left: 5vw; margin-right: 5vw;">
            <ion-label style="font-size: 20px;"><b>Определите тип сырья</b></ion-label><br />
            <ion-label style="font-size: 20px;">с помощью искусственного интеллекта</ion-label>

            <br /><br />
            <ion-label>Загрузите фотографию или сделайте новую сейчас, чтобы получить результаты.</ion-label>
        </div>
        <div style="display: block;
        margin-right: auto;
        margin-left: auto;
        margin-top: 5vh;
        margin-left: 7vw;
        ">
        <input ref="file" style="display: block; margin:auto;" v-on:change="handleFileUpload($event)"  type="file">
      
      </div>
       

    </ion-content>
    <ion-content :fullscreen="true" v-if="state == 'processing'">
        
      <p style="padding: 0px 18px 0px; margin-top: 14rem; margin-bottom: 1rem;">
          <Vue3Lottie :animationData="require('../assets/lottie/preloader.json')" :height="200" :width="200" /></p>
      <p class="linear-wipe" style="text-align: center; margin: 0; transform-origin: left center; align-items: flex-end; min-width: 100%; font-size: 24px; font-weight: 700;">Почти готово</p>
  </ion-content>
    <ion-modal @willDismiss="Modal_onWillDismiss" trigger="open-modal" :is-open="message_modal_isOpen == 'showClassificationDetails'" :initial-breakpoint="0.63" :breakpoints="[0, 0.63]" handle-behavior="cycle">
        <ion-content class="ion-padding">
            <div class="ion-margin-top">
                <ion-row>
                    <ion-col size="8"><br />
                        <ion-label style="white-space: pre-wrap; font-size: 24px;"><b>Это {{temp_probfor}}</b><br /><br />
                        </ion-label>
                        <ion-label style="font-size: 19px;">Искусственный интеллект считает, что на фотографии был следующий вид сырья: {{temp_probfor}}. Утилизируйте его правильно, для этого воспользуйтесь нашим помощником по утилизации.<br/><br/>
                        </ion-label>
                    </ion-col>
                    <ion-col size="4">
                        <img src="../assets/graphics/bouncy-artificial-intelligence.png" />
                    </ion-col>
                </ion-row>

                <br />
                  <ion-button color="success" @click="gohelp" style="text-decoration: none;" expand="block">Перейти к помощнику</ion-button>
                
                <ion-button color="dark" @click="Modal_onWillDismiss" expand="block">Скрыть</ion-button>
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
import {
    defineComponent,
    ref
} from 'vue';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonModal
} from '@ionic/vue';

import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

//import Camera from "simple-vue-camera";

import VueUploadComponent from 'vue-upload-component'

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles

// Create component

import axios from 'axios'
import VueAxios from 'vue-axios'

export default defineComponent({
    name: 'Tab2Page',
    components: {
        // eslint-disable-next-line
        FileUpload: VueUploadComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        IonModal,
        Vue3Lottie
    },
    data() {
        return {
            state: "main",
            files: [],
            myFiles: ["cat.jpeg"],
            message_modal_isOpen: "none",
            options: {
                quality: 100
            },
            temp_probfor: "probs"
        }
    },
    mounted() {
        //

    },
    setup() {
        //
        const file = ref(null)


        return {
          file
       }
    },
    methods: {
      datashow(){
        console.log(this.files)
      },
      Modal_onWillDismiss() {
            this.message_modal_isOpen = "none"
        },
        handleFileUpload(event){
          this.state = "processing"
           // debugger;
            console.log("selected file", event.target.files[0])
            //Upload to server
            this.processImageWithClassification()
        },
        /**
         * Pretreatment
         * @param  Object|undefined   newFile   Read and write
         * @param  Object|undefined   oldFile   Read only
         * @param  Function           prevent   Prevent changing
         * @return undefined
         */
        inputFilter: function (newFile, oldFile, prevent) {
            if (newFile && !oldFile) {
                // Filter non-image file
                if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
                    return prevent()
                }
            }

            // Create a blob field
            newFile.blob = ''
            let URL = window.URL || window.webkitURL
            if (URL && URL.createObjectURL) {
                newFile.blob = URL.createObjectURL(newFile.file)
            }
        },
        processImageWithClassification() {
            var url = "https://taskillsai.cognitiveservices.azure.com/customvision/v3.0/Prediction/02117fba-3582-4f98-b166-6c0be7002079/classify/iterations/Iteration1/image";

            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);

            xhr.setRequestHeader("Prediction-key", "5e6cde9909f444aea91a2ee2c48b2677");
            xhr.setRequestHeader("Content-Type", "application/octet-stream");

            //var formdata = new FormData();

            //formdata.append('file', this.file.files[0]);


            // eslint-disable-next-line
            var parent_this = this

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    var req_data = JSON.parse(xhr.responseText)
                    console.log(req_data);
                    var probs = [
                      {
                        "type": "carton",
                        "score":  req_data.predictions.find(o => o.tagName === 'carton').probability
                      },
                      {
                        "type": "paper",
                        "score":  req_data.predictions.find(o => o.tagName === 'paper').probability
                      },
                      {
                        "type": "glass",
                        "score":  req_data.predictions.find(o => o.tagName === 'glass').probability
                      },
                      {
                        "type": "metal",
                        "score":  req_data.predictions.find(o => o.tagName === 'metal').probability
                      }
                    ]
                    console.log("carton", probs)

                    probs = probs.sort(function(a, b) {
                      return parseFloat(a.score) - parseFloat(b.score);
                  });

                  console.log("carton", probs)

                    switch (probs[probs.length - 1].type) {
                      case "carton":
                        parent_this.temp_probfor = "макулатура"
                        break;
                      case "paper":
                        parent_this.temp_probfor = "макулатура"
                        break;
                      case "glass":
                        parent_this.temp_probfor = "стекло"
                        break;
                      case "metal":
                        parent_this.temp_probfor = "металл"
                        break;
                    
                      default:
                        break;
                    }

                    parent_this.message_modal_isOpen = "showClassificationDetails"
                    parent_this.state = "main"

                }
            };

            //xhr.send(this.snapshot);
            xhr.send( this.file.files[0])

        },
        gohelp(){
          this.$router.push({path:'/tabs/howtosort', replace: true});
          this.Modal_onWillDismiss
        }
    }
});
</script>
