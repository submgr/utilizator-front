<template>
    <ion-page :style="pageStyle">
    <ion-header>
      <ion-toolbar>
        
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          
        </ion-toolbar>
      </ion-header>

      <div class="floating_element" style="width:250%"><img src="../assets/graphics/shadow-multi.svg" ></div>
      
      <swiper :modules="modules" :effect="'coverflow'" :pagination="{ clickable: true }">
          <swiper-slide style="display: block; padding-left: 14px; padding-right: 14px;">
            <div class="slide">
              <img src="../assets/graphics/florid-woman-in-overall-sitting-on-her-knees-and-holding-something.png" style="height: 30vh; margin-top: 2rem; margin-left: 7vw;" />
              <h2 style="font-weight: 800; font-size: 35px; color: white; margin-top: 8vh;">Добро пожаловать</h2>
              <p style="opacity: 0.6; font-size: 18px; font-weight: 500; color: #999999; line-height: 24px !important; letter-spacing: -0.8px;">
                Приветствуем вас в приложении "Утилизатор", которое поможет вам улучшить свой экологический вклад в сообщества вокруг.
              </p>
            </div>
          </swiper-slide>

          <swiper-slide style="display: block; padding-left: 10px; padding-right: 10px; padding-top: 0px;">
            <img src="../assets/graphics/bonbon-separate-waste-collection-of-paper-plastic-and-organic-waste-1.png" style="height: 38vh; padding-top: 0vh"/>
            <h2 style="font-weight: 800; font-size: 35px; color: white;">Это просто</h2>
            <p style="opacity: 0.6; font-size: 18px; font-weight: 500; color: #999999; line-height: 24px !important; letter-spacing: -0.8px;">
                Утилизировать мусор правильно вовсе не сложно, мы расскажем вам шаг за шагом, как это происходит. Таким образом, вы снизите уровень загрязнения окружающей среды в вашем районе и станете защитником окружающей среды.
            </p>
          </swiper-slide>

          <swiper-slide style="display: block; padding-left: 11px; padding-right: 11px;">
            <img src="../assets/graphics/3d-fluency-globe.png" style="height: 32vh; padding-top: 0vh"/>
            <h2 style="font-weight: 800; font-size: 35px; color: white;">Пора начинать</h2>
            <p style="opacity: 0.6; font-size: 18px; font-weight: 500; color: #999999; line-height: 24px !important; letter-spacing: -0.8px;">
                Мы расскажем вам больше о правильном разделении мусора и поможем начать, а так же покажем, как ваш личный вклад положительно влияет на мир вокруг.
            </p>
            <router-link to="/tabs/knowyoubetter" @click="save_state">
                <img style="height: 15vh;" src="../assets/graphics/icon-yellow-gonext.svg" class="startjourney_routerbtn">
            </router-link>
          </swiper-slide>
        </swiper>
      
    </ion-content>
  </ion-page>
</template>

<style scoped>
    *{
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Roboto, sans-serif;
    }
    @media (max-height:640px) { 
      .swiperimg_special1img{
        height: 18vh !important;
      }
    }
    @media (max-height:780px) { 
      .swiperimg_special1img{
        height: 23vh !important;
      }
      .startjourney_routerbtn{
        height: 11vh !important;
      }
    }
    .floating_element{
        display:block;
        position: fixed;
        z-index: -1;
        bottom: -100%;
        height: 160%;
        left: 30px;
    }
    .swiper-coverflow{
      height: 90%;
    }
    .swiper-pagination{
      bottom: 20px !important;
      position: relative; z-index: 4000;
    }
    .swiper-pagination-bullet {
      background: #d7fc70 !important;
    }
  </style>

<script lang="ts">
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { EffectCoverflow } from "swiper";
import { IonPage, IonHeader, IonToolbar,  IonContent } from '@ionic/vue';
import { arrowForward } from 'ionicons/icons';
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
import 'swiper/css';
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-coverflow";
export default defineComponent({
  name: 'Tab3Page',
  components: { IonHeader, IonToolbar, IonContent, IonPage, Swiper, SwiperSlide},
  props: [ 'someFunctionParent' ],
  updated () {
    const tabsEl = document.querySelector('ion-tab-bar');
    if (tabsEl) {
      tabsEl.hidden = true;
      tabsEl.style.height = "1";
    }
  },
  setup () {
    return {
      pageStyle: {
        "--ion-background-color": "#000000",
        "--ion-font-family": "Roboto"
      },
      modules: [Navigation, Pagination, Scrollbar, A11y, EffectCoverflow],
      arrowForward,
      footer: "hide"
    }
    //
  },
  methods: {
    save_state(){
      localStorage.setItem("already_used", "yes")
    }
  }
});
</script>