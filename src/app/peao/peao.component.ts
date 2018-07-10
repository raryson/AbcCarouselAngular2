import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {CarouselComponent} from "angular2-carousel";
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  selector: 'app-peao',
  templateUrl: './peao.component.html',
  styleUrls: ['./peao.component.css'],
  providers: [PubNubAngular]
})

export class PeaoComponent implements OnInit {
  pubnub: PubNubAngular;
  channel: string;
  channelEventosJogo : string
  win : boolean
  lose :boolean

  constructor(pubnub: PubNubAngular) {
    this.channel = 'jogando';
    this.channelEventosJogo = "eventosJogo"
    this.pubnub = pubnub;
    this.pubnub.init({
      publishKey: 'pub-c-bddd3276-8045-43cc-bc90-35b4b09e93f7',
      subscribeKey: 'sub-c-1bfc82f2-7d97-11e8-a43f-d6f8762e29f7'
    });

    this.pubnub.getMessage(this.channelEventosJogo, (data) => {
      if(data.message.win == "true")
      {
        this.win = true 
      }
      else
      {
        this.lose = true
      }
    })

    this.pubnub.subscribe({
      channels: [this.channelEventosJogo],
      triggerEvents: ['message']
    });
    
  }

  @Input() letras : string[]
  @Input() letrasSelecionadas : string[]
  @Input() name : string

  @ViewChild('carousel') carousel : CarouselComponent

  ngOnInit() {
    
  }

  enviarALetraSelecionada()
  {

    this.pubnub.publish({
      channel: this.channel, message: {name: this.name, letter : this.letras[this.carousel.carousel.activeIndex]}
    })
    
    this.letrasSelecionadas.push(this.letras[this.carousel.carousel.activeIndex])
    this.letras.splice(this.carousel.carousel.activeIndex, 1)
    
    this.carousel.carouselElm.nativeElement.getElementsByClassName("item-carousel")[this.carousel.carousel.activeIndex].remove()
    this.carousel.carousel.items.splice(this.carousel.carousel.activeIndex, 1)
    this.carousel.reInit()
  }


}
