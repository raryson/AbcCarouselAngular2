import { Component, Input, ViewChild } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PubNubAngular]
})
export class AppComponent {
  pubnub: PubNubAngular;
  channel: string;

  @Input() nomeDoUsuario : string
  @Input() usuarioTemUmNome : boolean

  @ViewChild('nomeDoUsuarioTextArea') nomeDoUsuarioTextArea : HTMLTextAreaElement

  constructor(pubnub: PubNubAngular){
    this.usuarioTemUmNome = false
    this.channel = 'usuario'
    this.pubnub = pubnub

    this.pubnub.init({
      publishKey: 'pub-c-bddd3276-8045-43cc-bc90-35b4b09e93f7',
      subscribeKey: 'sub-c-1bfc82f2-7d97-11e8-a43f-d6f8762e29f7'
    })

    this.pubnub.subscribe({
      channels: [this.channel],
      triggerEvents: ['message']
    })
  }

  title = 'app';
  letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z']
  letrasSelecionadas = []

  iniciarUmUsuario(data)
  {
    this.pubnub.publish({
      channel: this.channel, message: data.value
    })
    this.nomeDoUsuario = data.value
    this.usuarioTemUmNome = true
  }

}
