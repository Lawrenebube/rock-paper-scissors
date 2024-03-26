<template>

  <main class=" font-barlow text-white text-center grid grid-cols-6  
      place-content-center   pt-3 max-w-sm md:max-w-xl mt-12 md:mt-1  m-auto">
    <div class=" grid gap-24 grid-cols-1  col-start-2 md:col-start-1  relative">
      <div class=" relative md:order-2">
        <div v-if="playerWon" class=" duration-150 ease-in transition-all">
          <p class=" absolute h-44 w-44 top-7 -left-16 
            md:h-64 md:w-64 md:-top-16 md:-left-24 rounded-full bg-Neutral-DarkText opacity-25 z-10  "> </p>
          <p class=" absolute h-52 w-52 -left-20 top-2 
            md:h-80 md:w-80 md:-top-24 md:-left-32 rounded-full bg-Neutral-DarkText opacity-25 z-10 "> </p>
          <p class=" absolute h-64 w-64 -left-24 -top-4
            md:h-128 md:w-128  md:-top-36 md:-left-44 rounded-full bg-Neutral-DarkText opacity-25 z-10  "></p>
        </div>

        <div :class="pickedImage.containerClass" class="mt-16 md:mt-7	 z-20">
          <img :src="pickedImage.src" alt="" class="relative z-30 " :key="pickedImage.key">
        </div>
      </div>
      <p class="text-lg md:text-xl tracking-wider w-32 -ml-7 md:-ml-2 text-left justify-left grid z-20 md:order-1 ">YOU PICKED</p>

    </div>

    <div class=" grid gap-y-24 grid-cols-1 col-start-5 md:row-start-1 md:col-start-6  relative ">
      <div class="md:order-2">
        <div v-if="houseWon">
          <p class=" absolute h-44 w-44 top-2 -right-14 
          md:h-64 md:w-64 md:top-16 md:-right-16 rounded-full sm:bg-Neutral-DarkText opacity-25 z-10">
          </p>
          <p class=" absolute h-52 w-52 -right-20 -top-2
          md:h-80 md:w-80 md:top-8 md:-right-24 rounded-full bg-Neutral-DarkText opacity-25 z-10"> </p>
          <p class=" absolute h-64 w-64 -right-24 -top-8
          md:h-128 md:w-128 md:-top-4 md:-right-36 rounded-full bg-Neutral-DarkText opacity-25 z-10"> </p>
        </div>
        <div>
          <div v-if="showShadow"
            class="h-32 w-32 grid -ml-8 -mb-12 mt-10 md:m-auto rounded-full bg-Neutral-DarkText opacity-25 ">

          </div>
          <component :is="houseChoice" class="before:right-9 mt-16 md:mt-7 z-20"></component>


        </div>
      </div>
      <p class="text-lg md:text-xl tracking-wider  -ml-20 w-52 z-20 md:order-1">THE HOUSE PICKED</p>

    </div>
    <div v-if="picks"
      class="grid place-content-center row-start-2 col-start-2 md:col-start-2 col-span-4 md:row-start-1 gap-y-4 z-30 font-barlow mt-20">
      <p class="uppercase text-5xl tracking-wider">{{ result }}</p>
      <button @click="handlePlayAgain" :style="{ color: textColor }" class="uppercase font-barlow	text-Neutral-DarkText bg-white w-40 m-auto py-2 
        rounded-md text-lg border-2 border-white z-40 tracking-wildest mb-7 ">
        play again
      </button>
    </div>
  </main>
</template>

<script>
import paperComponent from './paperComponent.vue';
import scissorsComponent from './scissorsComponent.vue';
import rockComponent from './rockComponent.vue';
export default {
  data() {
    return {
      choices: ['paperComponent', 'scissorsComponent', 'rockComponent'],
      houseChoice: '',
      picks: false,
      resultBox: '36rem',
      showShadow: 'true',
      playerChoice: this.pickedImage.id,
      result: '',
      playerWon: false,
      houseWon: false,
      textColor: 'hsl(229 25% 31%)',
    };
  },
  components: {
    paperComponent,
    scissorsComponent,
    rockComponent
  },
  props: {
    pickedImage: {
      type: Object,
      default: () => ({
        src: '',
        containerClass: '',
        id: ''
      })
    },

  },
  created() {
    setTimeout(this.aiPick, 1000);

  },
  methods: {


    aiPick() {
      var chosenNumber = Math.floor(Math.random() * this.choices.length);
      this.houseChoice = this.choices[chosenNumber];
      this.showShadow = !this.showShadow;
      this.gameRule()
      this.resultBox = '48rem'
      this.picks = true

    },

    gameRule() {
      if (this.houseChoice === this.playerChoice) {
        this.result = 'its a tie'
        console.log('tie')
        this.playerWon = true
        this.houseWon = true
      }
      else if (this.playerChoice == 'rockComponent') {
        if (this.houseChoice == 'scissorsComponent') {
          this.result = 'you win',
            this.playerWon = true
          this.$emit('update-score', 1);


          console.log('rock beats scissors')
        }
        else {
          this.result = 'you lose',
            this.houseWon = true
          this.textColor = 'red'
          console.log('you lose')
        }
      }
      else if (this.playerChoice == 'paperComponent') {
        if (this.houseChoice == 'rockComponent') {
          this.result = 'you win',
            this.playerWon = true
          this.$emit('update-score', 1);

          console.log('paper covers rock')
        }
        else {
          this.result = 'you lose',
            this.houseWon = true,
            console.log('you lose paper')
          this.textColor = 'red'

        }
      }
      else if (this.playerChoice == 'scissorsComponent') {
        if (this.houseChoice == 'paperComponent') {
          this.result = 'you win',
            this.playerWon = true
          this.$emit('update-score', 1);

        }
        else {
          this.result = 'you lose',
            this.houseWon = true
          this.textColor = 'red'

        }
      }
    },
    handlePlayAgain() {
      this.$emit('play-again');
      this.playerWon = false
      this.houseWon = false

    }
  },

};
</script>
