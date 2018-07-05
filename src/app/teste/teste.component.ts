import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {CarouselComponent} from "angular2-carousel";

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})

export class TesteComponent implements OnInit {

  @Input() letras : string[]
  @Input() letrasSelecionadas : string[]

  @ViewChild('carousel') carousel : CarouselComponent

  ngOnInit() {
    
  }

  enviarALetraSelecionada()
  {
    
    this.letrasSelecionadas.push(this.letras[this.carousel.carousel.activeIndex])
    this.letras.splice(this.carousel.carousel.activeIndex, 1)
    
    this.carousel.carouselElm.nativeElement.getElementsByClassName("item-carousel")[this.carousel.carousel.activeIndex].remove()
    this.carousel.carousel.items.splice(this.carousel.carousel.activeIndex, 1)
    this.carousel.reInit()
    


  }


}
