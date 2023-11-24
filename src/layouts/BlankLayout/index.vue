<template>
  <router-view v-slot="{ Component, route }">
    <transition
      mode="out-in"
      leave-to-class="opacity-0"
      enter-active-class="transition-all duration-200 ease-in-out"
      leave-active-class="transition-all duration-200 ease-in-out"
      enter-from-class="opacity-0"
    >
      <component :is="Component" :key="route.fullPath" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup></script>
