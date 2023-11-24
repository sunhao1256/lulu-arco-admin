<template>
  <a-drawer
    :width="340"
    :visible="theme.globalSetting"
    unmount-on-close
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <template #title> Title </template>
    <div
      >You can customize modal body text by the current situation. This modal
      will be closed immediately once you press the OK button.
    </div>
  </a-drawer>
</template>

<script lang="ts" setup>
  const theme = useThemeStore();

  const handleOk = () => {
    theme.globalSetting = false;
  };
  const handleCancel = () => {
    theme.globalSetting = false;
  };
</script>
