<template>
    <button @click="handleClickEmit" class="bg-red-600 text-white p-4 rounded-lg">{{ btnText }}</button>
</template>

<script>
export default {
    props: ['btnText'],
    methods: {
        handleClickEmit() {
            this.$emit('handleClick')
        }
    }
}
</script>