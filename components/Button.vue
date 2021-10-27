<template>
    <button @click="handleClickEmit">{{ btnText }}</button>
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