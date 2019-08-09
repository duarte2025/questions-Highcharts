Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  xAxis: {
    type: "category",
    labels: {
      rotation: -45
    },
    title: {
      text: ""
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: "Dificuldade"
    }
  },
  tooltip: {
    pointFormat: '<tr><td style="color: {series.color}">Questão: </td>' +
      '<td style="text-align: right"><b>{point.id}</b></td></tr>',
    shared: true
  },

  series: [{
    type: "column",
    name: "Questões",
    data: [{
        "name": "172253",
        "id": "aaa",
        "y": 1888.81,
        "color": "#f00"
      },
      {
        "name": "903597",
        "id": "bbb",
        "y": 1848.26,
        "color": "#f00"
      },
      {
        "name": "903608",
        "id": "ccc",
        "y": 1359.91,
        "color": "#ff0"
      }
    ]
  }]
});
