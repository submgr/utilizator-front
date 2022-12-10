<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Идеи</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Идеи</ion-title>
          </ion-toolbar>
        </ion-header>
        
        <div style="margin-left: 4%; padding-top: 6%; overflow:scroll; white-space: nowrap;">
            <div v-for="item in ideas" :key="item.id" class="card-alfa custom-swiper suggestion-block bg1" :class="item.img"  style="margin-left: 0% !important;">
                <div>
                    <div class="text-a1 suggestion-text">{{item.text}}</div>
                </div>
            </div>
        </div>
      </ion-content>
    </ion-page>
  </template>

  <style scoped>
    .suggestion-block{
        margin-top: 0 !important;
        margin-bottom: 5%;
        height: 48vh !important;
        background-color: rgba(255, 255, 255, 0.104) !important;
    }
    .bg-1{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/9/11/asset/buzzfeed-prod-web-03/sub-buzz-7465-1547050059-1.jpg?crop=900%3A1350%3B0%2C0&downsize=300:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-2{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/9/11/asset/buzzfeed-prod-web-04/sub-buzz-8928-1547052042-1.jpg?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-3{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/9/11/asset/buzzfeed-prod-web-06/sub-buzz-27390-1547052161-5.jpg?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-4{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/9/12/asset/buzzfeed-prod-web-01/sub-buzz-23270-1547055382-1.jpg?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-5{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/9/12/asset/buzzfeed-prod-web-06/sub-buzz-31292-1547055129-1.jpg?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-6{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/11/12/asset/buzzfeed-prod-web-02/sub-buzz-15728-1547227736-1.jpg?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-7{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/9/15/asset/buzzfeed-prod-web-01/sub-buzz-12268-1547067596-5.jpg?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-8{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/9/16/asset/buzzfeed-prod-web-01/sub-buzz-14688-1547069496-1.jpg?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-9{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/9/14/asset/buzzfeed-prod-web-01/sub-buzz-31119-1547061407-1.jpg?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-10{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/9/17/asset/buzzfeed-prod-web-01/sub-buzz-18019-1547071990-2.jpg?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-11{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/9/12/asset/buzzfeed-prod-web-01/sub-buzz-20734-1547053513-1.jpg?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-12{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/10/11/asset/buzzfeed-prod-web-02/sub-buzz-29593-1547139076-7.jpg?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-13{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/10/12/asset/buzzfeed-prod-web-03/sub-buzz-2228-1547139725-2.jpg?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-14{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/10/11/asset/buzzfeed-prod-web-06/sub-buzz-16473-1547137816-1.jpg?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-15{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/10/16/asset/buzzfeed-prod-web-01/sub-buzz-5944-1547156610-1.png?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }
    .bg-16{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://img.buzzfeed.com/buzzfeed-static/static/2019-01/10/14/asset/buzzfeed-prod-web-05/sub-buzz-2617-1547148237-1.jpg?downsize=600:*&output-format=auto&output-quality=auto') !important;
    }

    .suggestion-block .text-a1{
        margin-left: 4%;
        margin-right: 4%;
        text-align: left;
        position: absolute;
        white-space: normal; 
        word-wrap: break-word !important;
        background-image: linear-gradient(45deg, #797973 0%, #ffffff 50%, #fbfcdb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        bottom: 9%;
        left: 0% !important;
        font-size: 29px;
        font-weight: 500;
    }
    
    ion-page {
        --background: #111111;
    }
    .card-alfa {
        position: relative;
        border-radius: 25px;
        height: 18vh;
        width: auto;
        background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
        margin-top: 7%;
        margin-left: 4%;
        margin-right: 4%;
    }
    .small-card{
        height: 12vh;
    }
    .small-card-left{
        margin-right: 1%;
        background-color: rgba(255, 255, 255, 0.104) !important;
        background-image: none;
    }
    .small-card-right{
        background-color: rgba(255, 255, 255, 0.104) !important;
        background-image: none;
    }
    .text-a1{
        text-align: left;
        position: absolute;
        white-space: normal; 
        word-wrap: break-word !important;
        background-image: linear-gradient(45deg, #797973 0%, #020202 50%, #fbfcdb 100%);
        background-repeat:no-repeat !important;
        background-size: cover !important; 
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        bottom: 10%;
        
        right: 5%;
        font-size: 35px;
        font-weight: 500;
    }
    .small-card .text-a1{
        left: 11% !important;
        font-size: 25px;
    }
    .small-card-right .text-a1{
        font-size: 25px;
        bottom: 14%;
        background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
    }
    .small-card-left .text-a1{
        text-align: left !important;
        font-size: 25px;
        bottom: 14%;
        background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    }
</style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  
  export default defineComponent({
    name: 'Tab2Page',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    data(){
        return{
            ideas: [
                {id: 4, img: "bg-4", text: "Или сделайте подставку для зарядки, чтобы аккуратно хранить телефон и шнур."},
                
                
                {id: 16, img: "bg-16", text: "Храните косметику и косметические средства в банках со свечами."},
                {id: 15, img: "bg-15", text: "Или сделайте зарядную станцию из обувной коробки, чтобы вместить все эти беспорядочные шнуры."},

                {id: 14, img: "bg-14", text: "Пропустите шнуры через рулоны туалетной бумаги, чтобы не пришлось разбираться в запутанном беспорядке, чтобы найти нужный."},
                
                {id: 7, img: "bg-7", text: "Разрежьте коробки из-под хлопьев, чтобы организовать ящик для мусора."},
                {id: 12, img: "bg-12", text: "Превратите пустые банки из-под мяты в полезные дорожные наборы."},
                {id: 13, img: "bg-13", text: "Придерживайте конец рулона ленты хлебной биркой, чтобы не ковыряться в нем каждый раз, когда вам нужен новый кусок."},


                {id: 1, img: "bg-1", text: "Покрасьте пустые пластиковые контейнеры, чтобы сделать из них новые причудливые саженцы."},
                {id: 2, img: "bg-2", text: "Превратите пустые банки из-под орехов в привлекательное хранилище для ванной комнаты."},
                {id: 3, img: "bg-3", text: 'Разрежьте пустые бутылки из-под лосьона на настенные карманные органайзеры.'},
                
                {id: 5, img: "bg-5", text: "В следующий раз, когда вы будете путешествовать, используйте листовую упаковку в качестве упаковочных кубиков."},
                {id: 6, img: "bg-6", text: "Разлейте масла и уксусы в пустые винные бутылки и напишите их названия на боках, чтобы все ваши дозаторы совпадали."},
                
                {id: 8, img: "bg-8", text: "Храните пластиковые пакеты в коробке из папиросной бумаги, чтобы ваша коллекция не занимала целый ящик."},
                {id: 9, img: "bg-9", text: "Наполните баночки из-под детского питания специями и наклейте на крышки магниты, чтобы держать их на холодильнике."},
                {id: 10, img: "bg-10", text: "Соедините пластиковые пакеты для продуктов вместе, чтобы создать многоразовый тотализатор."},
                {id: 11, img: "bg-11", text: "Прибейте пустые банки к забору, чтобы ваши растения имели доступ к большему количеству солнечного света."},
                
                
            ]
        }
    }
  });
  </script>
  