<style lang="less">
@import "./login.less";
</style>

<template>
    <div class="login">
      <div class="login_bj">
        <h1>粮油食品供应链危害物风险快速预警及防控系统</h1>
      </div>
        <div class="login-con">
            <Card icon="log-in" :bordered="false">
                <div class="form-con">
                    <login-form @on-success-valid="handleSubmit"></login-form>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import LoginForm from '_c/login-form'
export default {
  components: {
    LoginForm
  },
  methods: {
    handleSubmit ({ userName, password }) {
      this.$router.push({
        name: this.$config.homeName
      })
    }
  }
}
</script>

<style>
</style>
