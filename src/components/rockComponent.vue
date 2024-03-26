<template>
        
<!-- <div 
    @click="moveImage($event.target)" 
    name="rock" -->
    <div id="rockComponent"
class="rock relative hover:scale-125 hover:ease-in-out hover:transition-all hover:duration-300 cursor-pointer before:m-auto after:m-auto 
before:bg-white  before:absolute before:w-24 before:h-24 md:before:w-32 md:before:h-32 
before:z-10 before:-left-6 before:right-2 before:inset-y-0 before:rounded-full 
after:absolute after:bg-Primary-RockGradient2 after:w-36 after:h-36 md:after:h-44 md:after:w-44 
after:rounded-full after:-left-12 after:inset-y-0">
<img
src="../assets/images/icon-rock.svg" alt="" class="relative z-30 scale-90 md:scale-110" key="rock">
</div>
</template>
<style>
.rock::after {
    box-shadow: 2px 12px hsl(349, 71%, 52%);

}
.rock::before {
    box-shadow: inset 0 0.5rem hsl(210, 6%, 93%);

}

</style>
