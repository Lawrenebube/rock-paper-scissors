<template>
  <main class=" pb-5">

    <div>
      <logoComponent :score="score" />

    </div>
    <div v-if="!showStep2">
      <step1Component @image-clicked="moveToStep2" />

    </div>
    <step2Component v-else :pickedImage="pickedImage" @update-score="handleScoreUpdate" @play-again="handlePlayAgain" />

    <button @click="getRules" class=" flex justify-center items-center md:absolute  w-28 m-auto   md:right-5 md:left-auto bottom-4 px-3 md:w-32 py-1 mt-5
    rounded-md text-lg tracking-widest text-white border-2 border-white font-barlow z-40 ">
      RULES
    </button>
    <div v-if="showOverlay" class="absolute inset-0 bg-black opacity-50 z-10"></div>

    <div v-if="showRules">
      <rulesComponent @cancelRules="cancelRules" />

    </div>
  </main>
</template>

<script>
import logoComponent from '@/components/logoComponent.vue';
import rulesComponent from '@/components/rulesComponent.vue';
import step1Component from '@/components/step1Component.vue';
import step2Component from '@/components/step2Component.vue'

export default {
  name: 'HomeView',
  components: {
    logoComponent,
    rulesComponent,
    step1Component,
    step2Component
  },
  data() {
    return {
      showRules: false,
      showOverlay: false,
      showStep2: false,
      pickedImage: {
        src: '',
        containerClass: '',
        id: '',
      },
      score: 0 

    }
  },
  methods: {
    handleScoreUpdate(scoreIncrement) {
      this.score += scoreIncrement;
    },

    getRules() {
      this.showRules = !this.showRules;
      this.showOverlay = !this.showOverlay;

    },
    cancelRules() {
      this.showRules = false;
      this.showOverlay = false;
    },
    moveToStep2(data) {
      this.showStep2 = true;
      this.pickedImage.src = data.imageSrc;
      this.pickedImage.containerClass = data.containerClass;
      this.pickedImage.id = data.imageName
    },
    handlePlayAgain() {
      this.showStep2 = false;
      this.pickedImage.src = '';
      this.pickedImage.containerClass = '';
      this.pickedImage.id = ''

    }
  }
}
</script>
