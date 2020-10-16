<template>
  <div ref='chart' style="height: 217px; width: 100%"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  props:{
    weather: Object
  },
  data() {
    return({
      myChart: null
    })
  },
  methods: {
    setChart(data, dom = this.myChart) {
      if(this.weather.data && dom) {
        dom.hideLoading()
        dom.setOption({
          xAxis: {
            data: this.weather.day
          },
          series: [
            {data: this.weather.data[0]},
            {data: this.weather.data[1]}
          ]
        })
      }
    }
  },
  mounted () {
    var myChart = echarts.init(this.$refs.chart)
    myChart.showLoading()
    myChart.setOption({
      xAxis: {
        data: [],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: '#999999',
          fontFamily: 'Adobe Heiti Std R',
          fontSize: 12,
          interval: 0
        }
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: '#999999',
          fontFamily: 'Adobe Heiti Std R',
          fontSize: 15
        }
      },
      legend: {
        left: 5,
        top: 20,
        icon: 'circle',
        textStyle: {
          color: '#999999',
          fontFamily: 'Adobe Heiti Std R',
          fontSize: 14
        }
      },
      grid: {
        left: 18,
        right: 13,
        top: 70,
        bottom: 30,
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            type: 'dashed'
          }
        },
        formatter: '<span style="color: #1BBC9B">{c0}</span><br /><span style="color: #999">{c1}</span>',
        backgroundColor: '#fff'
      },
      series: [
        {
          name: '最高',
          type: 'line',
          data: [],
          smooth: true,
          showSymbol: false,
          itemStyle: {
            color: '#1BBC9B'
          },
          lineStyle: {
            color: '#1BBC9B',
            shadowColor: '#03D07130',
            shadowBlur: 10
          }
        },
        {
          name: '最低',
          type: 'line',
          data: [],
          smooth: true,
          symbol: 'none',
          itemStyle: {
            color: '#B69DFA'
          },
          lineStyle: {
            color: '#DBDFE5'
          }
        }
      ]
    })
    this.myChart = myChart
    this.setChart(this.weather, myChart)
  },
  watch: {
    weather() {
      this.setChart(this.weather)
    }
  }
}
</script>
