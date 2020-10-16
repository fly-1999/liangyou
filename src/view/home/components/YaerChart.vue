<template>
  <div ref='chart' style="height: 100%; width: 100%"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    data: Array
  },
  mounted () {
    var myChart = echarts.init(this.$refs.chart)
    myChart.setOption({
      xAxis: {
        data: this.data[0].map((item,index) => `${index}`),
        axisLabel: { show: false },
        axisLine: {
          lineStyle: {
            color: '#C0C4C9'
          }
        },
        axisTick: { show: false }
      },
      grid: {
        left: 0,
        right: 0,
        top: 100,
        bottom: 10,
        containLabel: true
      },
      yAxis: [
        {
          name: '销售额',
          type: 'value',
          min: 0,
          max: function (value) {
            console.log(value)
            return Math.ceil(value.max/10) * 10;
          },
          splitNumber: 10,
          boundaryGap: ['40px', '40px'],
          axisLabel: {
            formatter: '{value}￥',
            color: '#999999',
            fontSize: 18,
            fontFamily: 'Adobe Heiti Std R'
          },
          nameTextStyle: {
            color: '#999999',
            fontSize: 18,
            fontFamily: 'Adobe Heiti Std R'
          },
          axisLine: {
            lineStyle: {
              color: '#C0C4C9'
            }
          },
          axisTick: { show: false }
        },
        {
          name: '扫码次数',
          type: 'value',
          min: 0,
          max: function (value) {
            console.log(value)
            return Math.ceil(value.max/10) * 10;
          },
          splitNumber: 10,
          boundaryGap: ['40px', '40px'],
          axisLabel: {
            formatter: '{value}次',
            color: '#999999',
            fontSize: 18,
            fontFamily: 'Adobe Heiti Std R'
          },
          nameTextStyle: {
            color: '#999999',
            fontSize: 18,
            fontFamily: 'Adobe Heiti Std R'
          },
          axisLine: {
            lineStyle: {
              color: '#C0C4C9'
            }
          },
          axisTick: { show: false }
        }
      ],
      legend: {
        top: 0,
        left: 20,
        itemWidth: 32,
        itemHeight: 14,
        icon: 'roundRect',
        selectedMode: false,
        textStyle: {
          color: '#999999',
          fontFamily: 'Adobe Heiti Std R',
          fontSize: 20
        }
      },
      series: [
        {
          name: '批次',
          type: 'bar',
          barWidth: 13,
          data: this.data[0],
          yAxisIndex: 0,
          clip: false,
          label: {
            show: true,
            position: 'top',
            fontSize: 15,
            color: '#999999',
            fontFamily: 'Adobe Heiti Std R'
          },
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{ offset: 1, color: 'rgb(157, 123, 247)' }, { offset: 0, color: 'rgb(199, 179, 252)' }]
            }
          }
        },
        {
          name: '预警次数',
          type: 'bar',
          barWidth: 13,
          data: this.data[1],
          yAxisIndex: 1,
          clip: false,
          label: {
            show: true,
            position: 'top',
            fontSize: 15,
            color: '#999999',
            fontFamily: 'Adobe Heiti Std R'
          },
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{ offset: 1, color: 'rgb(0, 201, 255)' }, { offset: 0, color: 'rgb(155, 254, 165)' }]
            }
          }
        },
        {
          name: '溯源次数',
          type: 'line',
          data: this.data[2],
          yAxisIndex: 1,
          symbol: 'none',
          lineStyle: {
            color: '#1E88E5'
          },
          itemStyle: {
            color: '#1E88E5'
          }
        }
      ]
    })
  }
}
</script>
