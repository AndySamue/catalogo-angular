import { Component, inject, signal } from '@angular/core';
import { Producto, ProductoService } from '../producto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  private servicio = inject(ProductoService);
  productos = signal<Producto[]>([]);

  constructor() {
    this.servicio.listar().then((lista) => this.productos.set(lista));
  }
}
