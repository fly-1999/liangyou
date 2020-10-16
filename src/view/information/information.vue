<template>
  <div class="information">
    <div class="information-head">
      <div v-show="showedit">
        <img @click="editshow" v-if="edited" src="../../assets/images/information/information-edit1.png"/>
        <img v-else src="../../assets/images/information/information-edit2.png"/>
      </div>
      <div :class="[item.path===prepath?'information-clicked':'']" v-for="(item,index) in tab" @click="shows(item.path)">{{item.name}}</div>
    </div>
    <!--information二级路由-->
    <keep-alive><router-view/></keep-alive>

  </div>
</template>

<script>
  export default {
    name: "information",
    data(){
      return{
        // tab的内容
        tab:[
          {name:'基地信息',path:'/information/information-message'},
          {name:'供应链信息',path:'/information/information-offer'},
          {name:'子系统设置',path:'/information/information-son'},

        ],
        //点击的路径，默认为home
        prepath:'/information/information-message',
        //编辑
        edited:true,
        showedit:true
      }
      },
    methods:{
      //点击切换路由
      shows(path){
        this.$router.push(path)
        this.prepath=path
        this.edited=true
        if(this.prepath==='/information/information-offer'){
          this.showedit=false
        }else {
          this.showedit=true
        }

      },
      editshow() {
        this.$router.push('/information/information-edit')
        this.edited = false
        this.prepath = ''
      }

    }
  }
</script>

<style lang="less" scoped>
  @import "./information.less";
</style>
