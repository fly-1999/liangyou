<template>
  <div class="information-offer">
    <!--供应链-->
    <div class="information-offer-line">
      <div>
        <span class="line-click">收购</span>
        <span>
              <img v-if="false" src="../../../../assets/images/information/information-arrow1.svg"/>
              <img v-else src="../../../../assets/images/information/information-arrow2.svg"/>
        </span>
      </div>
      <div>
        <span>收购</span>
        <span>
              <img v-if="true" src="../../../../assets/images/information/information-arrow1.svg"/>
              <img v-else src="../../../../assets/images/information/information-arrow2.svg"/>
        </span>
      </div>
      <div>
        <span>收购</span>
        <span>
              <img v-if="true" src="../../../../assets/images/information/information-arrow1.svg"/>
              <img v-else src="../../../../assets/images/information/information-arrow2.svg"/>
        </span>
      </div>
      <div>
        <span>收购</span>
        <span>
              <img v-if="true" src="../../../../assets/images/information/information-arrow1.svg"/>
              <img v-else src="../../../../assets/images/information/information-arrow2.svg"/>
        </span>
      </div>
      <div>
        <span>收购</span>
        <span>
              <img v-if="true" src="../../../../assets/images/information/information-arrow1.svg"/>
              <img v-else src="../../../../assets/images/information/information-arrow2.svg"/>
        </span>
      </div>
      <div>
        <span>收购</span>
        <span>
              <img v-if="true" src="../../../../assets/images/information/information-arrow1.svg"/>
              <img v-else src="../../../../assets/images/information/information-arrow2.svg"/>
        </span>
      </div>
      <div>
        <span>收购</span>
        <span>
              <img v-if="true" src="../../../../assets/images/information/information-arrow1.svg"/>
              <img v-else src="../../../../assets/images/information/information-arrow2.svg"/>
        </span>
      </div>
      <div>
        <span>收购</span>
      </div>
    </div>
    <!--批次-->
    <div class="information-offer-search">
      <div>
        <span>批次信息:</span>
        <input placeholder="请输入"/>
      </div>
      <span class="edit" @click="search_edit">编辑</span>
    </div>
    <!--表格-->
    <div class="information-offer-table">
      <table>
          <tr>
            <th>sdad </th>
            <th>
              <span v-if="searchedit">eeee</span>
              <input v-else placeholder="eeee" @blur="upperCase" @focus="onCase"/>
            </th>
          </tr>
        <tr>
          <th>sdad </th>
          <th>
            <span v-if="searchedit">eeee</span>
            <input v-else placeholder="eeee" @blur="upperCase" @focus="onCase"/>
          </th>
        </tr>
        <tr>
          <th>sdad </th>
          <th>
            <span v-if="searchedit">eeee</span>
            <input v-else placeholder="eeee" @blur="upperCase" @focus="onCase"/>
          </th>
        </tr>
        <tr>
          <th>sdad </th>
          <th>
            <span v-if="searchedit">eeee</span>
            <input v-else placeholder="eeee" @blur="upperCase" @focus="onCase"/>
          </th>
        </tr>
        <tr>
          <th>sdad </th>
          <th>
            <span v-if="searchedit">eeee</span>
            <input v-else placeholder="eeee" @blur="upperCase" @focus="onCase"/>
          </th>
        </tr>
        <tr>
          <th>sdad </th>
          <th>
            <span v-if="searchedit">eeee</span>
            <input v-else placeholder="eeee" @blur="upperCase" @focus="onCase"/>
          </th>
        </tr>
        <tr>
          <th>sdad </th>
          <th>
            <span v-if="searchedit">eeee</span>
            <input v-else placeholder="eeee" @blur="upperCase" @focus="onCase"/>
          </th>
        </tr>
        <tr>
          <th>sdad </th>
          <th>
            <span v-if="searchedit">eeee</span>
            <input v-else placeholder="eeee" @blur="upperCase" @focus="onCase"/>
          </th>
        </tr>
        <tr>
          <th>sdad </th>
          <th>
            <span v-if="searchedit">eeee</span>
            <input v-else placeholder="eeee" @blur="upperCase" @focus="onCase"/>
          </th>
        </tr>
        <tr>
          <th>sdad </th>
          <th>
            <span v-if="searchedit">eeee</span>
            <input v-else placeholder="eeee" @blur="upperCase" @focus="onCase"/>
          </th>
        </tr>
        <tr>
          <th>sdad </th>
          <th>
            <span v-if="searchedit">eeee</span>
            <input v-else placeholder="eeee" @blur="upperCase" @focus="onCase"/>
          </th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "information-offer",
    data(){
      return{
        searchedit:true,
        timer:''
      }
    },
    methods:{
      search_edit(){
        this.searchedit=!this.searchedit
      },
      //失去焦点
      upperCase(){
        this.timer= setTimeout(()=>this.searchedit=!this.searchedit, 1000);
      },
      //获取input焦点时，清除失去焦点时的定时器
      onCase(){
        clearTimeout(this.timer)
      }
    }

  }
</script>

<style lang="less" scoped>
  @import "./information-offer.less";
</style>
