import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
// let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'occ-graph',
  templateUrl: './occ-graph.component.html',
  styleUrls: ['./occ-graph.component.css']
})
export class OccGraphComponent implements OnInit {
  public options: any;
  public seventyArr: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70]; 

  constructor() { }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'column',
        height: 720,
        width: 1280
      },
      title: {
        text: 'Occurences'
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
        categories: this.seventyArr
      },
      yAxis: {
        min: 0,
        max: 20,
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
          name: 'fifth digit',
          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,2,2,3,2,2,2,1,4,4,4,1,4,2,1,3,3,8,8,10,6,6,11,7,10,5,10,11,13,10,17],
          pointPadding: 0.05,
          color: '#E14A38'
        },
        {
          name: 'fourth digit',
          data: [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,2,0,1,2,0,3,1,0,2,1,1,1,2,4,5,2,2,1,2,7,1,3,2,10,8,5,1,7,4,9,7,2,1,2,4,8,1,8,3,2,5,7,6,10,2,6,6,3,2,2],
          pointPadding: 0.1,
          color: '#CE986A'
        }
        ,{
          name: 'third digit',
          data: [0,0,0,1,1,0,0,0,0,1,2,1,2,2,3,1,0,3,1,3,4,4,5,2,4,4,3,5,4,7,10,6,3,5,2,3,6,3,11,7,5,5,3,4,2,4,5,3,2,0,4,2,4,1,3,1,2,4,0,1,3,1,1,0,0,1],
          pointPadding: 0.12,
          color: '#9FDFC7'
        }        
        ,{
          name: 'second digit',
          data: [0, 2, 2, 2, 2, 4, 3, 3, 2, 6, 4, 5, 5, 7, 5, 8, 9, 3, 3, 3, 1, 9, 4, 8, 5, 5, 0, 8, 6, 6, 3, 4, 5, 6, 2, 3, 5, 6, 0, 1, 3, 2, 1, 1, 2, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
          pointPadding: 0.14,
          color: '#2DC1B7'
        }
        , {
          name: 'first digit',
          data: [20, 14, 13, 12, 7, 5, 8, 11, 5, 13, 7, 5, 4, 9, 4, 6, 5, 2, 1, 3, 3, 1, 1, 3, 2, 0, 1, 5, 3, 0, 1, 0, 2, 2, 0, 0, 0, 0, 1, 1],
          pointPadding: 0.16,
          color: '#393D2C'
        }
        
      ]
    }   
    
    Highcharts.chart('occs', this.options);
  }

}
