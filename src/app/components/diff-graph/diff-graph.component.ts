import { Component, OnInit } from '@angular/core';
import * as FD from '../../../assets/Differences/firstDiffs.json';
import * as SD from '../../../assets/Differences/secondDiffs.json';
import * as TD from '../../../assets/Differences/thirdDiffs.json';
import * as FthD from '../../../assets/Differences/fourthDiffs.json';
import * as Highcharts from 'highcharts';

declare var require: any;
// let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'diff-graph',
  templateUrl: './diff-graph.component.html',
  styleUrls: ['./diff-graph.component.css']
})
export class DiffGraphComponent implements OnInit {
  public options: any;
  public xx;
  public seventyArr: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70]; 

  constructor() { }

  ngOnInit() {
    this.xx = FD.differences;
    this.options = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Differences'
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
      plotOptions: {        
        series: {
          label: {
              connectorAllowed: false
          }
        }
      },
      series: [        
        {
          name: 'first & second digits',
          data: FD.differences,
          color: 'rgba(255,85,85,1)'
        },
        {
          name: 'second & third digits',
          data: SD.differences,
          color: 'rgba(255,128,85,1)'
        },
        {
          name: 'third & fourth digits',
          data: TD.differences,
          lineColor: 'rgba(128,255,85,1)',
          color: 'rgba(128,255,85,0.5)',
        },
        {
          name: 'fourth & fifth digits',
          data: FthD.differences,
          lineColor: 'rgba(85,128,255,1)',
          color: 'rgba(85,128,255,0.5)'
        },
        
      ]
    }   
    
    Highcharts.chart('diffs', this.options);
  }

}
