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
              <img :src="require(`@/assets/images/main/weather/${weatherData.weatherNow.icon}.png`)" alt="" class="home-show-weather-data-img">
              <div class="home-show-weather-data-words">
                <div class="home-show-weather-data-words-number">{{weatherData.weatherNow.temp}}℃</div>
                <div class="home-show-weather-data-words-place">{{place}}</div>
              </div>
            </div>
            <div class="home-show-weather-date">
              <div class="home-show-weather-date-alldate">
                <p class="home-show-weather-date-title">日期</p>
                <p class="home-show-weather-date-value">{{weatherData.weatherNow.time}}</p>
              </div>
              <div class="home-show-weather-date-day">
                <p class="home-show-weather-date-title">周期</p>
                <p class="home-show-weather-date-value">{{weatherData.weatherNow.day}}</p>
              </div>
              <div class="home-show-weather-date-speed">
                <p class="home-show-weather-date-title">风速</p>
                <p class="home-show-weather-date-value">{{weatherData.weatherNow.windScale}}</p>
              </div>
            </div>
          </div>
          <WeatherChart :weather="dailyTemp"/>
        </div>
      </div>
    </div>
</template>
<script>
import HomeShowChart from './components/HomeShowChart'
import YearChart from './components/YaerChart'
import WeatherChart from './components/weatherChart'
import {weather} from '@/api/weather/weather.js'
export default {
  name: 'Main',
  components: {
    HomeShowChart,
    YearChart,
    WeatherChart
  },
  data () {
    return {
      place: '盘锦',
      weatherData: {
        weatherNow: {},
        weather7d: []
      }
    }
  },
  computed: {
    dailyTemp() {
      if(this.weatherData.weather7d.length === 0) {
        return {}
      }
      let result = {}
      let maxArr = []
      let minArr = []
      let weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
      let day = new Date(this.weatherData.weather7d[0].fxDate).getDay()
      result.day = [...weeks.slice(day) , ...weeks.slice(0, day)]
      this.weatherData.weather7d.forEach(item => {
        maxArr.push(item.tempMax)
        minArr.push(item.tempMin)
      })
      result.data = [maxArr, minArr]
      return result
    }
  },
  created() {
    weather.getWeatherNowByName({name: this.place}).then(res => {
      let weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
      res.now.time = res.now.obsTime.slice(0, 10)
      res.now.day = weeks[new Date(res.now.time).getDay()]
      if(res.now.windScale === 0) {
        res.now.windScale = '无风'
      }else if(res.now.windScale > 0 && res.now.windScale < 4) {
        res.now.windScale = '微风'
      }else if(res.now.windScale >= 4 && res.now.windScale <= 5) {
        res.now.windScale = '清风'
      }else {
        res.now.windScale = '强风'
      }
      this.weatherData.weatherNow = res.now
    }).catch(err => {
      console.log(err)
    })
    weather.getWeather7dByName({name: this.place}).then(res => {
      this.weatherData.weather7d = res.daily.map(item => ({
        fxDate: item.fxDate,
        tempMax: item.tempMax,
        tempMin: item.tempMin,
        windScaleDay: item.windScaleDay,
        humidity: item.humidity
      }))
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {}
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
