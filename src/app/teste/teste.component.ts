import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {CarouselComponent} from "angular2-carousel";
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
  providers: [PubNubAngular]
})

export class TesteComponent implements OnInit {
  pubnub: PubNubAngular;
  channel: string;

  constructor(pubnub: PubNubAngular) {
    this.channel = 'jogando';
    this.pubnub = pubnub;
    this.pubnub.init({
      publishKey: 'pub-c-bddd3276-8045-43cc-bc90-35b4b09e93f7',
      subscribeKey: 'sub-c-1bfc82f2-7d97-11e8-a43f-d6f8762e29f7'
    });
    this.pubnub.subscribe({
      channels: [this.channel],
      triggerEvents: ['message']
    });
  }

  @Input() letras : string[]
  @Input() letrasSelecionadas : string[]

  @ViewChild('carousel') carousel : CarouselComponent

  ngOnInit() {
    
  }

  enviarALetraSelecionada()
  {

    this.pubnub.publish({
      channel: this.channel, message: this.letras[this.carousel.carousel.activeIndex]
    })
    
    this.letrasSelecionadas.push(this.letras[this.carousel.carousel.activeIndex])
    this.letras.splice(this.carousel.carousel.activeIndex, 1)
    
    this.carousel.carouselElm.nativeElement.getElementsByClassName("item-carousel")[this.carousel.carousel.activeIndex].remove()
    this.carousel.carousel.items.splice(this.carousel.carousel.activeIndex, 1)
    this.carousel.reInit()
  }


}
