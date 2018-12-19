<template>
    <div class="sidebar sidebar--border">
        <div class="sidebar-new">
            <div class="sidebar-new__button" @click="newModalVisible=true">
                <i class="el-icon-edit-outline"></i>
                <span class="f-ml5">新建流程</span>
            </div>
        </div>
        <el-menu
            :default-active="displayPage"
            unique-opened>
            <!-- 空白导航栏，用于点击新建流程时收起上一导航栏 -->
            <el-submenu index="default" style="display: none">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>占位导航</span>
                </template>
                <el-menu-item index="blank" >占位子导航</el-menu-item>
            </el-submenu>
            <!-- 菜单栏 -->
            <el-submenu v-for="(menu, menuIndex) in menus" 
            :index="menuIndex+''" 
            :key="menuIndex">
                <template slot="title">
                    <i :class="`icon icon-${icons[menuIndex] || icons[(menuIndex%icons.length)]}`"/>
                    <span>{{ menu.name }}</span>
                </template>
                <el-menu-item v-for="(page, childIndex) in menu.childsList"
                :index="page.url"
                :key="childIndex"
                @click="goto(page.url)">
                    <template slot="title">
                        <span>{{ page.name }}</span>
                    </template>
                </el-menu-item>
            </el-submenu>
        </el-menu>
        <div :class="[{'sidebar-toggle--active': !active}, 'sidebar-toggle']" @click="toggle">
            <i :class="active ? 'el-icon-arrow-left' : 'el-icon-arrow-right'"/>
        </div>
        <!-- 新建流程 modal -->
        <el-dialog :visible="newModalVisible" @close="close" title="新建流程" width="30%">
            <ul class="sidebar-dialog">
                <li v-for="processType in processTypes" :key="processType.id" >
                    <el-radio class="test"  v-model="selectedKey" :label="processType.id">{{ processType.name }}</el-radio>
                </li>
            </ul>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close">取消</el-button>
                <el-button @click="confirm" type="primary">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import * as MUTATION_TYPES from '@/store/mutation-types';
import { PROCESS_TYPES } from '@@/constants/index';

export default {
    data() {
        return {
            icons: ['home', 'order', 'product', 'basic', 'items', 'inventory', 'statistics', 'financial', 'event', 'contract', 'supplier'],
            newModalVisible: false,
            processTypes: PROCESS_TYPES,
            selectedKey: 1 // 选择的流程类型
        };
    },
    computed: {
        ...mapState({
            active: 'sidebarActive',
            menus: 'menus'
        }),
        displayPage() {
            let path = this.$route.path;
            if (this.$route.path.match(/^\/app\/process\//)) {
                path = 'blank';
            }
            return path;
            
        }
    },
    methods: {
        toggle() {
            this.$store.commit(MUTATION_TYPES.TOGGLE_SIDEBAR);
        },
        goto(path) {
            this.$router.push({ path });
        },
        newProcess(key) {
            let routerName = this.processTypes[key-1].routerName;
            this.$router.push({ name: routerName });
        },
        close() {
            this.newModalVisible = false;
        },
        confirm() {
            this.newModalVisible = false;
            this.newProcess(this.selectedKey);
        }
    }
};
</script>

<style scoped lang="scss">
@import "~@/style/mixins/index.scss";
@import "~@/style/define";

@include b(sidebar) {
    border-right: solid 1px #e6e6e6;
}

@include b(sidebar-new) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    font-weight: 500;
    color: white;
    font-size: 16px;
    @include e(button) {
        height: 44px;
        line-height: 44px;
        text-align: center;
        background-color: $theme-color;
        border-radius: 2px;
        cursor: pointer;
    }
}

@include b(sidebar-toggle) {    
    display: flex;
    position: absolute;
    top: 50%;
    left: 180px;
    width: 10px;
    height: 50px;
    font-size: 10px;
    margin-top: -60px;
    z-index: 10;
    align-items: center;
    background: #C2C9D0;
    color: #fff;
    cursor: pointer;
    @include m(active) {
        left: 0;
    }
}
@include b(sidebar-dialog) {
    display: flex;
    flex-wrap: wrap;
    height: 60px;
    li {
        flex: 0 1 50%;
    }
}
.el-submenu__title {
    font-size: 14px;
    span {
        margin-left: 10px;
    }
}
</style>
