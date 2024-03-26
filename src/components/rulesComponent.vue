<template>
    <div class="bg-white max-w-screen-sm h-full absolute z-40 inset-x-0 inset-y-28 md:w-96 md:h-auto md:rounded-md m-auto" >
    <main  class="grid  grid-cols-3 place-items-center max-h-screen	 justify-center items-center pt-4 gap-y-14 md:gap-y-5 ">
        <div class="col-span-full	 md:col-span-2  text-Neutral-DarkText ">
            <h2 class="font-barlow text-2xl  md:pr-20 font-bold">RULES</h2>
            
        </div>
        <div class=" col-span-1 row-start-3 col-start-2  md:row-start-1 md:col-start-3">
                <img @click="cancelRules" src="../assets/images/icon-close.svg" alt="" class="cursor-pointer"	>
            </div>
    <div class=" col-span-3 row-start-2	">
        <img src="../assets/images/image-rules.svg" alt="">
    </div>

    </main>

    </div>
</template>
<script>
export default {
    name:'rulesComponent',
      
    methods: {
        cancelRules() {
            this.$emit('cancelRules');
        },
    }
}

</script>

