<script setup lang="ts">

    type TwBgPaletteDefaultProps = {
        text?: string | undefined
    }

    const props = withDefaults(
        defineProps<TwBgPaletteDefaultProps>(), {
            text: ''
        }
    )

</script>


<template>

    <div>
        <template v-if="text">
            {{ text }}
        </template>
        <template v-else>
            <slot>TwBgPaletteDefault</slot>
        </template>
    </div>

</template>
