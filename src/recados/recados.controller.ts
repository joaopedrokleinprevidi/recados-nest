import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { RecadoEntity } from './entities/recado.entity';

//Query Params Example
// findAll(@Query('pageIndex') pageIndex: string) {
//   console.log(pageIndex);
//   return `Essa rota retornará todos os recados da página: ${pageIndex}`;
// }

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.recadosService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recadosService.findOne(Number(id));
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() body: RecadoEntity) {
    return this.recadosService.create(body);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Partial<RecadoEntity>) {
    return this.recadosService.updatePatch(Number(id), body);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  updatePut(@Param('id') id: string, @Body() body: RecadoEntity) {
    return this.recadosService.updatePut(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recadosService.delete(Number(id));
  }
}
