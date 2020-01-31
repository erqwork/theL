import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.css']
})
export class HighChartComponent implements AfterViewInit {
  @Input('options') options: any;
  @Input('chart') chart: string;

  constructor() { }
  
  ngAfterViewInit() {
    Highcharts.chart('container-' + this.chart, this.options);
  }

}
