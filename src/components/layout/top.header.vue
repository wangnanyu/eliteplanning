<template>
    <div class="header">
        <h1 class="header-title">市场费用管理系统<a href="/" class="header-title__link"/></h1>
        <div class="header-right">
            <el-dropdown trigger="click" class="header-dropdown">
                <span class="el-dropdown-link">
                    王辉<i class="el-icon-arrow-down el-icon--right"/>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    
};
</script>

<style scoped lang="scss">
@import "@/style/mixins/index.scss";

@include b(header) {
    width: 100%;
    height: 100%;
    padding: 10px 16px 10px 24px;
    background: #222;
}
@include b(header-title) {
    position: relative;
    display: flex;
    float: left;
    height: 28px;
    line-height: 28px;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    &:before {
        content: '';
        display: inline-block;
        width: 28px;
        height: 28px;
        margin-right: 8px;
        background-image: url(https://haitao.nos.netease.com/d2f5717e-7573-4a10-8425-4c098a2ad09e.png);
        background-size: 100% 100%;
    }
    @include e(link) {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        text-decoration: none;
    }
}
@include b(header-right) {
    float: right;
    height: 28px;
    line-height: 28px;
    color: #fff;
    @include e(link) {
        color: #fff;
        &:hover {
            color: #fff;
        }
    }
}
@include b(header-dropdown) {
    /*margin-right: 52px;*/
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    .el-icon--right {
        margin-left: 10px;
        font-weight: bold;
    }
}
.el-dropdown-menu {
    padding: 0;
}
.el-dropdown-menu__item {
    font-size: 14px;
}
</style>
