<template>
    <el-container :class="[{'body--active': !active}, 'body']">
        <el-main>
            <router-view/>
        </el-main>
        <el-footer height="20px">本系统由网易无尾熊(杭州)科技有限公司提供技术支持</el-footer>
    </el-container>
</template>

<script>
// Body空组件是为了实现router的多级结构,两层children,因为两层需要两个router-view
import { mapState } from 'vuex';
export default {
    data() {
        return {};
    },
    computed: {
        ...mapState({
            active: 'sidebarActive'
        })
    }
};
</script>

<style scoped lang="scss">
@import "src/style/mixins/index.scss";

@include b(body) {      
    padding-top: 40px;
    background: #EAEDF3;
    overflow: hidden;
    transition: all .3s;
    @include m(active) {
        left: 0;
    }
}
@include el-b(footer) {
    margin-top: 4px;
    padding: 0;
    text-align: center;
    font-size: 12px;
    color: #9FA6AF;
}
</style>
