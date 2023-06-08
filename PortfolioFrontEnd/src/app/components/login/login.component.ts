import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/model/login-usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  isLogged = false;
  isLogginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  errMsj!: string;

  constructor() {}

  onSubmit() {
    if (this.nombreUsuario === 'Anabela' && this.password === 'Anabela') {
      console.log('Inicio de sesión exitoso');
      // Necesito redirigir a otra páguina?
    } else {
      console.log('Credenciales inválidas');
      
    }
  }
}

