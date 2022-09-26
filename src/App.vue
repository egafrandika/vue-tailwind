<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "./components/Co-man/Nav.vue";
</script>

<template>
  <header>
    <Nav />
  </header>
  <body>
    <div class="bg-black pt-3 pb-3">
        <div class="container flex justify-center items-center">
          <p class="w-[5rem] text-center text-gray-300 text-base font-extraligh cursor-pointer 2xs:text-xs">
           <RouterLink to="/man">MAN</RouterLink>
          </p>
          <p class="w-[5rem] text-center text-gray-300 text-base font-extraligh cursor-pointer 2xs:text-xs">
            <RouterLink to="/">US</RouterLink>
          </p>
          <p class="w-[5rem] text-center text-gray-300 text-base font-extraligh cursor-pointer 2xs:text-xs">
            <RouterLink to="/woman">WOMAN</RouterLink>
          </p>
        </div>
      </div>
  </body>
  <RouterView />
</template>

<style scoped>

</style>
