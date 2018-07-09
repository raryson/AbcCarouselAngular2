import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/login/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

 
  @Input() model : Usuario;

  @ViewChild('nomeDoUsuarioText') nomeDoUsuarioTextArea : HTMLTextAreaElement

  ngOnInit() {
  }

  iniciarUmUsuario(data)
  {
    this.model.name = data.value
  }

}
