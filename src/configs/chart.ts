import type {ChartConfiguration, ChartData} from "chart.js";

export const getCurrentSummaryChart = (gradientBg: CanvasGradient) => {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

     const data: ChartData = {
        labels: labels,
        datasets: [{
            label: 'This month',
            data: [20010, 20020, 20032, 20033, 20035, 20012, 20018, 20021, 20035, 20027, 20012, 20000],
            fill: {
                target: 'origin',
                above: gradientBg
            },
            borderColor: '#7445FB',
            backgroundColor: gradientBg,
            borderCapStyle: 'round',
            borderWidth: 2,
            tension: 0.4,
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: 'rgba(0, 0, 0, 0)',
            pointHoverBackgroundColor: 'rgb(250, 250, 250)',
            pointHoverBorderColor: '#7445FB',
            hoverBorderWidth: 2
        },
            {
                label: 'Last Month',
                data: [20010, 20022, 20032, 20037, 20045, 20023, 20028, 20031, 20005, 20037, 20032, 20000],
                borderColor: 'rgba(133, 133, 133, 0.3)',
                backgroundColor: 'rgba(133, 133, 133, 0.3)',
                borderCapStyle: 'round',
                fill: false,
                borderDash: [4, 5],
                borderWidth: 2,
                tension: 0.4,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: 'rgb(250, 250, 250)',
                pointHoverBorderColor: 'rgba(133, 133, 133, 0.3)',
                hoverBorderWidth: 2
            }],
    };

    return getCurrentSummaryChartConfig(data);
}

const getCurrentSummaryChartConfig = (data: ChartData)=> {
    const config: ChartConfiguration = {
        type: 'line',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                filler: {
                    drawTime: 'beforeDatasetsDraw'
                }
            },
            hover: {
                intersect: false
            },
            responsive: true,
            scales: {
                y: {
                    display: true,
                    border: {
                        display: false,
                        dash: [1, 6],
                        dashOffset: 10
                    },
                    grid: {
                        drawTicks: false,
                        color: 'rgba(133, 133, 133, 0.64)',
                        lineWidth: 1,
                    },
                    ticks: {
                        padding: 18,
                    }
                },
                x: {
                    display: false
                }
            },
        }
    };

    return config;
}




export const getCryptoCurrencyChart = (chartData: Array<number>, color: any) => {
    const labels = [1, 2, 3, 4, 5, 6, 7];

    const data: ChartData = {
        labels: labels,
        datasets: [{
            label: '',
            data: chartData,
            borderColor: color,
            borderCapStyle: 'round',
            borderWidth: 2,
            tension: 0.4,
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: 'rgba(0, 0, 0, 0)',
            pointHoverBackgroundColor: 'rgb(250, 250, 250)',
            pointHoverBorderColor: color,
            hoverBorderWidth: 2
        }]
    }

    return getCryptoCurrencyChartConfig(data);
}

const getCryptoCurrencyChartConfig = (data: ChartData) => {
    const config: ChartConfiguration = {
        type: 'line',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            hover: {
                intersect: false
            },
            responsive: true,
            scales: {
                y: {
                    display: false
                    // display: true,
                    // border: {
                    //     display: false,
                    //     dash: [1, 6],
                    //     dashOffset: 10
                    // },
                    // grid: {
                    //     drawTicks: false,
                    // },
                    // ticks: {
                    //     padding: 18,
                    // }
                },
                x: {
                    display: false
                }
            },
        }
    };

    return config;
}