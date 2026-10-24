import { Injectable, signal } from '@angular/core';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';

export interface Sesion {
  usuario: string;
  rol: 'admin' | 'estandar';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  sesion = signal<Sesion | null>(JSON.parse(localStorage.getItem('sesion') || 'null'));

  async login(usuario: string, clave: string) {
    const q = query(
      collection(db, 'usuarios'),
      where('usuario', '==', usuario),
      where('clave', '==', clave),
    );
    const resultado = await getDocs(q);
    if (resultado.empty) {
      return false;
    }
    const sesion: Sesion = { usuario, rol: resultado.docs[0].data()['rol'] };
    localStorage.setItem('sesion', JSON.stringify(sesion));
    this.sesion.set(sesion);
    return true;
  }

  logout() {
    localStorage.removeItem('sesion');
    this.sesion.set(null);
  }

  estaLogueado() {
    return this.sesion() !== null;
  }

  esAdmin() {
    return this.sesion()?.rol === 'admin';
  }
}
