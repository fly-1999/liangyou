<template>
  <div ref='chart' style="height: 217px; width: 100%"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  mounted () {
    var myChart = echarts.init(this.$refs.chart)
    myChart.setOption({
      xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: '#999999',
          fontFamily: 'Adobe Heiti Std R',
          fontSize: 12
        }
      },
      yAxis: {
        type: 'value',
        min: 1,
        max: 6,
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
          smooth: true,
          data: [4, 2, 3, 6, 5, 3, 2],
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
          smooth: true,
          data: [3, 1, 2, 5, 3, 4, 1],
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
  }
}
</script>
