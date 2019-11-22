import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
// let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

// Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.css']
})
export class HighChartComponent implements OnInit {
  public testChart: any;
  public options: any;
  
  @Input('data') data: any;

  constructor() { }

  ngOnInit() {
    this.data = {
      title: 'Smallest and Highest numbers',
      arr: [1, 2, 4, 8, 18, 1]
    };

    let largest = [40, 59, 66, 68, 70, 25];

    this.options = {
      chart: {
        type: 'column',
        height: 720,
        width: 1280
      },
      title: {
        text: this.data.title
      },
      credits: {
        enabled: false
      },
      // tooltip: {
      //   formatter: function() {
      //     return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +
      //       ' y: ' + this.y.toFixed(2);
      //   }
      // },
      xAxis: {
        categories: ['1st', '2nd', '3rd', '4th', '5th', '6th']
      },
      yAxis: {
        min: 0,
        max: 70,
        title: {
          text: 'Possible numbers'
        }
      },
      plotOptions: {
        column: {
          grouping: false,
          shadow: false,
          borderWidth: 0
        }
      },
      series: [        
        {
          name: 'highest',
          data: [40, 59, 66, 68, 70, 25],
          pointPadding: 0.1,
          color: 'rgba(255,128,85,1)'
        }
        ,{
          name: 'modes',
          data: [1,17,31,42,70,10],
          pointPadding: 0.2,
          color: 'rgba(128,255,85,1)'
        }
        ,{
          name: 'lowest',
          data: [1, 2, 4, 8, 18, 1],
          pointPadding: 0.3,
          color: 'rgba(128,85,255,1)'
        }
        
      ]
    }   
    
    Highcharts.chart('container', this.options);

  }

  add() {
    this.testChart.addPoint(Math.floor(Math.random() * 70));
  }

}
