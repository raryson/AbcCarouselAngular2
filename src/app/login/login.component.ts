import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

 
  @Input() nomeDoUsuario : string
  @Input() usuarioTemUmNome : boolean

  @ViewChild('nomeDoUsuarioText') nomeDoUsuarioTextArea : HTMLTextAreaElement

  ngOnInit() {
  }

  iniciarUmUsuario(data)
  {
    this.nomeDoUsuario = data.value
    this.usuarioTemUmNome = true
  }

}
