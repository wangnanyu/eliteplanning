<template>
    <div class="circle">
        <div class="sub-circle" @click="goto">
            <p v-for="(info, info__index) in infos" :key="info__index">
                {{info}}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'round',
    props: ['infos', 'path'],
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
        goto() {
            this.$router.push({ name: this.path });
        }
    }
};
</script>
<style lang='scss' scoped>
@import "@/style/mixins/index.scss";
@import "@/style/define.scss";

@include b(circle) {
    width: 250px;
    height: 250px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 2px 2px 5px $shadow-color;
    cursor: pointer;
}
@include b(sub-circle) {
    @include flex-center;
    flex-direction: column;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    font-size: 36px;
    font-weight: 700;
    color: $white-text-color;
    background-color: $theme-color;
}
</style>