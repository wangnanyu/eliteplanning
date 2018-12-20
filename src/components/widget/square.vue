<template>
    <div class="square" :style="`width: ${width}px; height: ${height}px`">
        <div class="sub-square" :style="`width: ${width - 10}px; height: ${height -10}px`">
            <p class="sub-square__name">{{item.name}}</p>
            <p class="sub-square__ename">{{item.ename}}</p>
            <img class="sub-square__img" :src="item.img" :alt="item.img ? item.name : ''"/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'square',
    props: {
        item: Object,
        width: Number,
        height: Number
    },
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

@include b(square) {
    @include flex-center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 2px 2px 5px $shadow-color, -2px -2px 5px $shadow-color;
}
@include b(sub-square) {
    @include flex-center;
    flex-direction: column;
    background-color: $theme-color;
    border-radius: 20px;
    color: $white-text-color;
    @include e(name) {
        font-size: 26px;
        font-weight: 700;
    }
    @include e(ename) {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 22px;
        font-weight: 700;
    }
    @include e(img) {
        width: 200px;
        height: 100px;
    }
}
</style>