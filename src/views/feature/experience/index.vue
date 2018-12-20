<template>
    <el-container class="experience">
        <div class="title">
            <p class="title__name">游学体验</p>
            <p class="title__ename">Study tour experience</p>
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
                { name: '冬夏令营', ename: 'Winter and summer camp', img: '' },
                { name: '语言团', ename: 'Language group', img: '' },
                { name: '成人游学', ename: 'Adult study tour', img: '' }

            ],
            width: 400,
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

@include b(experience) {
    @include background(experience);
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