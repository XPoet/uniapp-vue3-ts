<template>
    <view class="content">
        {{ title }}
    </view>
</template>

<script lang="ts">
    import {
        defineComponent
    } from "vue";
    export default defineComponent({
        setup() {
            return {
                title: "home",
            };
        },
    });
</script>

<style>
</style>
