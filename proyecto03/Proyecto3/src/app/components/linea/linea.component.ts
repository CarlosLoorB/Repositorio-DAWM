import { Component, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexNonAxisChartSeries, ApexStroke, ApexTitleSubtitle, ApexXAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent {

  @Input() series!: ApexAxisChartSeries | ApexNonAxisChartSeries;
  
  title: ApexTitleSubtitle = {
    text: "Movimiento del Precio",
    align: "center"
  };

  chart: ApexChart = {
    type: "line"
  };

  dataLabels: ApexDataLabels = {
    enabled: false
  }
  stroke: ApexStroke = {
    curve: "straight"
  }
  grid: ApexGrid = {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5
    }
  }

  xaxis: ApexXAxis = {
    categories: [
      "6D ago",
      "5D ago",
      "4D ago",
      "3D ago",
      "2D ago",
      "1D ago",
      "Today"
    ]
  }


}
