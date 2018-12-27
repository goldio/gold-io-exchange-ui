$(document).ready(function() {
    var bottomLabelPos = 0;
    var volumeTop = 275;
    var granularity;
    var endDate = moment();
    var endDateStr = endDate.format(moment.HTML5_FMT.DATE);
    var startDate;
    var startDateStr;

    if (document.body.clientWidth >= 4880) {
        bottomLabelPos = -40;
        granularity = 3600;
        startDate = endDate.subtract(9, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 4340) {
        bottomLabelPos = -40;
        granularity = 3600;
        startDate = endDate.subtract(8, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 3780) {
        granularity = 3600;
        startDate = endDate.subtract(7, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 3140) {
        bottomLabelPos = -40;
        granularity = 3600;
        startDate = endDate.subtract(6, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 2800) {
        bottomLabelPos = -40;
        granularity = 3600;
        startDate = endDate.subtract(5, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 2340) {
        bottomLabelPos = -40;
        granularity = 3600;
        startDate = endDate.subtract(4, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 1780) {
        bottomLabelPos = -40;
        granularity = 900;
        startDate = endDate.subtract(3, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 1600) {
        bottomLabelPos = -40;
        granularity = 900;
        startDate = endDate.subtract(2, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 1400) {
        bottomLabelPos = -45;
        granularity = 900;
        startDate = endDate.subtract(2, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 1281) {
        bottomLabelPos = -90;
        volumeTop = 225;
        granularity = 3600;
        startDate = endDate.subtract(1, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 1101) {
        bottomLabelPos = -75;
        volumeTop = 225;
        granularity = 900;
        startDate = endDate.subtract(2, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 1024) {
        bottomLabelPos = -75;
        granularity = 900;
        startDate = endDate.subtract(2, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 820) {
        bottomLabelPos = -75;
        granularity = 900;
        startDate = endDate.subtract(2, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 601) {
        bottomLabelPos = -75;
        granularity = 300;
        startDate = endDate.subtract(1, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 500) {
        bottomLabelPos = -50;
        granularity = 900;
        startDate = endDate.subtract(2, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    } else if (document.body.clientWidth >= 300) {
        bottomLabelPos = -50;
        granularity = 900;
        startDate = endDate.subtract(1, 'day');
        startDateStr = startDate.format(moment.HTML5_FMT.DATE);
    }

    $.getJSON('https://api.gdax.com/products/btc-usd/candles?start=' + startDateStr + '&end=' + endDateStr + '&granularity=' + granularity, function(data) {
        //console.log(data);
        console.log(data);
        // split the data set into ohlc and volume
        data = data.reverse();
        var ohlc = [],
            volume = [],
            dataLength = data.length,

            // set the allowed units for data grouping
            groupingUnits = [
                [
                    'hour', // unit name
                    [1, 2] // allowed multiples
                ],
                [
                    'day', [1, 2, 3, 4, 6]
                ]
            ],

            i = 0;
        var nowDate = new Date();

        for (i; i < dataLength; i += 1) {
            ohlc.push([
                data[i][0] * 1000, // the date
                data[i][3], // open
                data[i][2], // high
                data[i][1], // low
                data[i][4] // close
            ]);
            volume.push([
                data[i][0] * 1000, // the date
                data[i][5] // the volume
            ]);
        }

        var mouseOver = false;

        // create the chart
        var chart = Highcharts.stockChart('price-chart-box', {
            chart: {
                spacingTop: 0,
                marginLeft: 0,
                marginRight: 52,
                marginBottom: 0,
            },
            rangeSelector: {
                buttons: [{
                    type: 'hour',
                    count: 5,
                    text: '5h'
                }, {
                    type: 'month',
                    count: 2,
                    text: '2m'
                }, {
                    type: 'all',
                    count: 1,
                    text: 'All'
                }],
                selected: 1
            },
            title: {
                text: ''
            },
            plotOptions: {
                series: {
                    lineWidth: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineWidth: 5
                        }
                    },
                    events: {
                        mouseOver: function() {
                            mouseOver = true;
                            // if (this.chart.lbl) {
                            //     this.chart.lbl.hide();
                            // }
                        },
                        mouseOut: function() {
                            //
                        }
                    }
                }
            },
            xAxis: [{
                labels: {
                    style: {
                        color: '#fff'
                    },
                    y: bottomLabelPos
                },
            }],
            yAxis: [{
                labels: {
                    align: 'right',
                    style: {
                        color: '#fff'
                    },
                    useHTML: true,
                    formatter: function() {
                        var label = this.axis.defaultLabelFormatter.call(this);

                        return label.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
                    },
                    format: '<span style="font-family: Helvetica Neue">${value}</span>',
                    x: 50
                },
                title: {
                    text: ''
                },
                height: 300,
                top: 0,
                max: 14500,
                lineWidth: 2,
                resize: {
                    enabled: true
                }
            }, {
                labels: {
                    align: 'left',
                    style: {
                        color: '#fff'
                    },
                    x: 30,
                    enabled: false,
                },
                title: {
                    text: ''
                },
                height: 75,
                top: volumeTop,
                visible: false,
                resize: {
                    enabled: true
                }
            }],
            tooltip: {
                split: true,
                enable: false,
            },
            series: [{
                type: 'candlestick',
                name: 'BTC',
                data: ohlc,
                zIndex: 3,
                pointWidth: 8,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                type: 'column',
                name: 'Volume',
                data: volume,
                yAxis: 1,
                zIndex: 2,
                pointWidth: 6,
                dataGrouping: {
                    units: groupingUnits
                }
            }]
        });

        function updatePaddingChart(e) {
            if (document.body.clientWidth > 1100) {
                chart.update({
                    chart: {
                        marginRight: 52
                    }
                });
            } else if (document.body.clientWidth < 599) {
                chart.update({
                    chart: {
                        marginRight: 52
                    }
                });
            }
        }
        updatePaddingChart();

        $(window).on('resize', updatePaddingChart);

        $('ul.tabs3').delegate('li:not(.current)', 'click', function() {
            chart.reflow();
        });

        $('#price-chart-box').append('<div class="tooltip_price"></div>');

        var lastMove = 0;
        var timeMove = Date.now();
        var tooltipBlock = $(".tooltip_price")[0];
        var y;
        var yVal;
        $('#price-chart-box').bind('mousemove', function(e) {
            timeMove = Date.now();
            if (timeMove - lastMove > 35) {
                lastMove = timeMove;

                e = chart.pointer.normalize(e);
                //var x = e.chartX - chart.plotLeft;
                y = e.chartY - chart.plotTop;
                //var xVal = chart.xAxis[0].toValue(e.chartX);
                yVal = chart.yAxis[0].toValue(e.chartY);
                tooltipBlock.textContent = '$ ' + Math.ceil(yVal);
                tooltipBlock.style.top = y + 70 + 'px';
                // $("#is-inside").text(chart.isInsidePlot(e.chartX - chart.plotLeft, e.chartY - chart.plotTop));
            }
        });
    });
});