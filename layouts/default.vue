<!-- /layouts/default.vue -->
<template>
    <a-layout>
        <a-layout-header>
            <a-space>
                <a-button type="link" href="./" :icon="h(HomeOutlined)">Home</a-button>
                <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
                    <a-menu-item key="1">General</a-menu-item>
                    <a-menu-item key="2">nav2</a-menu-item>
                    <a-menu-item key="3">nav3</a-menu-item>
                </a-menu>
                <a-button type="link" href="./chart">Chart</a-button>
            </a-space>
        </a-layout-header>
        <AppHeader />
        <AppFooter />
        <a-layout-content style="padding: 0 50px">
            <a-breadcrumb style="margin: 16px 0">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>List</a-breadcrumb-item>
                <a-breadcrumb-item>App</a-breadcrumb-item>
            </a-breadcrumb>
            <a-layout style="padding: 24px 0; background: #fff">
                <a-layout-sider width="200" style="background: #fff">
                    <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline"
                        style="height: 100%">
                        <a-sub-menu key="sub1">
                            <template #title>
                                <span>
                                    <user-outlined />
                                    General
                                </span>
                            </template>
                            <a-space direction="vertical">
                                <a-button type="link" href="./button">Button</a-button>
                                <a-button type="link" href="./icon">Icon</a-button>
                                <a-button type="link" href="./typography">Typography</a-button>
                            </a-space>
                        </a-sub-menu>
                        <a-sub-menu key="sub2">
                            <template #title>
                                <span>
                                    <laptop-outlined />
                                    Layout
                                </span>
                            </template>
                            <a-space direction="vertical">
                                <a-button type="link" href="./divider" :icon="h(CheckOutlined)">Divider</a-button>
                                <a-button type="link" href="./flex">Flex</a-button>
                                <a-button type="link" href="./grid">Grid</a-button>
                                <a-button type="link" href="./layout">Layot</a-button>
                                <a-button type="link" href="./space">Space</a-button>
                            </a-space>
                        </a-sub-menu>
                        <a-sub-menu key="sub3">
                            <template #title>
                                <span>
                                    <notification-outlined />
                                    Navigation
                                </span>
                            </template>
                            <a-menu-item key="9">option9</a-menu-item>
                            <a-menu-item key="10">option10</a-menu-item>
                            <a-menu-item key="11">option11</a-menu-item>
                            <a-menu-item key="12">option12</a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub4">
                            <template #title>
                                <span>
                                    <notification-outlined />
                                    Data entry
                                </span>
                            </template>
                            <a-menu-item key="9">option9</a-menu-item>
                            <a-menu-item key="10">option10</a-menu-item>
                            <a-menu-item key="11">option11</a-menu-item>
                            <a-menu-item key="12">option12</a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub5">
                            <template #title>
                                <span>
                                    <notification-outlined />
                                    Data display
                                </span>
                            </template>
                            <a-menu-item key="9">option9</a-menu-item>
                            <a-menu-item key="10">option10</a-menu-item>
                            <a-menu-item key="11">option11</a-menu-item>
                            <a-menu-item key="12">option12</a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub6">
                            <template #title>
                                <span>
                                    <notification-outlined />
                                    Feedback
                                </span>
                            </template>
                            <a-menu-item key="9">option9</a-menu-item>
                            <a-menu-item key="10">option10</a-menu-item>
                            <a-menu-item key="11">option11</a-menu-item>
                            <a-menu-item key="12">option12</a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub7">
                            <template #title>
                                <span>
                                    <notification-outlined />
                                    Other
                                </span>
                            </template>
                            <a-menu-item key="9">option9</a-menu-item>
                            <a-menu-item key="10">option10</a-menu-item>
                            <a-menu-item key="11">option11</a-menu-item>
                            <a-menu-item key="12">option12</a-menu-item>
                        </a-sub-menu>
                    </a-menu>
                </a-layout-sider>
                <a-layout-content :style="{ padding: '0 10px', minHeight: '280px' }">
                    Content
                    <slot />
                </a-layout-content>
            </a-layout>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
            Ant Design @2024 Footer
        </a-layout-footer>
    </a-layout>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue';
import { CheckOutlined, SearchOutlined, HomeOutlined } from '@ant-design/icons-vue';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
const selectedKeys1 = ref<string[]>(['2']);
const selectedKeys2 = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);
</script>