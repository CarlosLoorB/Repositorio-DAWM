import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { RecursosService } from '../../service/recursos.service';

@Component({
  selector: 'app-paneles',
  templateUrl: './paneles.component.html',
  styleUrls: ['./paneles.component.css']
})
export class PanelesComponent  {

  cryptoselect1: any = "bitcoin";
  cryptoselect2: any = "ethereum";
  cryptoselect3: any = "tether";


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
    console.log(dataCrypto)
  }

}
