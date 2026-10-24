import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
})
export class App {
  auth = inject(AuthService);
  private router = inject(Router);

  salir() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
