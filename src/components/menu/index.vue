<template>
  <a-menu mode="vertical">
    <menu-tree :menus="menus" />
  </a-menu>
</template>

<script lang="ts" setup>
  import MenuTree from './menu-tree';

  const routerStore = useRouteStore();
  const menus = routerStore.menus as App.GlobalMenuOption[];
</script>

<style lang="less" scoped>
  :deep(.arco-menu-inner) {
    .arco-menu-inline-header {
      display: flex;
      align-items: center;
    }
    .arco-icon {
      &:not(.arco-icon-down) {
        font-size: 18px;
      }
    }
  }
</style>
