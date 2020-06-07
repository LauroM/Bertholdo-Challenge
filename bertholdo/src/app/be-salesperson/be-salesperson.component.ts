import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'be-salesperson',
  templateUrl: './be-salesperson.component.html',
  styleUrls: ['./be-salesperson.component.scss']
})
export class BeSalespersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  /*
    Simple alert just showing a message with successful,
    I did not do error treatments or more features due to the time,
    and I used the normal alert function and not the angular in this case
  */
  simpleAlert(){
    alert("Cadastro enviado com sucesso");
  }



}
