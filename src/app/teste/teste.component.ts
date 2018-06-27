import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common'
import {CarouselComponent} from "angular2-carousel";

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})

export class TesteComponent implements OnInit {

  @Input() letras : string[]
  @Input() letrasSelecionadas : string[]

  constructor(private cdref:ChangeDetectorRef) { }

  @ViewChild('carousel') carousel : CarouselComponent

  ngOnInit() {
  }

  enviarALetraSelecionada()
  {
    this.letrasSelecionadas.push(this.letras[this.carousel.carousel.activeIndex])
    this.letras.splice(this.carousel.carousel.activeIndex, 1)
    alert(this.letrasSelecionadas)
  }


}
