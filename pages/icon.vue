<template>
    <div>
        <a-space>
            <home-outlined/>
            <setting-filled />
            <smile-outlined />
            <sync-outlined spin />
            <smile-outlined :rotate="180" />
            <loading-outlined />
            <heart-two-tone two-tone-color="#eb2f96" />
        </a-space>
    </div>
</template>
<script lang="ts" setup>
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    HeartTwoTone,
} from '@ant-design/icons-vue';
</script>
<style scoped>
.icons-list :deep(.anticon) {
    margin-right: 6px;
    font-size: 24px;
}
</style>