import { Component } from '@angular/core';
import { ApexAxisChartSeries } from 'ng-apexcharts/lib/model/apex-types';
import { RecursosService } from 'src/app/service/recursos.service';


@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent {

  protected cryptoList: any = [];
  cryptoselect!: any;
  SeriesData!: ApexAxisChartSeries;
  SeriesDataLine: ApexAxisChartSeries = [];
  linea: number[] = [];

  constructor(private recursos: RecursosService) {
    let dataTop7 = JSON.parse(localStorage.getItem("dataCryptos")!)
    if (dataTop7) {
      this.cryptoList = dataTop7
    }
  }

  async obtenerdata(id: String) {
    let data =  await this.recursos.getChosenDataSafe(id)
    let dataCrypto: any = [];
    console.log(id)
    dataCrypto = JSON.parse(JSON.stringify(data));
    setTimeout(() => {}, 1500);
    let numbers = dataCrypto.community_score
    this.SeriesData = [numbers,(100-numbers)]  
    let lineain =  dataCrypto.market_data.sparkline_7d.price
    this.linea = lineain
    console.log(this.linea.slice(0,10))
    this.SeriesDataLine= [{data: [this.linea[0],this.linea[1],this.linea[2],this.linea[3],this.linea[4],this.linea[5],this.linea[6]]}];
  }

}
