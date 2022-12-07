import { Injectable } from '@nestjs/common';
// Importamos el modelo de jugador
import { Fruta } from '../models/fruta.model';
import { Producto } from '../models/producto.model';

@Injectable()
export class ProductoService {
  private fruta: Fruta[] = [
    {
      nombre: 'Manzana',
      precio: 10000,
      peso: 35,
      madura: true,
    },
  ];

  public listar(): Fruta[] {
    return this.fruta;
  }
  public crear(fruta: Fruta): Fruta {
    this.fruta.push(fruta);
    return fruta;
  }

  public modificar(id: number, producto: Fruta): Fruta {
    this.fruta[id] = producto;
    return this.fruta[id];
  }

  public eliminar(id: number): boolean {
    const totalFrutasAntes = this.fruta.length;
    this.fruta = this.fruta.filter((val, index) => index != id);

    return !(totalFrutasAntes == this.fruta.length);
  }

  public cambiarEstado(id: number, madura: boolean): Producto {
    this.fruta[id].madura = madura;
    return this.fruta[id];
  }
}
