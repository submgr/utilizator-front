<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>Как сортировать</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <ion-header collapse="condense">
            <ion-toolbar>
                <ion-title size="large">Как сортировать</ion-title>
            </ion-toolbar>
        </ion-header>

        <img style="margin-top: 5vh; margin-left: 1.5vw;" src="../assets/graphics/howtosort_info.png" />

        <ion-grid style="margin-top: 4vh;">
            <ion-row>
                <ion-col @click="showInstructions('paper')"><img src="../assets/graphics/howtosort_paper.png" style="border-radius: 15px;" /></ion-col>
                <ion-col @click="showInstructions('glass')"><img src="../assets/graphics/howtosort_glass.png" style="border-radius: 15px;" /></ion-col>
            </ion-row>
            <ion-row>
                <ion-col @click="showInstructions('metal')"><img src="../assets/graphics/howtosort_metal.png" style="border-radius: 15px;" /></ion-col>
                <ion-col @click="showInstructions('plastic')"><img src="../assets/graphics/howtosort_plastic.png" style="border-radius: 15px;" /></ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>

    <ion-modal @willDismiss="Modal_onWillDismiss" trigger="open-modal" :is-open="message_modal_isOpen == 'showSortingInstructions'" :initial-breakpoint="0.95" :breakpoints="[0, 0.95]" handle-behavior="cycle">
        <ion-content class="ion-padding">
            <div class="ion-margin-top">
                <!---<img src="../assets/graphics/wide_banner_forest.png" v-if="currentCrudeForModal == 'paper'" style="margin-left: 1.5vw; margin-top: 3vh; border-radius: 30px; width: 50vw; height: 7vh;"/>
                <img src="../assets/graphics/wide_banner_glass.png" v-if="currentCrudeForModal == 'glass'" style="margin-left: 1.5vw; margin-top: 3vh; border-radius: 30px; width: 50vw; height: 7vh;"/>
                <img src="../assets/graphics/wide_banner_metal.png" v-if="currentCrudeForModal == 'metal'" style="margin-left: 1.5vw; margin-top: 3vh; border-radius: 30px; width: 50vw; height: 7vh;"/>
                <img src="../assets/graphics/wide_banner_forest.png" v-if="currentCrudeForModal == 'plastic'" style="margin-left: 1.5vw; margin-top: 3vh; border-radius: 30px; width: 50vw; height: 7vh;"/>--->
                <ion-grid style="margin-top: 1vh;">
                    <ion-row>
                        <ion-col size="12">
                            <ion-label style="white-space: pre-wrap;"><b>Утилизация
                                    <span v-if="currentCrudeForModal == 'paper'">макулатуры</span>
                                    <span v-if="currentCrudeForModal == 'glass'">стекла</span>
                                    <span v-if="currentCrudeForModal == 'metal'">металла</span>
                                    <span v-if="currentCrudeForModal == 'plastic'">пластика</span>
                                </b></ion-label><br /><br />
                                
                            <ion-label style="white-space: pre-wrap; margin-top:">
                                <span v-if="currentCrudeForModal == 'paper'">Переработка бумаги, картона и другой макулаторы очень положительно влияет на зеленый мир вокруг, поскольку для производства такого типа сырья требовалась бы вырубка большого количества леса.<br/><br/>Бумага не требует особой подготовки перед сдачей, но убедитесь, что на ней нет скрепок и других небумажных элементов.</span>
                                <span v-if="currentCrudeForModal == 'glass'"></span>
                                <span v-if="currentCrudeForModal == 'metal'">Выброшенный вместо переработки металл имеет негативное влияние на окрудающую среду, например, отравляет грунтовые (подземные) воды и даже загрязняет атмосферу из-за постепенного окисления.<br/><br/>Перед сортировкой металла убедитесь, что он чистый, если возможно, его можно очистить.</span>
                                <span v-if="currentCrudeForModal == 'plastic'">Переработка пластика очень важна и требует серьезного подхода. Пластмассы составляют огромное количество твердых отходов и требуют столетий, чтобы разложиться на свалке или в океане. Поэтому все пригодные для переработки пластмассы должны быть переработаны, чтобы уменьшить количество отходов на свалках, сберечь энергию и сохранить окружающую среду.<br/><br/>Вы должны снять крышки, крышки, насосы дозаторов и подобные незакрепленные части (например, пленки на упаковке сыра) и поместить их в контейнер для сбора отдельно.</span>
                            </ion-label>

                        </ion-col>
                    </ion-row>
                </ion-grid>
                <iframe v-if="currentCrudeForModal == 'paper'" style="width: 100%; border-radius: 20px; margin-top: 4vh;" src="https://www.youtube.com/embed/_ZwMne7evis" title="Что делать с использованной бумагой? Как сдать макулатуру?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe v-if="currentCrudeForModal == 'glass'" style="width: 100%; border-radius: 20px; margin-top: 4vh;" src="https://www.youtube.com/embed/zGNPgZLl1ms" title="Что делать с использованной бумагой? Как сдать макулатуру?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe v-if="currentCrudeForModal == 'metal'" style="width: 100%; border-radius: 20px; margin-top: 4vh;" src="https://www.youtube.com/embed/2YyS6K67mdw" title="Что делать с использованной бумагой? Как сдать макулатуру?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe v-if="currentCrudeForModal == 'plastic'" style="width: 100%; border-radius: 20px; margin-top: 4vh;" src="https://www.youtube.com/embed/GV-6juQVQ2o" title="Что делать с использованной бумагой? Как сдать макулатуру?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <br /><br />
                <div style="display: grid; place-items: center;">
                    <!---<img style="height: 20vh;" src="../assets/graphics/app-download-qrcode.svg"/>--->
                </div>

                <br />
                <ion-button color="dark" @click="Modal_onWillDismiss" expand="block">Хорошо</ion-button>
            </div>
        </ion-content>
    </ion-modal>
</ion-page>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonModal
} from '@ionic/vue';

export default defineComponent({
    name: 'Tab1Page',
    data() {
        return {
            message_modal_isOpen: "none",
            currentCrudeForModal: "none"
        }
    },
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        IonModal
    },
    methods: {
        Modal_onWillDismiss() {
            this.message_modal_isOpen = "nope"
        },
        showInstructions(cat) {
            console.log(cat)
            this.message_modal_isOpen = "showSortingInstructions"
            this.currentCrudeForModal = cat
        }
    }
});
</script>
