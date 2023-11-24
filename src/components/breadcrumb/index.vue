<template>
  <a-breadcrumb class="container-breadcrumb">
    <a-breadcrumb-item>
      <icon-apps />
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="item in breadcrumbs" :key="item">
      {{ $t(item.label || 'unknown') }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts" setup>
  import { PropType } from 'vue';
  import useBreadcrumb from '@/hooks/common/useBreadcrumb';

  const props = defineProps({
    root: {
      type: String as PropType<Exclude<AuthRoute.AllRouteKey, 'not-found'>>,
      default: () => 'root',
    },
  });

  const { breadcrumbs } = useBreadcrumb(props.root);
</script>

<style scoped lang="less">
  .container-breadcrumb {
    margin: 16px 0;
    :deep(.arco-breadcrumb-item) {
      color: rgb(var(--gray-6));
      &:last-child {
        color: rgb(var(--gray-8));
      }
    }
  }
</style>
