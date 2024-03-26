<template>

    <!-- <div @click="moveImage($event.target)" name="scissors" -->
        <div id="scissorsComponent"
        class="scissors relative hover:scale-125 hover:ease-in-out hover:transition-all hover:duration-300 cursor-pointer before:m-auto after:m-auto 
            before:bg-white  before:absolute before:w-24 before:h-24 md:before:w-32 md:before:h-32 before:z-10  before:-left-6 
            before:right-2 before:inset-y-0 before:rounded-full 
                after:absolute after:bg-Primary-ScissorsGradient2 after:h-36 after:w-36 md:after:h-44 md:after:w-44 
                after:rounded-full after:-left-12 after:inset-y-0">

        <img src="../assets/images/icon-scissors.svg" alt=""
            class="relative z-30 scale-95 md:scale-110 " key="scissors">
    </div>
</template>
<style>
    .scissors::after {
    box-shadow: 2px 12px hsl(39, 89%, 49%);

}
.scissors::before {
    box-shadow: inset 0 0.5rem hsl(210, 6%, 93%);
}
</style>
