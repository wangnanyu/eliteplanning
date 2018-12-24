<template>
    <el-container class="traveling">
        <div class="title">
            <p class="title__name">旅游签证</p>
            <p class="title__ename">Traveling and Visa</p>
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
                { name: '境内👉境外', ename: 'From China to overseas', img: '' },
                { name: '境外👉境外', ename: 'Overseas countries to another', img: '' },
                { name: '行程及交通咨询', ename: 'AItinerary and transportation', img: '' }

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

@include b(traveling) {
    @include background($traveling);
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