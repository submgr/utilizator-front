<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/livecamera">
          <ion-icon :icon="scanOutline" />
          <ion-label>Анализатор</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/home">
          <ion-icon :icon="homeOutline" />
          <ion-label>Главная</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/recyclepoints">
          <ion-icon :icon="mapOutline" />
          <ion-label>Точки</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, mapOutline, homeOutline, scanOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
      mapOutline,
      homeOutline,
      scanOutline
    }
  }
});
</script>
