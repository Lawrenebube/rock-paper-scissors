<template>
        
<!-- <div @click="moveImage($event.target)" name="paper" -->
    <div id="paperComponent"
            class="paper relative hover:scale-125 hover:duration-300 hover:ease-in-out hover:transition-all cursor-pointer before:m-auto after:m-auto 
            before:bg-white  before:absolute before:w-24 before:h-24 md:before:w-32 md:before:h-32 
            before:z-10 before:-left-6 before:right-1 before:inset-y-0 before:rounded-full 
            after:absolute after:bg-Primary-PaperGradient2 after:h-36 after:w-36 md:after:h-44 md:after:w-44 
            after:rounded-full after:-left-12 after:inset-y-0">
            <img src="../assets/images/icon-paper.svg" alt="" class=" relative z-30 scale-90 md:scale-110" key="paper">
        </div>
    </template>
    <style>
    .paper::after {
        box-shadow: 2px 12px hsl(230, 89%, 62%);

    }
    .paper::before {
        box-shadow: inset 0 0.5rem hsl(210, 6%, 93%);

    }
</style>
