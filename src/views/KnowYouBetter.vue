<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <flow-form
          ref="flowform"
          v-on:complete="onComplete"
          v-bind:language="language"
          v-bind:progressbar="false"
          v-bind:standalone="true"
        >
          <question 
            v-for="(question, index) in questions" 
            v-bind="question" 
            v-bind:key="'m' + index" 
            v-model="question.model"
          >
          </question>
          
          <!-- Custom content for the Complete/Submit screen slots in the FlowForm component -->
          <template v-slot:complete>
            <div class="f-section-wrap">
              <div v-if="1<2">
                <div v-if="loading">
                  <span class="fh2">Пожалуйста, подождите: сервер анализирует ваш ответ...</span>
                </div>
                <div v-else>
                  <div v-if="finalScore >= 15">
                    <span class="fh2">Отличная работа!</span>
                    <div style="border: 1px solid #ccc!important; border-radius: 10px; margin-right: 20%;">
                      <div style="background-color:green;height:24px;width:98%; border-radius: 10px;"></div>
                    </div>
                    <p class="f-description" style="margin-top: 15px;"><span>
                      Вы вносите огромный вклад в будущее нашей планеты, заботясь об окружающей среде. Продолжайте и дальше утилизировать мусор раздельно, а наше приложение будет вашим верным помощником.
                    </span></p>
                  </div>
                  <div v-else-if="finalScore >= 0">
                    <span class="fh2">Вы на верном пути!</span>
                    <div style="border: 1px solid #ccc!important; border-radius: 10px; margin-right: 20%;">
                      <div style="background-color:orange;height:24px;width:68%; border-radius: 10px;"></div>
                    </div>
                    <p class="f-description" style="margin-top: 15px;"><span>Проблема правильной утилизации мусора стоит как никогда остро. Мы все больше ощущаем пагубные последствия наших ежедневных ошибок в подходе к сортировке мусора. Это приложение поможет вам сделать важные шаги в собственном развитии, которые помогут вам изменить свой экологический след к лучшему.</span></p>
                  </div>
                  <div style="border: 1px solid #ccc!important; border-radius: 15px; background-color: var(--vff-button-color); margin-right: 30%; margin-top: 5vh;" @click="goNext">
                    <span style="font-size: 18px; display: block; font-weight: 500; color: var(--vff-button-text-color); padding: .6em 1.4em;">Продолжить</span>
                  </div>
                </div>
              </div>
            </div>  
          </template>
          <!-- We've overriden the default "complete" slot content -->
          <template v-slot:completeButton>
            <div class="f-submit">
              <!-- Leave empty to hide default submit button -->
            </div>
          </template>
        </flow-form>
      </ion-content>
    </ion-page>
  </template>

<style scoped>
  rion-content{
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.121) 10%, rgba(2, 156, 12, 0.714)), url('https://images.unsplash.com/photo-1586078074298-05dca4848695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80') !important;
    background-position: 100%;
    background-size: cover !important;
  }
  .vff ul.f-radios li {
    border-radius: 20px !important;
  }
</style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonPage, IonContent } from '@ionic/vue';
  import { FlowForm, Question, QuestionModel, QuestionType, ChoiceOption, LanguageModel } from '@ditdot-dev/vue-flow-form'
  
  export default  defineComponent({
    name: 'Tab1Page',
    components: { IonContent, IonPage, FlowForm, Question },
    data() {
      return {
        finalScore: 0,
        loading: false,
        completed: false,
        language: new LanguageModel(),
        questions: [
          {
            type: 'multiplechoice',
            id: 'any_meditations_experience',
            tagline: "Давайте познакомимся с вами поближе!",
            title: '👋, пробовали ли вы сортировать мусор раздельно?',
            multiple: false,
            required: true,
            helpTextShow: false,
            options: [
              {
                label: 'Да, и занимаюсь этим до сих пор!',
                value: 'yesandstill'
              },
              {
                label: "Пробовал, но у меня не особол получилось",
                value: 'tried'
              },
              {
                label: 'Нет, еще не пробовал',
                value: 'nope'
              }
            ],
            model: '',
          },
          {
            type: 'multiplechoice',
            id: 'psycho_emotional_canworkwithcloserelations',
            tagline: 'Оцените, насколько это высказывание подходит вам.',
            title: 'Я считаю, что в нашем городе сложно сдать что-то на переработку...',
            multiple: false,
            required: true,
            helpTextShow: false,
            options: [
              {
                label: 'Я считаю именно так',
                value: 'agree'
              },
              {
                label: 'Я не согласен с этим',
                value: 'disagree'
              }
            ],
            model: '',
          },
          {
            type: 'multiplechoice',
            id: 'psycho_emotional_cantakeresponsibility',
            tagline: 'Оцените, насколько это высказывание подходит вам.',
            title: 'Если есть такая возможность, я даю вторую жизнь использованному сырью. То есть, использую его в благих/креативных целях, например: "кормушка для птиц из использованного картона" ',
            multiple: false,
            required: true,
            helpTextShow: false,
            options: [
              {
                label: 'Это про меня',
                value: 'agree'
              },
              {
                label: 'Это не про меня',
                value: 'disagree'
              }
            ],
            model: '',
          },
          {
            type: 'sectionbreak',
            id: 'review',
            tagline: 'Вы все еще можете изменить ответы на предыдущие вопросы. Если вы закончили, продолжайте.',
            title: 'Спасибо',
            multiple: false,
            required: true,
            helpTextShow: false,
            model: '',
          },
        ]
      }
    },
    methods: {
      /* eslint-disable-next-line no-unused-vars */
      onComplete(completed, questionList) {
        // This method is called whenever the "completed" status is changed.
        this.completed = completed
        // Set `submitted` to true so the form knows not to allow back/forward
        // navigation anymore.
        //!!! this.$refs.flowform.submitted = true
        this.onSendData()
      },
      
      onSendData() {
        // eslint-disable-next-line
        const self = this
        const data = this.getData()
        this.loading = true
        
        /*
          You can use Fetch API to send the data to your server, eg.:
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
        */
        setTimeout(() => {
          self.loading = false
        }, 1500)
      },
      getData() {
        var data = {
          questions: [],
          answers: []
        }
    
        this.questions.forEach(question => {
          switch (question.model) {
            case "almost_always":
              this.finalScore += 2;
              break;
            case "sometimes":
              this.finalScore += 1;
              break;
            case "very_seldom":
              this.finalScore += 0;
              break;
            default:
              //nothing!
              break;
          }
          if (question.title) {
            let answer = question.model
            if (Array.isArray(answer)) {
              answer = answer.join(', ')
            }
            // eslint-disable-next-line
            data.questions.push(question.title)
            // eslint-disable-next-line
            data.answers.push(answer)
          }
        })
        localStorage.setItem("stats_emotionalstate_atleast_once", "true")
    
        return data
      },
      goNext(event) {
        console.log("Going home!", event)
        this.$router.push({path:'/tabs/home', replace: true});
      }
    }
  });
  </script>

<style>
/* Import Vue Flow Form base CSS */
@import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
/* Import one of the Vue Flow Form CSS themes (optional) */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css'; */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
@import '../assets/css/quiz-flow.css';
</style>