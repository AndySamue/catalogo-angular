import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Catalogo } from './pages/catalogo/catalogo';
import { Admin } from './pages/admin/admin';
import { adminGuard, authGuard } from './guards/guards';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'catalogo', component: Catalogo, canActivate: [authGuard] },
  { path: 'admin', component: Admin, canActivate: [authGuard, adminGuard] },
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  { path: '**', redirectTo: 'catalogo' },
];
