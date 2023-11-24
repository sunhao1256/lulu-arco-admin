<template>
  <div class="container px-3 pt-2">
    <div class="flex-1">
      <div class="bg-white px-2 py-2 rounded-md">
        <a-typography-title :heading="5">
          <a-avatar :image-url="avatar"> </a-avatar>
          {{ $t('workplace.welcome') }} {{ userInfo.userName }}
        </a-typography-title>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useAuthStore } from '@/store';

  import avatar from '@/assets/images/avatar6.svg?uri';

  const { userInfo } = useAuthStore();
</script>

<style lang="less" scoped>
  .container {
    background-color: var(--color-fill-2);
    display: flex;
  }
</style>
