import { Component, OnChanges, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { ApexTitleSubtitle } from "ng-apexcharts/public_api";

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
export class PiechartComponent {

  /*series !:ApexNonAxisChartSeries;
  chart!: ApexChart;
  chartlabels!: string[];*/

  charTitle: ApexTitleSubtitle = {
    text: "Sentimiento del comprador",
    align: "center"
  };

  series: ApexNonAxisChartSeries = [25,25];

  chart: ApexChart = {
    type: "pie"
  };

  chartlabels: string[] = ["Positivo","Negativo"]; 

  
}
