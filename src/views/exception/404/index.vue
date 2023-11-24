<template>
  <div class="flex flex-col">
    <a-result
      class="result"
      status="404"
      :subtitle="$t('exception.result.404.description')"
    >
    </a-result>
    <div class="flex mx-auto">
      <a-button key="again" style="margin-right: 16px">
        {{ $t('exception.result.404.retry') }}
      </a-button>
      <a-button key="back" type="primary">
        {{ $t('exception.result.404.back') }}
      </a-button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: '404',
  };
</script>

<style scoped lang="less"></style>
