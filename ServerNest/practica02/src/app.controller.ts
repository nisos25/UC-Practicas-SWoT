import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

interface Producto {
  nombre: string;
  precio: number;
  peso: number;
}

interface Productoupd {
  precio: number;
  peso: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private productos: Producto[] = [
    {
      nombre: 'Papa',
      precio: 10000,
      peso: 9,
    },
  ];

  @Get()
  getHello(): Producto[] {
    return this.productos;
  }

  @Post()
  crear(@Body() datos: Producto): Producto {
    this.productos.push(datos);
    return datos;
  }

  @Put(':id')
  modificar(
    @Body() datos: Producto,
    @Param('id') id: number,
  ): Producto | string {
    try {
      this.productos[id] = datos;
      return this.productos[id];
    } catch {
      return `Error modificando el producto ${id}`;
    }
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    try {
      this.productos = this.productos.filter((val, index) => index != id);
      return 'Producto eliminado';
    } catch {
      return 'Error eliminando producto';
    }
  }

  @Patch(':id')
  cambiarDatos(
    @Param('id') id: number,
    @Body() datos: Productoupd,
  ): Producto | string {
    try {
      this.productos[id].precio = datos.precio;
      this.productos[id].peso = datos.peso;
      return this.productos[id];
    } catch {
      return `Error modificando datos del producto ${id}`;
    }
  }
}
