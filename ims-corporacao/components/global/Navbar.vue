<template>
    <UVerticalNavigation :links="links" />
</template>
<script setup lang="ts">

const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/home'
},{
  label: 'Usuarios',
  icon: 'i-heroicons-user-group',
  to: '/home/usuarios'
},{
  label: 'Conversa',
  icon: 'i-heroicons-chat-bubble-bottom-center-text-solid',
  to: '/home/conversa'
}]

</script>