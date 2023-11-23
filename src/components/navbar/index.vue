<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <img alt="logo" :src="logo" />
        <a-typography-title
          :style="{ margin: 0, fontSize: '18px' }"
          :heading="5"
        >
          {{ appName }}
        </a-typography-title>
      </a-space>
    </div>
    <ul class="right-side">
      <li>
        <a-dropdown trigger="click" @select="setLocale">
          <a-tooltip :content="$t('settings.language')">
            <a-button class="nav-btn" type="outline" :shape="'circle'">
              <template #icon>
                <icon-language />
              </template>
            </a-button>
          </a-tooltip>
          <template #content>
            <a-doption
              v-for="item in availableLocales"
              :key="item.code"
              :value="item.code"
            >
              {{ item.label }}
            </a-doption>
          </template>
        </a-dropdown>
      </li>
      <li>
        <a-tooltip
          :content="
            !theme.darkMode
              ? $t('settings.navbar.theme.toDark')
              : $t('settings.navbar.theme.toLight')
          "
        >
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="handleToggleTheme"
          >
            <template #icon>
              <icon-moon-fill v-if="!theme.darkMode" />
              <icon-sun-fill v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip
          :content="
            isFullscreen
              ? $t('settings.navbar.screen.toExit')
              : $t('settings.navbar.screen.toFull')
          "
        >
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="toggleFullScreen"
          >
            <template #icon>
              <icon-fullscreen-exit v-if="isFullscreen" />
              <icon-fullscreen v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip :content="$t('settings.title')">
          <a-button class="nav-btn" type="outline" :shape="'circle'">
            <template #icon>
              <icon-settings />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-dropdown trigger="click">
          <a-avatar
            :size="32"
            :style="{ marginRight: '8px', cursor: 'pointer' }"
          >
            <img alt="avatar" :src="avatar" />
          </a-avatar>
          <template #content>
            <a-doption>
              <a-space>
                <icon-tag />
                <span>
                  {{ $t('messageBox.switchRoles') }}
                </span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space @click="$router.push({ name: 'Info' })">
                <icon-user />
                <span>
                  {{ $t('messageBox.userCenter') }}
                </span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space @click="$router.push({ name: 'Setting' })">
                <icon-settings />
                <span>
                  {{ $t('messageBox.userSettings') }}
                </span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space @click="handleLogout">
                <icon-export />
                <span>
                  {{ $t('messageBox.logout') }}
                </span>
              </a-space>
            </a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { useAppInfo } from '@/composables';
  import configs from '@/configs';
  import avatar from '@/assets/images/avatar6.svg?url';
  import logo from '@/assets/images/logo.svg?url';

  const authStore = useAuthStore();
  const { name: appName } = useAppInfo();
  const theme = useThemeStore();

  const { userAvatar } = authStore.userInfo;

  const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();
  const handleToggleTheme = () => {
    theme.darkMode = !theme.darkMode;
  };

  const { locale } = useI18n();
  const { availableLocales: locales } = configs.locales;

  const availableLocales = computed(() => {
    return locales.filter((i: any) => i.code !== locale.value);
  });

  const handleLogout = () => {
    authStore.resetAuthStore();
  };

  const setLocale = (use: string) => {
    locale.value = use;
  };
</script>

<style scoped lang="less">
  .navbar {
    display: flex;
    justify-content: space-between;
    height: 100%;
    background-color: var(--color-bg-2);
    border-bottom: 1px solid var(--color-border);
  }

  .left-side {
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  .center-side {
    flex: 1;
  }

  .right-side {
    display: flex;
    padding-right: 20px;
    list-style: none;
    :deep(.locale-select) {
      border-radius: 20px;
    }
    li {
      display: flex;
      align-items: center;
      padding: 0 10px;
    }

    a {
      color: var(--color-text-1);
      text-decoration: none;
    }
    .nav-btn {
      border-color: rgb(var(--gray-2));
      color: rgb(var(--gray-8));
      font-size: 16px;
    }
    .trigger-btn,
    .ref-btn {
      position: absolute;
      bottom: 14px;
    }
    .trigger-btn {
      margin-left: 14px;
    }
  }
</style>

<style lang="less">
  .message-popover {
    .arco-popover-content {
      margin-top: 0;
    }
  }
</style>
