import { Component, OnInit, Input } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
import { Usuario } from 'src/app/login/usuario.model'

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.css'],
  providers: [PubNubAngular]
})

export class ControleComponent implements OnInit {
  
  usuario : Usuario;
  pubnub: PubNubAngular;
  channel: string;
  userChannel: string;

  @Input() userHasInitialized : boolean

  ngOnInit() {
    
  }

  constructor(pubnub: PubNubAngular){
    this.channel = 'jogando'
    this.userChannel = 'usuario'
    this.pubnub = pubnub

    this.pubnub.init({
      publishKey: 'pub-c-bddd3276-8045-43cc-bc90-35b4b09e93f7',
      subscribeKey: 'sub-c-1bfc82f2-7d97-11e8-a43f-d6f8762e29f7'
    })

    this.pubnub.subscribe({
      channels: [this.channel, this.userChannel],
      triggerEvents: ['message']
    })

    this.pubnub.publish({channel: this.userChannel, message: true})

    this.pubnub.getMessage(this.userChannel, (data) => {
      this.usuario.userHasInitialized = true
      this.userHasInitialized = true
    })
  }


  letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z']
  letrasSelecionadas = []

}
