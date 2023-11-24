<template>
  <div class="flex mx-auto flex-col">
    <a-result
      class="result"
      status="403"
      :subtitle="$t('exception.result.403.description')"
    />
    <a-button key="back" type="primary">
      {{ $t('exception.result.403.back') }}
    </a-button>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: '403',
  };
</script>
