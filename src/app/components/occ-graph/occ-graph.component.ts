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
        max: 180,
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
        // ,{
        //   name: 'modes',
        //   data: [1,17,39,42,70,9],
        //   pointPadding: 0.2,
        //   color: 'rgba(128,255,85,1)'
        // }
        // ,{
        //   name: 'lowest',
        //   data: [1, 2, 4, 8, 18, 1],
        //   pointPadding: 0.3,
        //   color: 'rgba(128,85,255,1)'
        // }
        
      ]
    }   
    
    Highcharts.chart('container', this.options);
  }

}
