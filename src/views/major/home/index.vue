<template>
    <el-container class="home">
        <round v-for="(item, item__index) in list" :key="item__index" 
            :infos="item.infos" :path="item.path" />
    </el-container>
</template>
<script>
import Round from '@/components/widget/round';
export default {
    name: 'home',
    props: {},
    data() {
        return {
            list: [
                { infos: ['留学申请', 'Application'], path: 'application' },
                { infos: ['游学体验', 'Experience'], path: 'experience' },
                { infos: ['作业辅导', 'Counseling'], path: 'counseling' },
                { infos: ['旅游签证', 'Traveling'], path: 'traveling' },
                { infos: ['移民投资', 'Immigration'], path: 'immigration' }
            ]
        };
    },
    computed: {
    },
    watch: {},
    components: {
        Round
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
    @include flex-align-center;
    justify-content: space-around;
    @include background($home);
}
</style>