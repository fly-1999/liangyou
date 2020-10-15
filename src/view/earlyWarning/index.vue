<template>
    <div class="wrapper">
        <Tabs @on-click="handleFullscreen">
            <TabPane label="模型配置">
                <Module-config></Module-config>
            </TabPane>
            <TabPane label="云平台"> </TabPane>
        </Tabs>
    </div>
</template>

<script>
import ModuleConfig from "./component/module-config";
export default {
    name: "earlyWarning",
    components: { ModuleConfig },
    data() {
        return {
            type: ""
        };
    },
    methods: {
        handleFullscreen(v) {
            if (v === 0) return;
            // this.$router.push("/cloud-platform");
        }
    }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>