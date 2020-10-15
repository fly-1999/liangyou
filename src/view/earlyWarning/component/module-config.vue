<template>
    <div class="moduleConfig">
        <div class="module-header">
            <div
                v-for="(data, index) in chooseTypeList"
                :key="index"
                class="type"
            >
                <span>{{ data }}</span>
            </div>
        </div>
        <div class="module-content">
            <!-- <Table :columns="columns" :data="dataList"></Table> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "moduleConfig",
    data() {
        return {
            chooseTypeList: [
                "预测加权配置",
                "危害物风险限制",
                "供应链环节权重"
            ],
            columns: [],
            dataList: []
        };
    },
    methods: {
        initRequest() {}
    },
    created() {
        this.initRequest();
    }
};
</script>

<style lang="less" scoped>
.moduleConfig {
    .module-header {
        .type {
            display: inline-block;
            font-size: 16px;
            margin: 0 20px 10px 10px;
            cursor: pointer;
        }
        .type:active {
            color: #1e88e5;
        }
        .type:hover {
            color: #1e88e5;
        }
    }
}
</style>