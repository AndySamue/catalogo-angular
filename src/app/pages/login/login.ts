import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
})
export class Login {
  private auth = inject(AuthService);
  private router = inject(Router);

  usuario = '';
  clave = '';
  error = signal('');

  async entrar() {
    const ok = await this.auth.login(this.usuario, this.clave);
    if (ok) {
      this.router.navigate(['/catalogo']);
    } else {
      this.error.set('Usuario o contraseña incorrectos');
    }
  }
}
