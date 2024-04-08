<template>
    <UVerticalNavigation :links="links" @click="showNavbar = false"/>
</template>
<script setup lang="ts">
const showNavbar = defineModel()

const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/home'
},{
  label: 'Usuarios',
  icon: 'i-heroicons-user-group',
  to: '/home/usuarios'
},{
  label: 'Feed',
  icon: 'i-heroicons-chat-bubble-bottom-center-text-solid',
  to: '/home/feed'
}]

</script>