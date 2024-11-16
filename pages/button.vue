<template>
    <div class="button-container" :style="boxStyle">
        <a-space direction="vertical" >
            <a-space>
                <a-button type="primary">Primary</a-button>
                <a-button type="primary" disabled>Primary(disabled)</a-button>
            </a-space>
            <a-space>
                <a-button>Default</a-button>
                <a-button disabled>Default(disabled)</a-button>
            </a-space>
            <a-space>
                <a-button type="dashed">Dashed</a-button>
                <a-button type="dashed" disabled>Dashed(disabled)</a-button>
            </a-space>
            <a-space>
                <a-button type="text">Text</a-button>
                <a-button type="text" disabled>Text(disabled)</a-button>
            </a-space>
            <a-space>
                <a-button type="link">Link</a-button>
                <a-button type="link" disabled>Link(disabled)</a-button>
            </a-space>
            <a-space>
                <a-button danger>Danger Default</a-button>
                <a-button danger disabled>Danger Default(disabled)</a-button>
            </a-space>
            <a-space>
                <a-button danger type="text">Danger Text</a-button>
                <a-button danger type="text" disabled>Danger Text(disabled)</a-button>
            </a-space>
            <a-space>
                <a-button danger type="link">Danger Link</a-button>
                <a-button danger type="link" disabled>Danger Link(disabled)</a-button>
            </a-space>
            <div :style="{ padding: '8px', background: 'rgb(190, 200, 200)' }">
                <a-space>
                    <a-button ghost>Ghost</a-button>
                    <a-button ghost disabled>Ghost(disabled)</a-button>
                </a-space>
            </div>
            <a-space>
                <a-button type="primary" :loading="loading" @mouseenter="loading = true">
                    mouseenter me!
                </a-button>
                <a-button type="primary" :loading="iconLoading" @click="enterIconLoading">
                    <template #icon>
                        <PoweroffOutlined />
                    </template>
                    延迟1s
                </a-button>
            </a-space>
            <a-space>
                <a-button type="primary" loading />
                <a-button type="primary" shape="circle" loading />
                <a-button danger shape="round" loading />
            </a-space>
            <a-space>
                <a-button type="primary">Primary</a-button>
                <a-button>secondary</a-button>
                <a-dropdown>
                    <template #overlay>
                        <a-menu @click="handleMenuClick">
                            <a-menu-item key="1">1st item</a-menu-item>
                            <a-menu-item key="2">2nd item</a-menu-item>
                            <a-menu-item key="3">3rd item</a-menu-item>
                        </a-menu>
                    </template>
                    <a-button>
                        Actions
                        <DownOutlined />
                    </a-button>
                </a-dropdown>
            </a-space>
        </a-space>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { PoweroffOutlined } from '@ant-design/icons-vue';
import { DownOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
import type { CSSProperties } from 'vue';
const handleMenuClick: MenuProps['onClick'] = e => {
    console.log('click', e);
};
interface DelayLoading {
    delay: number;
}
const loading = ref<boolean>(false);
const iconLoading = ref<boolean | DelayLoading>(false);
const enterIconLoading = () => {
    iconLoading.value = { delay: 1000 };

    setTimeout(() => {
        iconLoading.value = false;
    }, 6000);
};

const boxStyle: CSSProperties = {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #40a9ff',
    display: 'flex'
};
</script>
