import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../service/recursos.service'

@Component({
  selector: 'app-top7',
  templateUrl: './top7.component.html',
  styleUrls: ['./top7.component.css']
})
export class Top7Component implements OnInit {

  constructor(private recursos: RecursosService){}

  ngOnInit(){
    this.recursos.getTop7Data().subscribe(response=> {
      let dataTop7 = localStorage.getItem("dataTop7");
      if(!dataTop7) {
        localStorage.setItem("dataTop7", JSON.stringify(response));
      }
    })
  }
  
  

}
