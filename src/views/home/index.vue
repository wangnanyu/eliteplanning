<template>
    <el-container class="home">

    </el-container>
</template>
<script>
export default {
    name: 'home',
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
@include b(home) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    top: 0;
    background: url('../../assets/img/home.background.png') center no-repeat;
    background-size: conver; 
}
</style>