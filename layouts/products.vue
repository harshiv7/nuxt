<template>
    <div>
      <!-- <LoadingBar :duration="2000" /> -->
    <NuxtLoadingIndicator :color="'#2196F3'" :throttle="0" :height="5"/>

      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4">
          <NuxtLink to="/products" class="font-bold">Nuxt Dojo Merch</NuxtLink>
        </nav>
      </header>
      <!-- <LoadingBar :duration="2000" /> -->
      <div class="container mx-auto p-4">
        <slot />
      </div>
      <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </footer>
    </div>
  </template>
  
  <style scoped>
    .router-link-exact-active {
      color: #12b488;
    }
  </style>