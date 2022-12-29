import { Component } from '@angular/core';
import { ApexAxisChartSeries } from 'ng-apexcharts/lib/model/apex-types';
import { RecursosService } from 'src/app/service/recursos.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  cryptoselect!: any;
  SeriesData!: ApexAxisChartSeries;
  sparkline!: number[];


  protected cryptoList: any = [];

  constructor(private recursos: RecursosService) {
    let dataTop7 = JSON.parse(localStorage.getItem("dataCryptos")!)
    if (dataTop7) {
      this.cryptoList = dataTop7
    }
  }

  async obtenerdata(id: String) {
    let dataCrypto: any = [];
    console.log(id)
    let data =  await this.recursos.getChosenDataSafe(id)
    dataCrypto = JSON.parse(JSON.stringify(data));
    let numbers = dataCrypto.community_score
    this.SeriesData = [numbers,(100-numbers)]   
    
        
  }


}
