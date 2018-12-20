<template>
    <router-view v-if="$route.meta.blank"/>
    <div v-else>
        <div class="main-breadcrumb">
            <el-breadcrumb v-if="breadcrumb && breadcrumb.length">
                <el-breadcrumb-item :to="{ path: '/' }"><i class="icon icon-home" /></el-breadcrumb-item>
                <el-breadcrumb-item v-for="title in breadcrumb" :key="title">{{ title }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <h2 class="main-title">{{ breadcrumb.length && breadcrumb[breadcrumb.length - 1] }}</h2>
        <div class="main-content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['routeMap']),
        breadcrumb() {
            const path = this.$route.path;
            const meta = (this.routeMap[path] || {}).meta || {};
            let breadcrumb = meta.breadcrumb || [];
            if(meta.parent) {
                breadcrumb = (((this.routeMap[meta.parent] || {}).meta || {}).breadcrumb || []).concat(breadcrumb);
            }
            return breadcrumb;
        }
    }
};
</script>

<style scoped lang="scss">
@import "~@/style/mixins/index.scss";

@include b(main-breadcrumb) {
    position: fixed;
    top: 48px;
    z-index: 1000;
    width: 100%;
    height: 40px;
    padding-left: 16px;
    background: #fff;
    .icon-home {
        color: #00C4C0;
    }
}
@include b(main-content) {
    min-height: 95%;
    padding:0 16px;
}
@include b(main-title) {
    position: relative;
    padding-left: 12px;
    margin: 16px;
    line-height: 16px;
    color: #222;
}
@include b(main-title) {
    &::before {
        position: absolute;
        width: 4px;
        height: 16px;
        left: 0;
        content: "";
        background: #00C4C0;
    }
}
</style>
