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
import { PatchRecadoDto } from './dto/patch-recado.dto';
import { PutRecadoDto } from './dto/put-recado-dto';
import { PostRecadoDto } from './dto/post-recado.dto';

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
  findOne(@Param('id') id: number) {
    return this.recadosService.findOne(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() body: PostRecadoDto) {
    return this.recadosService.create(body);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@Param('id') id: number, @Body() body: PatchRecadoDto) {
    return this.recadosService.updatePatch(id, body);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  updatePut(@Param('id') id: number, @Body() body: PutRecadoDto) {
    return this.recadosService.updatePut(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.recadosService.delete(id);
  }
}
