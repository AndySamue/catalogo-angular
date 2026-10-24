import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

export interface Producto {
  id?: string;
  nombre: string;
  precio: number;
  descripcion: string;
  stock: number;
}

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private productos = collection(db, 'productos');

  async listar() {
    const resultado = await getDocs(this.productos);
    return resultado.docs.map((d) => ({ id: d.id, ...d.data() }) as Producto);
  }

  crear(p: Producto) {
    return addDoc(this.productos, {
      nombre: p.nombre,
      precio: p.precio,
      descripcion: p.descripcion,
      stock: p.stock,
    });
  }

  editar(id: string, p: Producto) {
    return updateDoc(doc(db, 'productos', id), {
      nombre: p.nombre,
      precio: p.precio,
      descripcion: p.descripcion,
      stock: p.stock,
    });
  }

  eliminar(id: string) {
    return deleteDoc(doc(db, 'productos', id));
  }
}
