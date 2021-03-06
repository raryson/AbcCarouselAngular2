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
  pubnubsub: PubNubAngular;
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

    this.pubnubsub = new PubNubAngular();
    this.pubnubsub.init({
      publishKey: 'pub-c-4f3b47fe-2386-4415-a053-87bbe6024077',
      subscribeKey: 'sub-c-170ce4b6-83dd-11e8-8d65-6a72d609577c'
    })

    this.pubnubsub.getMessage(this.channelEventosJogo, (data) => {
      if(data.message.win == "true")
      {
        this.win = true 
      }
      else
      {
        this.lose = true
      }
    })

    this.pubnubsub.subscribe({
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
    let posicaoDoCarrossel = this.carousel.carousel.activeIndex
    let letraSelecionada = this.letras[posicaoDoCarrossel]

    this.pubnub.publish({
      channel: this.channel, message: {name: this.name, letter : letraSelecionada}
    })
    
    this.letrasSelecionadas.push(letraSelecionada)
    this.letras.splice(posicaoDoCarrossel, 1)
    this.carousel.carouselElm.nativeElement.getElementsByClassName("item-carousel")[posicaoDoCarrossel].remove()
    this.carousel.carousel.items.splice(posicaoDoCarrossel, 1)
    this.carousel.reInit()
  }


}
