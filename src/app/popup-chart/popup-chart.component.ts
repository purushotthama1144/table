import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild } from '@angular/core';
import {ChartComponent, ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis } from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-popup-chart',
  templateUrl: './popup-chart.component.html',
  
  styleUrls: ['./popup-chart.component.css']
})
export class PopupChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent = {} as ChartComponent;

  public chartOptions: Partial<ChartOptions>;


  
  
  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
  }

  ngOnInit(): void {
    
  }

}
