import { Module } from '@nestjs/common';
import { ProductoController } from './producto/adapters/controllers/producto.controller';
import { ProductoService } from './producto/domain/services/producto.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class AppModule {}
