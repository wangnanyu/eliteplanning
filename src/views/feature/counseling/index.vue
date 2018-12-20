<template>
    <el-container class="counseling">
        <div class="title">
            <p class="title__name">作业辅导</p>
            <p class="title__ename">Homework Counseling</p>
        </div>
        <div class="main">
            <square  v-for="(item, item_index) in list" :key="item_index" :item="item" 
                :width="width" :height="height" />
        </div>
    </el-container>
</template>
<script>
import Square from '@/components/widget/square';

export default {
    name: 'contract',
    props: {},
    data() {
        return {
            list: [
                { name: '主题演讲', ename: 'Presentation Counseling', img: '' },
                { name: '专业论文', ename: 'Professional paper', img: '' },
                { name: '设计辅导', ename: 'Design guidance', img: '' },
                { name: '作品集辅导', ename: 'Portfolio counseling', img: '' }

            ],
            width: 300,
            height: 300
        };
    },
    computed: {
    },
    watch: {},
    components: {
        Square
    },
    mixins: [],
    methods: {
    }
};
</script>
<style lang='scss' scoped>
@import "@/style/mixins/index.scss";
@import "@/style/define.scss";

@include b(counseling) {
    @include background(traveling);
    flex-direction: column;
    padding: 100px 30px;
}
@include b(title) {
    @include flex-align-baseline;
    width: 100%;
    height: 70px;
    line-height: 70px;
    font-weight: 700;
    @include e(name) {
        margin-right: 30px;
        font-size: 36px;
        color: $black-text-color;
    }
    @include e(ename) {
        font-size: 22px;
        color: $theme-color;
    }
}
@include b(main) {
    padding-top: 100px;
    @include flex-justify-between;
}
</style>