// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echartMain'));

var labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        label : {
            formatter : function (params){
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline : 'top'
            }
        }
    },
}
var labelBottom = {
    normal : {
        color: '#ccc',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
option = {
    series : [
        {
            type : 'pie',
            center : ['10%', '30%'],
            radius : [40, 55],
            x: '0%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:46, itemStyle : labelBottom},
                {name:'GoogleMaps', value:54,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['30%', '30%'],
            radius : [40, 55],
            x:'20%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:56, itemStyle : labelBottom},
                {name:'Facebook', value:44,itemStyle : labelTop}
            ]
        }, {
            type : 'pie',
            center : ['50%', '30%'],
            radius : [40, 55],
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:56, itemStyle : labelBottom},
                {name:'Facebook', value:44,itemStyle : labelTop}
            ]
        },
    ]
};              

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;