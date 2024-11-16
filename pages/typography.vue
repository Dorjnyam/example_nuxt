<template>
    <a-typography-paragraph v-model:content="editableStr" editable />
    <a-typography-paragraph v-model:content="customIconStr" editable>
        <template #editableIcon>
            <HighlightOutlined />
        </template>
        <template #editableTooltip>click to edit text</template>
    </a-typography-paragraph>
    Trigger edit with:&nbsp;&nbsp;
    <a-radio-group :value="stateToRadio()" @change="e => (chooseTrigger = radioToState(e.target.value))">
        <a-radio value="icon">icon</a-radio>
        <a-radio value="text">text</a-radio>
        <a-radio value="both">both</a-radio>
    </a-radio-group>
    <a-typography-paragraph v-model:content="clickTriggerStr" :editable="{ triggerType: chooseTrigger }">
        <template #editableTooltip>click to edit text</template>
    </a-typography-paragraph>
    <a-typography-paragraph v-model:content="customEnterIconStr" editable>
        <template #editableIcon>
            <HighlightOutlined />
        </template>
        <template #editableTooltip>click to edit text</template>
        <template #editableEnterIcon="{ className }">
            <CheckOutlined :class="className" />
        </template>
    </a-typography-paragraph>
    <a-typography-paragraph v-model:content="noEnterIconStr" editable>
        <template #editableIcon>
            <HighlightOutlined />
        </template>
        <template #editableTooltip>click to edit text</template>
        <template #editableEnterIcon>{{ null }}</template>
    </a-typography-paragraph>
    <a-typography-paragraph v-model:content="hideTooltipStr" :editable="{ tooltip: false }" />
    <a-typography-paragraph v-model:content="lengthLimitedStr"
        :editable="{ maxlength: 50, autoSize: { maxRows: 5, minRows: 3 } }" />

    <a-typography-paragraph copyable>This is a copyable text.</a-typography-paragraph>
    <a-typography-paragraph :copyable="{ text: 'Hello, Ant Design!' }">
        Replace copy text.
    </a-typography-paragraph>
    <a-typography-paragraph copyable content="Custom Copy icon and replace tooltips text.">
        <template #copyableIcon="{ copied }">
            <SmileOutlined v-if="!copied" key="copy-icon" />
            <SmileFilled v-else key="copied-icon" />
        </template>
        <template #copyableTooltip="{ copied }">
            <span v-if="!copied" key="copy-tooltip">click here</span>
            <span v-else key="copied-tooltip">you clicked!!</span>
        </template>
    </a-typography-paragraph>
    <a-typography-paragraph :copyable="{ tooltip: false }">
        Hide Copy tooltips.
    </a-typography-paragraph>
    <a-divider orientation="left">Another</a-divider>
    <a-space direction="vertical">
        <a-typography-text>Ant Design Vue (default)</a-typography-text>
        <a-typography-text type="secondary">Ant Design Vue (secondary)</a-typography-text>
        <a-typography-text type="success">Ant Design Vue (success)</a-typography-text>
        <a-typography-text type="warning">Ant Design Vue (warning)</a-typography-text>
        <a-typography-text type="danger">Ant Design Vue (danger)</a-typography-text>
        <a-typography-text disabled>Ant Design Vue (disabled)</a-typography-text>
        <a-typography-text mark>Ant Design Vue (mark)</a-typography-text>
        <a-typography-text code>Ant Design Vue (code)</a-typography-text>
        <a-typography-text keyboard>Ant Design Vue (keyboard)</a-typography-text>
        <a-typography-text underline>Ant Design Vue (underline)</a-typography-text>
        <a-typography-text delete>Ant Design Vue (delete)</a-typography-text>
        <a-typography-text strong>Ant Design Vue (strong)</a-typography-text>
        <a-typography-link href="https://antdv.com" target="_blank">
            Ant Design Vue (Link)
        </a-typography-link>
    </a-space>

    <a-divider orientation="left">Also another</a-divider>
    <a-slider v-model:value="rows" :min="1" :max="10" />
    <a-typography-paragraph :ellipsis="ellipsis" :title="`${article}--William Shakespeare`"
        :content="article"></a-typography-paragraph>

    <a-divider style="height: 2px; background-color: blue" orientation="left">Title levels</a-divider>
    <a-typography-title>h1. Ant Design Vue</a-typography-title>
    <a-typography-title :level="2">h2. Ant Design Vue</a-typography-title>
    <a-typography-title :level="3">h3. Ant Design Vue</a-typography-title>
    <a-typography-title :level="4">h4. Ant Design Vue</a-typography-title>
    <a-typography-title :level="5">h5. Ant Design Vue</a-typography-title>
</template>
<script lang="ts" setup>
import { ref, watch, computed } from 'vue';
import {
    HighlightOutlined,
    SmileOutlined,
    SmileFilled,
    CheckOutlined,
} from '@ant-design/icons-vue';

const editableStr = ref('This is an editable text.');
watch(editableStr, () => {
    console.log('editableStr', editableStr.value);
});
const chooseTrigger = ref<('icon' | 'text')[]>(['icon']);

const radioToState = (input: string): ('icon' | 'text')[] => {
    switch (input) {
        case 'text':
            return ['text'];
        case 'both':
            return ['icon', 'text'];
        case 'icon':
        default:
            return ['icon'];
    }
};

const stateToRadio = () => {
    if (chooseTrigger.value.indexOf('text') !== -1) {
        return chooseTrigger.value.indexOf('icon') !== -1 ? 'both' : 'text';
    }
    return 'icon';
};
const customIconStr = ref('Custom Edit icon and replace tooltip text.');
const hideTooltipStr = ref('Hide Edit tooltip.');
const lengthLimitedStr = ref('This is an editable text with limited length.');
const clickTriggerStr = ref('Text or icon as trigger - click to start editing.');
const customEnterIconStr = ref('Editable text with a custom enter icon in edit field.');
const noEnterIconStr = ref('Editable text with no enter icon in edit field.');

const rows = ref(1);
const ellipsis = computed(() => {
    return {
        rows: rows.value,
        expandable: true,
        suffix: '--William Shakespeare',
        onEllipsis: (ellipsis: boolean) => {
            console.log('Ellipsis changed:', ellipsis);
        },
    };
});
const article =
    "To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life";
</script>