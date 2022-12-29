import { Component, Input, OnChanges, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { ApexAxisChartSeries, ApexTitleSubtitle } from "ng-apexcharts/public_api";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent{


  @Input() series!: ApexAxisChartSeries | ApexNonAxisChartSeries;
  
  charTitle: ApexTitleSubtitle = {
    text: "Sentimiento del comprador",
    align: "center"
  };

  chart: ApexChart = {
    type: "pie"
  };

  chartlabels: string[] = ["Positivo","Negativo"]; 


  /*series !:ApexNonAxisChartSeries;
  chart!: ApexChart;
  chartlabels!: string[];*/


}
