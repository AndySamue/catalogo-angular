import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Producto } from './producto.service';

// Fase 1: mismo CRUD pero contra la API local de json-server
@Injectable({ providedIn: 'root' })
export class ProductoLocalService {
  private API = 'http://localhost:3000/productos';
  private http = inject(HttpClient);

  listar() {
    return firstValueFrom(this.http.get<Producto[]>(this.API));
  }

  crear(p: Producto) {
    return firstValueFrom(this.http.post(this.API, p));
  }

  editar(id: string, p: Producto) {
    return firstValueFrom(this.http.put(this.API + '/' + id, p));
  }

  eliminar(id: string) {
    return firstValueFrom(this.http.delete(this.API + '/' + id));
  }
}
