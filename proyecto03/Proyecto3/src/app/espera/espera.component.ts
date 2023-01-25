import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../service/recursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espera',
  templateUrl: './espera.component.html',
  styleUrls: ['./espera.component.css']
})
export class EsperaComponent implements OnInit {

  constructor(private recursos: RecursosService, private router: Router) { }

  ngOnInit() {
    this.recursos.getTop7Data().subscribe(response => {
      let dataCryptos = localStorage.getItem("dataCryptos");
      if (!dataCryptos) {
        localStorage.setItem("dataCryptos", JSON.stringify(response));
      }
      console.log(dataCryptos)
    }
    )
  }

  
}

