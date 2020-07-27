$(document).ready(function() {
    Highcharts.chart('topCandidatesCont', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        legend: {
            verticalAlign: 'top',
            itemDistance: 2,
            itemStyle: {
                color: '#848484',
                fontWeight: 'bold',
            },
            useHTML: true
        },
        xAxis: {
            categories: [
                'Mahima Khan',
                'Victoria Joseph',
                'Ali Moeen',
                'Virat Anand',
                'Fredrick John'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                color: '#00c0ef'
            }
        },
        series: [
            {
                data: [44, 44, 47, 0, 40],
                name: 'Result',
                marker: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                }
            }
        ]
    });
});