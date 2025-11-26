import { Injectable } from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity';

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
    return this.recados.find((recado) => recado.id === id);
  }

  create(recado: RecadoEntity) {
    this.lastId++;
    const id = this.lastId;
    const novoRecado = { ...recado, id };
    this.recados.push(novoRecado);
  }

  updatePatch(id: number, recado: Partial<RecadoEntity>) {
    this.recados = this.recados.map((r) => {
      if (r.id === id) {
        return { ...r, ...recado };
      }
      return r;
    });
  }

  updatePut(id: number, recado: RecadoEntity) {
    this.recados = this.recados.map((r) => {
      if (r.id === id) {
        return recado;
      }
      return r;
    });
  }

  delete(id: number) {
    this.recados = this.recados.filter((recado) => recado.id !== id);
  }
}
