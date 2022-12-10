<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
            </ion-toolbar>
          </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
            <ion-toolbar>
              <ion-title size="large">Чат</ion-title>
            </ion-toolbar>
          </ion-header>
      
        <iframe frameBorder="0" src="https://tawk.to/chat/5a50c279d7591465c70685d5/default"
            style="margin-top: -74%; width: 100%; height: 134%;"
        >
            Sorry, now this service isn't available.
        </iframe>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/vue';
  
  export default  defineComponent({
    name: 'Tab1Page',
    components: { IonHeader, IonContent, IonPage, IonToolbar, IonTitle }
  });
  </script>
  