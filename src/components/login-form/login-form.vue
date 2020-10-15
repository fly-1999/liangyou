<template>
  <div class="login_from">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" @keydown.enter.native="handleSubmit">
      <FormItem prop="identity">
        <Select v-model="formValidate.identity" size="large" placeholder="请选择用户名类型" @on-change="obtainValue" >
          <Option v-for="(item,key)  in identityList" :value="item.id+''" :key="key">{{ item.desc }}</Option>
        </Select>
      </FormItem>
      <FormItem prop="variety" v-if="formValidate.identity == 1">
        <Select v-model="formValidate.variety" placeholder="Select your city" size="large">
          <Option v-for="(item,key)  in varietyList" :value="item.id+''" :key="key">{{ item.desc }}</Option>
        </Select>
      </FormItem>
        <FormItem prop="username">
          <Input v-model="formValidate.username" placeholder="请输入用户名"/>
        </FormItem>

      <FormItem prop="password">
        <Input type="password" v-model="formValidate.password" placeholder="请输入密码"/>
      </FormItem>
      <FormItem>
        <Button @click="handleSubmit" type="primary" long shape="circle" size="large" style="height: 42px">登录</Button>
      </FormItem>
    </Form>
    <div class="remPassword"><i></i> <Checkbox v-model="single">记住密码</Checkbox></div>
  </div>


</template>
<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      formValidate: {
        username: 'enterprise',//enterprise
        password: 'password',//password
        identity:'',
        variety: '',
      },
      ruleValidate: {
        username: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        identity: [
          { required: true, message: 'Please select the city', trigger: 'change' }
        ],
        variety: [
          { required: true, message: 'Please select the city', trigger: 'change' }
        ],
      },


      identityList: [],
      varietyList: [],
      single: false
    }
  },
  computed: {
  },
  mounted() {
    this.roles();

  },
  methods: {
    obtainValue(e) {
      console.log(e)
      if(e == 1){
        this.variety();
      }else {
        this.formValidate.variety = ''
      }
    },
    //用户类型下拉
    roles() {
      this.$api.login.roles().then((res) => {
        console.log(res,'roles()')
        this.identityList = res
      });
    },
    //企业种类下拉
    variety() {
      this.$api.login.variety().then((res) => {
        this.varietyList = res
      });
    },
    login() {
      this.$api.login.login(this.formValidate).then((res) => {
        console.log(res,'getRoles()getRoles()')
        if(res){
          this.$router.push({name: 'home'});
        }
      });
    },

    handleSubmit () {
      console.log(this.formValidate,this.single)
      this.$refs.formValidate.validate((valid) => {
        if (valid) {
          // this.$emit('on-success-valid', {
          //   username: this.form.username,
          //   password: this.form.password,
          //   identity: this.identity,
          // })
          if(this.single) {
            console.log('记住密码')
            localStorage.setItem("rem_Password", this.form);
          }
         this.login()

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
