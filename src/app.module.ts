import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecadosModule } from './recados/recados.module';
import { RecadosController } from './recados/recados.controller';
import { RecadosService } from './recados/recados.service';

@Module({
  imports: [RecadosModule],
  controllers: [AppController, RecadosController],
  providers: [AppService, RecadosService],
})
export class AppModule {}
