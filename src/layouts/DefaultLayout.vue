<template>
  <a-layout class="layout">
    <a-layout-header class="layout-navbar">
      <NavBar />
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        collapsible
        breakpoint="xl"
        class="layout-sider"
        :width="themeConfig.menuWidth"
        @collapse="setCollapse"
      >
        <Menu />
      </a-layout-sider>
      <a-layout class="layout-content" :style="paddingStyle">
        <a-layout-content>
          <BlankLayout></BlankLayout>
        </a-layout-content>
        <Footer />
      </a-layout>

      <GlobalSetting />
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { useThemeStore } from '@/store';
  import NavBar from '@/components/navbar/index.vue';
  import Menu from '@/components/menu/index.vue';
  import Footer from '@/components/footer/index.vue';
  import GlobalSetting from '@/components/globalsetting/index.vue';
  import BlankLayout from './BlankLayout/index.vue';
  // import TabBar from '@/components/tab-bar/menu-tree.tsx';

  const themeConfig = useThemeStore();

  const collapsed = ref(false);
  const setCollapse = (val: boolean) => {
    collapsed.value = val;
  };
  const navbarHeight = `60px`;

  const menuWidth = computed(() => {
    return collapsed.value ? 48 : themeConfig.menuWidth;
  });
  const paddingStyle = computed(() => {
    const paddingLeft = { paddingLeft: `${menuWidth.value}px` };
    const paddingTop = { paddingTop: navbarHeight };
    return { ...paddingLeft, ...paddingTop };
  });
</script>

<style scoped lang="less">
  @nav-size-height: 60px;
  @sider-size-width: 220px;

  .layout-navbar {
    height: @nav-size-height;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
  }

  .layout-sider {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    padding-top: @nav-size-height;
    height: 100%;
  }

  .layout-content {
    min-height: 100vh;
    overflow-y: hidden;
    background-color: var(--color-fill-2);
    transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  }
</style>
