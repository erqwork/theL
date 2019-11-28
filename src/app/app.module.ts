import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphBoxComponent } from './components/graph-box/graph-box.component';

import * as Highcharts from 'highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { HighChartComponent } from './components/high-chart/high-chart.component';
import { OccGraphComponent } from './components/occ-graph/occ-graph.component';
import { DiffGraphComponent } from './components/diff-graph/diff-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphBoxComponent,
    HighChartComponent,
    OccGraphComponent,
    DiffGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
