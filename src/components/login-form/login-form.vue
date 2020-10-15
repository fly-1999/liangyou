<template>
  <div class="login_from">
    <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
      <FormItem prop="identity">
        <i-select :model="form.identity" size="large" placeholder="请选择用户名类型" @on-change="obtainValue()">
          <i-option v-for="(item,key) in identityList"  :key="key" :value="item.id">{{ item.desc }}</i-option>
        </i-select>
        </Input>
      </FormItem>
      <!--<FormItem prop="variety">-->
        <!--<i-select :model="form.variety" size="large" placeholder="请选择种类" >-->
          <!--<i-option v-for="(item,key) in identityList"  :key="key" :value="item.id">{{ item.desc }}</i-option>-->
        <!--</i-select>-->
        <!--</Input>-->
      <!--</FormItem>-->
        <FormItem prop="username">
          <Input v-model="form.username" placeholder="请输入用户名">
        </span>
          </Input>
        </FormItem>

      <FormItem prop="password">
        <Input type="password" v-model="form.password" placeholder="请输入密码">
        </Input>
      </FormItem>
      <FormItem>
        <Button @click="handleSubmit" type="primary" long shape="circle" size="large" style="height: 42px">登录</Button>
      </FormItem>
    </Form>
    <div class="remPassword"><i></i> <Checkbox :checked.sync="single">记住密码</Checkbox></div>
  </div>

  <!--<div>-->
    <!--2222-->
  <!--</div>-->


</template>
<script>
export default {
  name: 'LoginForm',
  props: {
    identityRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '请选择用户类型', trigger: 'change' }
        ]
      }
    },
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        username: 'enterprise',
        password: 'password',
        identity:''
      },
      identityList: [],
      identity: '',
      single: false
    }
  },
  computed: {
    rules () {
      return {
        username: this.userNameRules,
        password: this.passwordRules,
        identity: this.identityRules
      }
    }
  },
  mounted() {
    this.roles();
  },
  methods: {
    obtainValue(e) {
      console.log(e)
    },
    //用户类型下拉
    roles() {
      this.$api.login.roles().then((res) => {
        console.log(res,'roles()')
        this.identityList = res
      });
    },
    login() {
      this.$api.login.login(this.form).then((res) => {
        console.log(res,'getRoles()getRoles()')
      });
    },

    handleSubmit () {
      console.log(this.form)
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', {
            username: this.form.username,
            password: this.form.password,
            identity: this.form.identity,
          })
         this.login()
          if(single) {
            console.log('记住密码')
            localStorage.setItem("rem_Password", this.form);
          }
        }
      })
    }
  }
}
</script>
<style lang="less">
  .login_from {
    .ivu-input {
      height: 42px;
      border-radius: 42px;
      padding-left: 30px;
      font-size: 14px;
    }
    .ivu-select {
      width: 100%;
    }
    .ivu-select-large.ivu-select-single .ivu-select-selection {
      height: 42px;
      border-radius: 42px;
    }
    .ivu-select-large.ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-large.ivu-select-single .ivu-select-selection .ivu-select-selected-value{
      height: 42px;
      line-height: 42px;
      padding-left: 30px;
    }
  }
  .remPassword {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: -30px;
    right: 0;
  }
</style>
