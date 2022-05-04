<!--
    ./src/app/Workspace.vue
-->


<script setup lang="ts">

    // import TwBgPaletteDefault from '@/components/TwBgPaletteDefault.vue'
    import { twBgPaletteDefault } from '../index'

    const tw = {
        flex: 'flex justify-center flex-wrap pt-2 pb-6',
        heading: 'block text-xl bg-green-500 bg-opacity-25 text-green-800 py-1',
        mark: 'px-1',
        span: 'px-2 py-1',
    }

</script>


<template>

    <div class="text-green-500 text-xs pb-1">WORKSPACE</div>
    
    <div class="bg-white text-center border-t-2 border-b-2 border-green-500 border-dashed py-24">

        <!--TwBgPaletteDefault/-->

        <strong :class="tw.heading">
            twBgPaletteDefault.default.colors values
        </strong>

        <div :class="tw.flex">
            <span :class="tw.span" v-for="(color, index) in twBgPaletteDefault.default.colors">
                <div :class="tw.mark" :key="index">
                    "{{ index }}" : "{{ color }}"
                </div>
            </span>
        </div>

    </div>

</template>
