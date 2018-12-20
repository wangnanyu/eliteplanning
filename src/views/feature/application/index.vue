<template>
    <el-container class="application">
        <div class="title">
            <p class="title__name">留学申请</p>
            <p class="title__ename">Study abroad application</p>
        </div>
        <div class="main">
            <square  v-for="(item, item_index) in list" :key="item_index" :item="item" 
                :width="width" :height="height" />
        </div>
    </el-container>
</template>
<script>
import Square from '@/components/widget/square';
import America from '@/assets/img/america.png';
import European from '@/assets/img/european.png';
import CommonWealth from '@/assets/img/common.wealth.png';

export default {
    name: 'contract',
    props: {},
    data() {
        return {
            list: [
                { name: '英联邦国家', ename: 'Commonwealth countries', img: CommonWealth },
                { name: '欧洲各国', ename: 'Other European countries', img: European },
                { name: '美国', ename: 'United States of America', img: America }

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

@include b(application) {
    @include background(application);
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