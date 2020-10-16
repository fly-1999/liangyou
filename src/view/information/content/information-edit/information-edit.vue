<template>
  <div class="information-edit">
    <!--标题-->
    <div>
      <span>标题:</span><input placeholder="请输入"/>
    </div>
    <!--简介-->
    <div>
      <span>简介:</span><textarea placeholder="请输入"/>
    </div>
    <!--经营范围-->
    <div>
      <span>经营范围:</span><textarea placeholder="请输入"/>
    </div>
    <!--图片上传-->
    <div>
      <span>图片上传:</span>
      <dl>
        <dt><img src="../../../../assets/images/information/information-add-image.png"></dt>
        <dd>0-3张</dd>
      </dl>
    </div>
    <!--确认-->
    <div>
      <span>取消</span>
      <span>确认</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "information-edit"
  }
</script>

<style lang="less" scoped>
  @import "./information-edit.less";
</style>
