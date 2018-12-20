<template>
    <div class="header">
        <div class="header-item" v-for="(item, item_index) in menuList"
            :key="item_index" @click="goto(item.path, item_index)" :class="{ active: item_index == activeIndex }">
            <span class="header-item__name">{{item.name}}</span>
            <span class="header-item__ename">{{item.ename}}</span>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            activeIndex: 0,
            menuList: [
                { name: '首页', ename: 'Home page', path: 'home' },
                { name: '简介', ename: 'About us', path: 'about' },
                { name: '动态', ename: 'News', path: 'news' },
                { name: '会员', ename: 'VIP', path: 'vip' },
                { name: '联系我们', ename: 'Contract us', path: 'contract' }
            ]
        };
    },
    methods: {
        goto(name, index) {
            this.activeIndex = index;
            this.$router.push({ name });
        }
    }

};
</script>

<style scoped lang="scss">
@import "@/style/mixins/index.scss";
@import "@/style/define.scss";

@include b(header) {
    display: flex;
    padding: 0 20px;
    background-color: $alter-background;
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    font-weight: 700;
}

@include b(header-item) {
    flex: 1;
    cursor: pointer;
    @include e(name) {
        color: $black-text-color;
        margin-right: 5px;
    }
    @include e(ename) {
        color: $white-text-color;
    }
}

.active {
    border-bottom: 1px solid $theme-color;
}

</style>
