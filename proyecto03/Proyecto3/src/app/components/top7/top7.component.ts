import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../service/recursos.service'
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { count } from 'rxjs';

@Component({
  selector: 'app-top7',
  templateUrl: './top7.component.html',
  styleUrls: ['./top7.component.css']
})
export class Top7Component implements OnInit {

   protected cryptos:any =[];

  constructor(private recursos: RecursosService) {  
    let dataTop7 = JSON.parse(localStorage.getItem("dataCryptos")!)
    if (dataTop7){
      this.cryptos = dataTop7
    }
    console.log(this.cryptos)
   }

  ngOnInit() {

  }

}


/*
let respuesta = JSON.stringify(response)
        let respuestafin = JSON.parse(respuesta)
        let chats = Object.keys(chats).map(e=>chats[e]);
        console.log(respuesta)
        for (var i = 0; i < 7; i++) {
          let cryptoAct = respuestafin[i]
          arraycrypto.push(cryptoAct);
        }
        respuesta
        for (var x = 0; x < respuesta.length; x++){
          let cryptoAct = respuestafin[x]
          arraycryptonames.push(cryptoAct.name);
        }
        localStorage.setItem("dataTop7", JSON.stringify(arraycrypto));
        localStorage.setItem("listaCryptos", JSON.stringify(arraycryptonames)); 




ngOnInit() {
    this.recursos.getTop7Data().subscribe(response => {
      let dataTop7 = localStorage.getItem("dataTop7");
      let listaCryptos = localStorage.getItem("listaCryptos");
      let arraycrypto = [];
      let arraycryptonames = [];
      if (!dataTop7) {
        let respuesta = JSON.stringify(response)
        let respuestafin = JSON.parse(respuesta)
        console.log(respuesta)
        for (var i = 0; i < 7; i++) {
          let cryptoAct = respuestafin[i]
          arraycrypto.push(cryptoAct);
        }
        respuesta
        for (var x = 0; x < respuesta.length; x++){
          let cryptoAct = respuestafin[x]
          arraycryptonames.push(cryptoAct.name);
        }
        localStorage.setItem("dataTop7", JSON.stringify(arraycrypto));
        localStorage.setItem("listaCryptos", JSON.stringify(arraycryptonames));
      }
      console.log(arraycrypto)
    }
    )
  }
        */
