import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  @Input() letras : string[]

  constructor() { }

  ngOnInit() {
  }

}
