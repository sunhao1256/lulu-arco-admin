<template>
  <div class="container">
    <div class="logo">
      <img alt="logo" :src="logo" />
      <div class="logo-text">{{ name }}</div>
    </div>
    <div class="banner">
      <div class="banner-inner">
        <a-carousel class="carousel" animation-name="fade">
          <a-carousel-item v-for="item in carouselItem" :key="item.slogan">
            <div :key="item.slogan" class="carousel-item">
              <div class="carousel-title">{{ item.slogan }}</div>
              <div class="carousel-sub-title">{{ item.subSlogan }}</div>
              <img class="carousel-image" :src="item.image" />
            </div>
          </a-carousel-item>
        </a-carousel>
      </div>
    </div>
    <div class="content">
      <div class="content-inner">
        <router-view />
      </div>
      <div class="footer">
        <a-layout-footer class="footer-content">{{ name }}</a-layout-footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useAppInfo } from '@/composables/system';
  import logo from '@/assets/images/logo.svg?url';
  import { useI18n } from 'vue-i18n';
  import { computed } from 'vue';
  import bannerImage from '@/assets/images/login-banner.png';

  const { title, name } = useAppInfo();

  const { t } = useI18n();
  const carouselItem = computed(() => [
    {
      slogan: t('login.banner.slogan1'),
      subSlogan: t('login.banner.subSlogan1'),
      image: bannerImage,
    },
    {
      slogan: t('login.banner.slogan2'),
      subSlogan: t('login.banner.subSlogan2'),
      image: bannerImage,
    },
    {
      slogan: t('login.banner.slogan3'),
      subSlogan: t('login.banner.subSlogan3'),
      image: bannerImage,
    },
  ]);
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    height: 100vh;

    .banner {
      width: 550px;
      background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
    }
    .banner {
      display: flex;
      align-items: center;
      justify-content: center;

      &-inner {
        flex: 1;
        height: 100%;
      }
    }

    .carousel {
      height: 100%;

      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
      }

      &-title {
        color: var(--color-fill-1);
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
      }

      &-sub-title {
        margin-top: 8px;
        color: var(--color-text-3);
        font-size: 14px;
        line-height: 22px;
      }

      &-image {
        width: 320px;
        margin-top: 30px;
      }
    }

    .content {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      padding-bottom: 40px;
    }

    .footer {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      &-content {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        color: var(--color-text-2);
        text-align: center;
      }
    }
  }

  .logo {
    position: fixed;
    top: 24px;
    left: 22px;
    z-index: 1;
    display: inline-flex;
    align-items: center;

    &-text {
      margin-right: 4px;
      margin-left: 4px;
      color: var(--color-fill-1);
      font-size: 20px;
    }
  }
</style>

<style lang="less" scoped>
  // responsive
  @media (max-width: @screen-lg) {
    .container {
      .banner {
        width: 25%;
      }
    }
  }
</style>
