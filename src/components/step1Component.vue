<template>

    <div class="images p-auto relative w-24 h-80 m-auto md:h-24  md:ml-auto 
        before:absolute before:w-64 md:before:w-full before:h-72 before:m-auto before:right-18 before:top-28
         md:before:-right-36 md:before:top-24  before:bg-[url('../assets/images/bg-triangle.svg')] 
        before:bg-no-repeat before:bg-contain ">
        <paperComponent @click="moveImage($event.target) " />
        <scissorsComponent @click="moveImage($event.target)" />
        <rockComponent @click="moveImage($event.target)" />

    </div>

</template>
<script>
import rockComponent from './rockComponent.vue';
import scissorsComponent from './scissorsComponent.vue';
import paperComponent from './paperComponent.vue';
export default {
    components: {
        rockComponent,
        scissorsComponent,
        paperComponent
    },
   methods: {
        moveImage(target) {
            this.$emit('image-clicked', {
                imageSrc: target.querySelector('img').src,
                containerClass: target.className,
                imageName: target.id
            })

        } 
    }




}

</script>

<style scoped>
.images {
    position: relative;
    display: grid;
    /* grid-template-columns: (repeat(2, 1fr)); */
    grid-template-areas:
        "paper scissors"
        "rock rock";
    place-items: center;
    height: 24rem;
    width: 38rem;

}
@media screen and (max-width: 768px) {
    .images {
        width: 23rem;
        height: 26rem;
    }
}

.paper {
    grid-area: paper;

}
.scissors {
    grid-area: scissors;
}


.rock {
    grid-area: rock;
}


</style>
