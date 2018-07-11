import { Component, OnInit, Input } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
import { Usuario } from '../login/usuario.model';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.css'],
  providers: [PubNubAngular]
})

export class ControleComponent implements OnInit {
  pubnub: PubNubAngular;
  channel: string;
  userChannel: string;
  usuario : Usuario

  ngOnInit() {
    
  }

  constructor(pubnub: PubNubAngular){
    this.userChannel = 'eventosJogo'
    this.pubnub = pubnub
    this.usuario = {name: "", jogoIniciou: false, foiIncializado : false}

    this.pubnub.init({
      publishKey: 'pub-c-4f3b47fe-2386-4415-a053-87bbe6024077',
      subscribeKey: 'sub-c-170ce4b6-83dd-11e8-8d65-6a72d609577c'
    })

    this.pubnub.subscribe({
      channels: [this.userChannel],
      triggerEvents: ['message']
    })

    this.pubnub.getMessage(this.userChannel, (data) => {
      if(data.message.start == "true")
        this.usuario.jogoIniciou = true
    })
    
  }

  enviarLoginToPubNub = model => {
    this.pubnub.publish({channel : this.userChannel, message: {name:model.name, started:true}})
    
  }

  loginUsuario = (model) => {
    this.usuario = model
    this.enviarLoginToPubNub(model)
  }


  letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z']
  letrasSelecionadas = []

}
