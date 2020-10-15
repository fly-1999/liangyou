<template>
  <div class="home-show-chart" ref="chart" :style="{width: '165px', height: '42px'}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    data: Array,
    color: Array
  },
  mounted () {
    var myChart = echarts.init(this.$refs.chart)
    myChart.setOption({
      xAxis: {
        show: false,
        data: this.data.map((item,index) => `${index}`),
        boundaryGap: false,
        min: 'dataMin',
        max: 'dataMax'
      },
      grid: {
        left: 0,
        right: 0,
        top: 1,
        bottom: 1
      },
      yAxis: {
        show: false,
        type: 'value',
        boundaryGap: false,
        min: 'dataMin',
        max: 'dataMax'
      },
      series: {
        type: 'line',
        smooth: true,
        data: this.data,
        clip: false,
        symbol: 'none',
        sampling: 'average',
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: this.color
          }
        }
      }
    })
  }
}
</script>
