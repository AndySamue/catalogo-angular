import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto, ProductoService } from '../producto.service';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
})
export class Admin {
  private servicio = inject(ProductoService);

  productos = signal<Producto[]>([]);
  form = signal<Producto>(this.vacio());

  constructor() {
    this.cargar();
  }

  vacio(): Producto {
    return { nombre: '', precio: 0, descripcion: '', stock: 0 };
  }

  async cargar() {
    this.productos.set(await this.servicio.listar());
  }

  async guardar() {
    const p = this.form();
    if (p.id) {
      await this.servicio.editar(p.id, p);
    } else {
      await this.servicio.crear(p);
    }
    this.form.set(this.vacio());
    this.cargar();
  }

  editar(p: Producto) {
    this.form.set({ ...p });
  }

  async eliminar(id: string) {
    await this.servicio.eliminar(id);
    this.cargar();
  }
}
