

<template>
    <div class="grid grid-cols-2 gap-x-10 text-center p-4 mb-4 justify-between place-content-between  w-11/12  m-auto
     border-2 border-Neutral-HeaderOutline rounded-md" >
     <div class="h-28">
        <img src="../assets/images/logo.svg" alt="" class=" h-24   ">

     </div>
        <div class="bg-white font-barlow  w-24 py-1  rounded-md col-start-3  ">
            <p class="text-Neutral-ScoreText font-bold ">SCORE</p>
            <p class="text-Neutral-DarkText font-semibold text-6xl">{{score}}</p>
        </div>

    </div>
</template>
<script >
export default {
    data() {
        return {
        }
    },
    props:{
        score: {
            type: Number,
            required: true
        }

    }

}

</script>

