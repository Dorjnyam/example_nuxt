<template>
    <a-flex gap="middle" align="start" vertical>
        <p>Select justify:</p>
        <a-segmented v-model:value="justify" :options="justifyOptions" />
        <p>Select align:</p>
        <a-segmented v-model:value="alignItems" :options="alignOptions" />
        <p>Select direction:</p>
        <a-segmented v-model:value="vertical1" :options="directionOptions" />
        <p>Select number of buttons:</p>
        <a-radio-group v-model:value="buttonMode">
            <a-radio value="add">Add or Delete</a-radio>
            <a-radio value="customize">Customize</a-radio>
        </a-radio-group>
        <template v-if="buttonMode === 'add'">
            <a-button type="primary" @click="addButton">Add</a-button>
            <a-button danger @click="deleteButton">Delete</a-button>
        </template>
        <template v-if="buttonMode === 'customize'">
            <a-input-number v-model:value="numberOfButtons" min="1" max="100" />
        </template>
        <a-flex :style="boxStyle" :justify="justify" :align="alignItems" :vertical="isVertical" wrap="wrap">
            <a-button v-for="n in numberOfButtons" :key="n" type="primary">Primary {{ n }}</a-button>
        </a-flex>
    </a-flex>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import type { CSSProperties } from 'vue';
import type { FlexProps } from 'ant-design-vue';

const justifyOptions = reactive<FlexProps['justify'][]>([
    'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly',
]);
const alignOptions = reactive<FlexProps['align'][]>([
    'flex-start', 'center', 'flex-end'
]);
const directionOptions = reactive<string[]>(['vertical', 'horizontal']);
const justify = ref(justifyOptions[0]);
const alignItems = ref(alignOptions[0]);
const vertical1 = ref(directionOptions[0]);
const numberOfButtons = ref<number>(1);
const buttonMode = ref<string>('add');

const isVertical = computed(() => vertical1.value === 'vertical');

const boxStyle: CSSProperties = {
    width: '100%',
    minHeight: '400px',
    borderRadius: '6px',
    border: '1px solid #40a9ff'
};

function addButton() {
    numberOfButtons.value++;
}

function deleteButton() {
    if (numberOfButtons.value > 1) {
        numberOfButtons.value--;
    }
}
</script>
