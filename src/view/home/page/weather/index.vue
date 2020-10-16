<template>
  <div class="weather">
    <div class="weather-header">
      <div class="weather-header-title">未来七日的环境监测</div>
      <Button to="/home" type="primary" ghost :class="'weather-header-button'">返回</Button>
    </div>
    <div class="weather-content">
      <div class="weather-content-now">
        <img :src="require('@/assets/images/main/weather/100.png')" alt="" class="weather-content-now-img">
        <p class="weather-content-now-place">盘锦</p>
        <div class="weather-content-now-date">
          <div class="weather-content-now-date-alldate">
            <p class="weather-content-now-date-title">日期</p>
            <p class="weather-content-now-date-value">2020/09/28</p>
          </div>
          <div class="weather-content-now-date-day">
            <p class="weather-content-now-date-title">周期</p>
            <p class="weather-content-now-date-value">星期三</p>
          </div>
          <div class="weather-content-now-date-speed">
            <p class="weather-content-now-date-title">风速</p>
            <p class="weather-content-now-date-value">微风</p>
          </div>
        </div>
      </div>
      <div class="weather-content-other">
        <div class="weather-content-7item"></div>
        <div class="weather-content-data">
          <div class="weather-content-table"></div>
          <div class="weather-content-7d-chart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>