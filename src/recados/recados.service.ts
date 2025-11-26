import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity';
import { PostRecadoDto } from './dto/post-recado.dto';
import { PatchRecadoDto } from './dto/patch-recado.dto';
import { PutRecadoDto } from './dto/put-recado-dto';

@Injectable()
export class RecadosService {
  private lastId = 1;
  private recados: RecadoEntity[] = [
    {
      id: 1,
      texto: 'Vá comprar pão',
      de: 'Jovana',
      para: 'João',
      lido: true,
      data: new Date(),
    },
  ];

  findAll() {
    return this.recados;
  }

  findOne(id: number) {
    if (!id) throw new BadRequestException('ID é obrigatório');
    const recado = this.recados.find((recado) => recado.id === id);

    if (recado) return recado;

    throw new NotFoundException('Recado não encontrado');
  }

  create(recado: PostRecadoDto) {
    if (!recado) throw new BadRequestException('Recado é obrigatório');

    this.lastId++;
    const id = this.lastId;
    const novoRecado = { ...recado, id, lido: false, data: new Date() };
    this.recados.push(novoRecado);
  }

  updatePatch(id: number, recado: PatchRecadoDto) {
    if (!id) throw new BadRequestException('ID é obrigatório');
    if (!recado) throw new BadRequestException('Recado é obrigatório');

    const recadoIndex = this.recados.findIndex((r) => r.id === id);
    if (recadoIndex === -1)
      throw new NotFoundException('Recado não encontrado');

    this.recados[recadoIndex] = { ...this.recados[recadoIndex], ...recado };
  }

  updatePut(id: number, recado: PutRecadoDto) {
    if (!id) throw new BadRequestException('ID é obrigatório');
    if (!recado) throw new BadRequestException('Recado é obrigatório');

    const recadoIndex = this.recados.findIndex((r) => r.id === id);
    if (recadoIndex === -1)
      throw new NotFoundException('Recado não encontrado');

    this.recados[recadoIndex] = { ...this.recados[recadoIndex], ...recado };
  }

  delete(id: number) {
    if (!id) throw new BadRequestException('ID é obrigatório');
    this.recados = this.recados.filter((recado) => recado.id !== id);
  }
}
