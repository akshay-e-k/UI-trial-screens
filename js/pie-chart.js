$(document).ready(function() {
    $(function() {
        // Create the chart
        addLabel = function(point) {
            $('.cLabel').remove();
            var text = point.name+"<br/><br/>"+point.y,
            chart = point.series.chart,
            renderer = chart.renderer;
            chart.renderer.label(text, chart.chartWidth / 2, chart.chartHeight / 2.3).attr({
            'text-anchor': 'middle',
            }).addClass('cLabel').add();
            $('.cLabel').css({fontSize: "15px", fontWeight: 900});
        };
        chart = new Highcharts.Chart({
            chart: {
            renderTo: 'popularJobsCont',
            type: 'pie',
            events: {
                redraw: function() {
                var chart = this;
                $('.cLabel').attr({
                    transform: 'translate(' + chart.chartWidth / 2 + ',' + chart.chartHeight / 2 + ')'
                })
                }
            }
            },
            title: {
            text: ''
            },
            legend: {
                y: 15,
                floating: true,
                itemDistance: 2,
                itemStyle: {
                    color: '#000',
                    fontWeight: 'bold'
                },
                useHTML: true
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    shadow: false,
                    borderColor: "#000000",
                    borderWidth: 0.6,
                    point: {
                        enabled: false
                    }
                },
                series: {
                    point: {
                    events: {
                        click: function() {
                        addLabel(this)
                        }
                    }
                    }
                },
                showCheckbox: true
            },
            tooltip: {
            formatter: function() {
                return '<b>' + this.point.name + '</b>';
            }
            },
            series: [{
            data: [{
                name: 'ReactJS Developer',
                y: 8,
                color: "#3c8dbc"
            }, {
                name: 'JavaScript Developer',
                y: 10,
                color: "#39cccc"
            }, {
                name: 'NodeJS Developer',
                y: 5,
                color: "#00a65a"
            }],
            size: '100%',
            innerSize: '75%',
            showInLegend: true,
            dataLabels: {
                enabled: false
            }
            }]
        }, function (chart) {
                Highcharts.each(chart.legend.allItems, function (p, i) {
                $(p.checkbox).change(
                    function () {
                    if (this.checked) {
                        chart.legend.allItems[i].show();
                    } else {
                        chart.legend.allItems[i].hide();
                    }
                    });
                });
            });
        });    
});