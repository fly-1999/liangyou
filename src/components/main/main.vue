<template>
    <Layout style="height: 100%" class="main">
        <Sider
            hide-trigger
            collapsible
            :width="154"
            :collapsed-width="64"
            v-model="collapsed"
            class="left-sider"
            :style="{ overflow: 'hidden' }"
        >
            <side-menu
                ref="sideMenu"
                :active-name="$route.name"
                :collapsed="collapsed"
                @on-select="turnToPage"
                :menu-list="menuList"
            >
                <div class="logo-con"></div>
            </side-menu>
        </Sider>
        <Layout>
            <Header class="header-con">
                <header-bar
                    :collapsed="collapsed"
                    @on-coll-change="handleCollapsedChange"
                >
                    <!-- <fullscreen
                        v-model="isFullscreen"
                        style="margin-right: 10px;"
                    /> -->
                    <Icon
                        type="md-power"
                        size="32"
                        style="line-height:80px;cursor: pointer;"
                        @click="goOut"
                    />
                </header-bar>
            </Header>
            <div class="content">
                <router-view />
            </div>
        </Layout>
    </Layout>
</template>
<script>
import SideMenu from "./components/side-menu";
import HeaderBar from "./components/header-bar";
import User from "./components/user";
import Fullscreen from "./components/fullscreen";
import { mapMutations, mapActions, mapGetters } from "vuex";
import { getNewTagList } from "@/libs/util";
import routers from "@/router/routers";
import "./main.less";
export default {
    name: "Main",
    components: {
        SideMenu,
        HeaderBar,
        Fullscreen,
        User
    },
    data() {
        return {
            collapsed: false,
            isFullscreen: false
        };
    },
    computed: {
        ...mapGetters(["errorCount"]),
        tagNavList() {
            return this.$store.state.app.tagNavList;
        },
        tagRouter() {
            return this.$store.state.app.tagRouter;
        },
        userAvatar() {
            return this.$store.state.user.avatarImgPath;
        },
        cacheList() {
            const list = [
                "ParentView",
                ...(this.tagNavList.length
                    ? this.tagNavList
                          .filter(item => !(item.meta && item.meta.notCache))
                          .map(item => item.name)
                    : [])
            ];
            return list;
        },
        menuList() {
            return this.$store.getters.menuList;
        },
        local() {
            return this.$store.state.app.local;
        },
        hasReadErrorPage() {
            return this.$store.state.app.hasReadErrorPage;
        },
        unreadCount() {
            return this.$store.state.user.unreadCount;
        }
    },
    methods: {
        ...mapMutations(["setTagNavList", "setHomeRoute", "closeTag"]),
        ...mapActions(["handleLogin", "getUnreadMessageCount"]),
        turnToPage(route) {
            let { name, params, query } = {};
            if (typeof route === "string") name = route;
            else {
                name = route.name;
                params = route.params;
                query = route.query;
            }
            if (name.indexOf("isTurnByHref_") > -1) {
                window.open(name.split("_")[1]);
                return;
            }
            this.$router.push({
                name,
                params,
                query
            });
        },
        handleCollapsedChange(state) {
            this.collapsed = state;
        },
        goOut() {
            // this.$Modal.info({
            //     title: "",
            //     content: "退出登录"
            // });
            this.$router.push("/login");
        }
    },
    watch: {
        $route(newRoute) {
            const { name, query, params, meta } = newRoute;
            this.setTagNavList(getNewTagList(this.tagNavList, newRoute));
            this.$refs.sideMenu.updateOpenName(newRoute.name);
        }
    },
    mounted() {
        /**
         * @description 初始化设置面包屑导航和标签导航
         */
        this.setTagNavList();
        this.setHomeRoute(routers);
        const { name, params, query, meta } = this.$route;

        // 设置初始语言
        // 如果当前打开页面不在标签栏中，跳到homeName页
        if (!this.tagNavList.find(item => item.name === this.$route.name)) {
            this.$router.push({
                name: this.$config.homeName
            });
        }
    }
};
</script>
