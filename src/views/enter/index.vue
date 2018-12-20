<template>
    <el-container>
        <el-main>
            <img :src="background" alt="">
        </el-main>
    </el-container>
</template>
<script>
import Background from '@/assets/img/enter.background.png';
console.log(Background);
export default {
    name: 'enter',
    props: {},
    data() {
        return {
            background: Background
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

</style>