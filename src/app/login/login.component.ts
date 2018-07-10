import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/login/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

 
  @Input() model : Usuario;
  @Output() sendLogin =  new EventEmitter<any>()

  @ViewChild('nomeDoUsuarioText') nomeDoUsuarioTextArea : HTMLTextAreaElement

  ngOnInit() {
  }

  iniciarUmUsuario = (data) =>  
  {
    this.model = {name : data.value, choosenCharacter : "", hasInitialized : true, gameStarted : true }
    this.sendLogin.emit(this.model)
  }

}
