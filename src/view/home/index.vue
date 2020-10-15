<template>
    <div class="home">
      <div class="home-data">
        <div class="home-data-day-batch">
          <div class="home-data-header">
            <div class="home-data-header-title">当天批次数量</div>
            <div class="home-data-header-day-batch-number">72批</div>
          </div>
          <div class="home-data-content">
            <HomeShowChart :data="[11,12,5,10,27,37,23,14,15]" :color="[{offset: 0, color: 'rgb(184, 118, 235)'}, {offset: 1, color: 'rgb(200, 184, 249)'}]" :style="{width: '165px', height: '42px'}"/>
            <div>
              <p class="home-data-content-rate">42%</p>
              <p class="home-data-content-words">相比上月变化</p>
            </div>
          </div>
        </div>
        <div class="home-data-day-warn">
          <div class="home-data-header">
            <div class="home-data-header-title">当前预警次数</div>
            <div class="home-data-header-day-warn-number">30次</div>
          </div>
          <div class="home-data-content">
            <HomeShowChart :data="[11,12,5,10,27,37,23]" :color="[{offset: 0, color: 'rgb(0, 201, 255)'}, {offset: 1, color: 'rgb(155, 254, 165)'}]" />
            <div>
              <p class="home-data-content-rate">42%</p>
              <p class="home-data-content-words">相比上月变化</p>
            </div>
          </div>
        </div>
        <div class="home-data-month-batch">
          <div class="home-data-header">
            <div class="home-data-header-title">本月批次数量</div>
            <div class="home-data-header-month-batch-number">890批</div>
          </div>
          <div class="home-data-content">
            <HomeShowChart :data="[11,12,5,10,27,37,23]" :color="[{offset: 0, color: 'rgb(115, 174, 234)'}, {offset: 1, color: 'rgb(165, 209, 253)'}]" />
            <div>
              <p class="home-data-content-rate">42%</p>
              <p class="home-data-content-words">相比上月变化</p>
            </div>
          </div>
        </div>
        <div class="home-data-month-warn">
          <div class="home-data-header">
            <div class="home-data-header-title">本月预警次数</div>
            <div class="home-data-header-month-warn-number">712次</div>
          </div>
          <div class="home-data-content">
            <HomeShowChart :data="[11,12,5,10,27,37,23]" :color="[{offset: 0, color: 'rgb(248, 141, 156)'}, {offset: 1, color: 'rgb(244, 180, 252)'}]" />
            <div>
              <p class="home-data-content-rate">42%</p>
              <p class="home-data-content-words">相比上月变化</p>
            </div>
          </div>
        </div>
      </div>
      <div class="home-show">
        <div class="home-show-basic-data">
          <div class="home-show-header">
            <div class="home-show-header-title">基本信息</div>
            <div class="home-show-header-button"><img :src="require('@/assets/images/main/button.png')" alt=""></div>
          </div>
          <div class="home-show-content">
            <img src="" alt="" class="home-show-basic-data-picture">
          </div>
        </div>
        <div class="home-show-statistics">
          <div class="home-show-header">
            <div class="home-show-header-title">年度统计</div>
            <div class="home-show-header-button"><img :src="require('@/assets/images/main/button.png')" alt=""></div>
          </div>
          <div class="home-show-content">
            <YearChart style="height: 500px; width: 753px" :data="[[47, 35, 62, 36, 43, 82, 51],[29, 27, 48, 26, 33, 73, 51],[47, 35, 62, 36, 43, 82, 51]]"/>
          </div>
        </div>
        <div class="home-show-weather">
          <div class="home-show-header">
            <div class="home-show-header-title">环境监测</div>
            <div class="home-show-header-button"><img :src="require('@/assets/images/main/button.png')" alt=""></div>
          </div>
          <div class="home-show-content home-show-weather-content">
            <div class="home-show-weather-data">
              <img :src="require('@/assets/images/main/weather/sun.png')" alt="" class="home-show-weather-data-img">
              <div class="home-show-weather-data-words">
                <div class="home-show-weather-data-words-number">23℃</div>
                <div class="home-show-weather-data-place">ESHHS盘锦</div>
              </div>
            </div>
            <div class="home-show-weather-date">
              <div class="home-show-weather-date-alldate">
                <p class="home-show-weather-date-title">日期</p>
                <p class="home-show-weather-date-value">2020/8/28</p>
              </div>
              <div class="home-show-weather-date-day">
                <p class="home-show-weather-date-title">周期</p>
                <p class="home-show-weather-date-value">星期四</p>
              </div>
              <div class="home-show-weather-date-speed">
                <p class="home-show-weather-date-title">风速</p>
                <p class="home-show-weather-date-value">微风</p>
              </div>
            </div>
          </div>
          <WeatherChart/>
        </div>
      </div>
    </div>
</template>
<script>
import HomeShowChart from './components/HomeShowChart'
import YearChart from './components/YaerChart'
import WeatherChart from './components/weatherChart'
export default {
  name: 'Main',
  components: {
    HomeShowChart,
    YearChart,
    WeatherChart
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
