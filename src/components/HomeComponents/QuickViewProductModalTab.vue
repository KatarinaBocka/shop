<template>
    <div v-show="isActive"><slot></slot></div>
</template>

<script>

export default {
    name: 'QuickViewProductModalTab',
    props: {
        name: { required: true },
        title: { required: true },
        images: { required: false },
        selected: { default: false },

        images: {
            type: Object
        }
    },
    data () {
        return {
            isActive: false
        }
    },
    computed: {
        href() {
            return '#' + this.title;
        }
    },
    mounted() {
        this.isActive = this.selected;
    }
}

</script>

<style>

</style>

