<template>
    <div>
        <a-row>
            <a-col :span="24" class="bg-blue-100 p-8 m-2">col</a-col>
        </a-row>
        <a-row>
            <a-col :span="12" class="bg-blue-100 p-8 m-0">col-12</a-col>
            <a-col :span="12" class="p-8">col-12</a-col>
        </a-row>
        <a-row>
            <a-col :span="8" class="p-8 m-0">col-8</a-col>
            <a-col :span="8" class="bg-blue-100 p-8 m-0">col-8</a-col>
            <a-col :span="8" class="p-8">col-8</a-col>
        </a-row>
        <a-row>
            <a-col :span="6" class="bg-blue-100 p-8 m-0">col-6</a-col>
            <a-col :span="6" class="p-8 m-0">col-6</a-col>
            <a-col :span="6" class="bg-blue-100 p-8 m-0">col-6</a-col>
            <a-col :span="6" class="p-8 m-0">col-6</a-col>
        </a-row>
        <a-divider orientation="left">Horizontal</a-divider>
        <a-row :gutter="16">
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
        </a-row>
        <a-divider orientation="left">Responsive</a-divider>
        <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
        </a-row>
        <a-divider orientation="left">Vertical</a-divider>
        <a-row :gutter="[16, 24]">
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <div class="bg-blue-100 p-8">col-6</div>
            </a-col>
        </a-row>
        <div id="components-grid-demo-playground">
            <div style="margin-bottom: 16px">
                <span style="margin-right: 6px">Horizontal Gutter (px):</span>
                <div style="width: 50%">
                    <a-slider v-model:value="state.gutterKey" :min="0" :max="Object.keys(state.gutters).length - 1"
                        :marks="state.gutters" :step="null" />
                </div>
                <span style="margin-right: 6px">Vertical Gutter (px):</span>
                <div style="width: 50%">
                    <a-slider v-model:value="state.vgutterKey" :min="0" :max="Object.keys(state.vgutters).length - 1"
                        :marks="state.vgutters" :step="null" />
                </div>
                <span style="margin-right: 6px">Column Count:</span>
                <div style="width: 50%">
                    <a-slider v-model:value="state.colCountKey" :min="0" :max="Object.keys(state.colCounts).length - 1"
                        :marks="state.colCounts" :step="null" />
                </div>
            </div>
            <a-row :gutter="[state.gutters[state.gutterKey], state.vgutters[state.vgutterKey]]">
                <a-col v-for="item in state.colCounts[state.colCountKey]" :key="item.toString()"
                    :span="24 / state.colCounts[state.colCountKey]">
                    <div class="bg-blue-100 p-8">Column</div>
                </a-col>
                <a-col v-for="item in state.colCounts[state.colCountKey]" :key="item.toString()"
                    :span="24 / state.colCounts[state.colCountKey]">
                    <div class="bg-blue-100 p-8">Column</div>
                </a-col>
            </a-row>
            Another Row:
            <a-row :gutter="[state.gutters[state.gutterKey], state.vgutters[state.vgutterKey]]">
                <a-col v-for="item in state.colCounts[state.colCountKey]" :key="item.toString()"
                    :span="24 / state.colCounts[state.colCountKey]">
                    <div class="bg-blue-100 p-8">Column</div>
                </a-col>
            </a-row>
            <pre>{{ rowColHtml }}</pre>
            <br />
            <pre>{{ rowColHtml }}</pre>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, reactive } from 'vue';
const state = reactive<{
    gutterKey: number;
    vgutterKey: number;
    colCountKey: number;
    gutters: { [key: number]: number };
    colCounts: { [key: number]: number };
    vgutters: { [key: number]: number };
}>({
    gutterKey: 1,
    vgutterKey: 1,
    colCountKey: 2,
    gutters: {},
    colCounts: {},
    vgutters: {},
});
[8, 16, 24, 32, 40, 48].forEach((value: number, i: number) => {
    state.gutters[i] = value;
});
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
    state.vgutters[i] = value;
});
[2, 3, 4, 6, 8, 12].forEach((value, i) => {
    state.colCounts[i] = value;
});
const rowColHtml = computed(() => {
    const colCount = state.colCounts[state.colCountKey];
    const getter = [state.gutters[state.gutterKey], state.vgutters[state.vgutterKey]];
    let colCode = '<a-row :gutter="[' + getter + ']">\n';
    for (let i = 0; i < colCount; i++) {
        const spanNum = 24 / colCount;
        colCode += '  <a-col :span="' + spanNum + '"/>\n';
    }
    colCode += '</a-row>';
    return colCode;
});
</script>
