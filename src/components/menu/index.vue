<template>
  <a-menu
    v-model:open-keys="openKeys"
    v-model:selected-keys="selectedKeys"
    mode="vertical"
    :auto-open="true"
    :auto-open-selected="true"
  >
    <menu-tree :menus="menus" />
  </a-menu>
</template>

<script lang="ts" setup>
  import { listenerRouteChange } from '@/utils/router/router-listener';
  import MenuTree from './menu-tree';

  const routerStore = useRouteStore();
  const menus = routerStore.menus as App.GlobalMenuOption[];

  const openKeys = ref<string[]>([]);
  const selectedKeys = ref<string[]>([]);

  const findMenuOpenKeys = (target: string) => {
    const result: string[] = [];
    let isFind = false;
    const backtrack = (item: App.GlobalMenuOption, keys: string[]) => {
      if (item.key === target) {
        isFind = true;
        result.push(...keys);
        return;
      }
      if (item.children?.length) {
        item.children.forEach((el) => {
          backtrack(el, [...keys, el.key as string]);
        });
      }
    };
    menus.forEach((el: App.GlobalMenuOption) => {
      if (isFind) return; // Performance optimization
      backtrack(el, [el.key as string]);
    });
    return result;
  };

  listenerRouteChange((newRoute) => {
    const newRouteName = newRoute.name as string;
    selectedKeys.value = [newRouteName];
    const menuOpenKeys = findMenuOpenKeys(newRouteName);
    const keySet = new Set([...menuOpenKeys, ...openKeys.value]);
    openKeys.value = [...keySet];
  }, true);
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
