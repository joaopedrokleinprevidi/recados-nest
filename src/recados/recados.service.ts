import { Injectable, NotFoundException } from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity';
import { PostRecadoDto } from './dto/post-recado.dto';
import { PatchRecadoDto } from './dto/patch-recado.dto';
import { PutRecadoDto } from './dto/put-recado-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecadosService {
  constructor(
    @InjectRepository(RecadoEntity)
    private readonly recadosRepository: Repository<RecadoEntity>,
  ) {}

  async findAll() {
    const recados = await this.recadosRepository.find();
    return recados;
  }

  async findOne(id: number) {
    const recado = await this.recadosRepository.findOne({
      where: { id },
    });

    if (recado) return recado;

    throw new NotFoundException('Recado não encontrado');
  }

  async create(recado: PostRecadoDto) {
    const novoRecado = { ...recado, lido: false, data: new Date() };
    await this.recadosRepository.save(novoRecado);
  }

  async updatePatch(id: number, recado: PatchRecadoDto) {
    const recadoAtualizadoParcialmente = await this.recadosRepository.preload({
      id,
      ...recado,
    });
    if (!recadoAtualizadoParcialmente)
      throw new NotFoundException('Recado não encontrado');
    return this.recadosRepository.save(recadoAtualizadoParcialmente);
  }

  async updatePut(id: number, recado: PutRecadoDto) {
    const recadoAtualizado = await this.recadosRepository.preload({
      id,
      ...recado,
    });
    if (!recadoAtualizado) throw new NotFoundException('Recado não encontrado');
    return this.recadosRepository.save(recadoAtualizado);
  }

  async delete(id: number) {
    const recado = await this.recadosRepository.findOneBy({ id });
    if (!recado) throw new NotFoundException('Recado não encontrado');
    return this.recadosRepository.remove(recado);
  }
}
