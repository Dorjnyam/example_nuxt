<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

console.log(runtimeConfig.apiSecret)
console.log(runtimeConfig.public.apiBase)
const appConfig = useAppConfig()
</script>

<template>
  <div class="home">
    Home page 
    link of the <a-button type="link" href="https://nuxt.com/">Nuxt.js</a-button>
    and there is also <a-button type="link" href="https://vuejs.org">Vue.js</a-button> 
    some template components of vue.js is <a-button type="link" href="https://antdv.com">ant-design-vue</a-button>
    uses framework for design is <a-button type="link" href="https://tailwindui.com/">Tail wind UI</a-button>
</div>
</template>