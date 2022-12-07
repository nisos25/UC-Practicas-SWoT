import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductoService } from '../../domain/services/producto.service';
import { Fruta } from '../../domain/models/fruta.model';
import { AuthGuard } from '@nestjs/passport';

const errReturn = (e: Error, message: string) => {
  return {
    message: message,
    error: e,
  };
};

@Controller()
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  getHello() {
    try {
      return this.productoService.listar();
    } catch (e) {
      return errReturn(e, 'Error al listar frutas');
    }
  }

  @UseGuards(AuthGuard('local'))
  @Post()
  crear(@Body() datos: Fruta) {
    try {
      return this.productoService.crear(datos);
    } catch (e) {
      return errReturn(e, 'Error al crear fruta');
    }
  }

  @Put(':id')
  modificar(@Body() datos: Fruta, @Param('id') id: number) {
    try {
      return this.productoService.modificar(id, datos);
    } catch (e) {
      return errReturn(e, 'Error al modificar fruta');
    }
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    try {
      return this.productoService.eliminar(id);
    } catch (e) {
      return errReturn(e, 'Error al borrar fruta');
    }
  }

  @Patch(':id')
  cambiarDatos(@Param('id') id: number, @Param('madura') madura: boolean) {
    try {
      return this.productoService.cambiarEstado(id, madura);
    } catch (e) {
      return errReturn(e, 'Error al actualizar estado de fruta');
    }
  }
}
