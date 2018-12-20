<template>
    <el-container class="application">
    </el-container>
</template>
<script>
export default {
    name: 'contract',
    props: {},
    data() {
        return {
        };
    },
    computed: {
    },
    watch: {},
    components: {
    },
    mixins: [],
    methods: {
    }
};
</script>
<style lang='scss' scoped>
@import "@/style/mixins/index.scss";
@import "@/style/define.scss";

@include b(application) {
    @include background(application);
}
</style>