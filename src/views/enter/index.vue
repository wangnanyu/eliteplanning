<template>
    <el-container>
        <el-main class="enter">
            <div class="enter-top">
                <img class="enter-top__img" :src="background" alt="">
                <div class="enter-top__text">
                    <p>寰宇英才</p>
                    <p>Elite Planning</p>
                </div>
            </div>
            <el-button class="enter-middle" type="info" @click="goto">进入首页</el-button>
            <div class="enter-bottom">
                <p>Belong with you</p>
                <p>Belong with your future</p>
            </div>
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
    methods: {
        goto() {
            this.$router.push({ name: 'home' });
        }
    }
};
</script>
<style lang='scss' scoped>
@import "@/style/mixins/index.scss";
@import "@/style/define.scss";

@include b(enter) {
    @include flex-center;
    flex-direction: column;
    
}
@include b(enter-top) {
    position: relative;
    width: 600px;
    height: 600px;
    @include e(img) {
        width: 600px;
        height: 600px;
        animation: myfirst 6s linear infinite;
    }
    @include e(text) {
        @include flex-align-center;
        flex-direction: column;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: $theme-color;
        font-size: 40px;
        font-weight: 700;
    }
}
@include b(enter-middle) {
    margin-top: 40px;
    margin-bottom: 20px;
}
@include b(enter-bottom) {
    width: 400px;
    color: $black-text-color;
    background-color: $alter-background;
    padding: 10px 0;
    border-radius: 2px;
    p {
        height: 15px;
        line-height: 15px;
        text-align: center;
    }
}

// 动画
@keyframes myfirst{
    0%   { transform: rotateZ(0); }
    100% { transform: rotateZ(360deg); }
}

</style>