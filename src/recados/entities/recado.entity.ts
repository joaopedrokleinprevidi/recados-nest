import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('recado')
export class RecadoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  texto: string;

  @Column({ type: 'varchar', length: 255 })
  de: string;

  @Column({ type: 'varchar', length: 255 })
  para: string;

  @Column({ type: 'boolean', default: false })
  lido: boolean;

  @Column()
  data: Date; //created at

  @UpdateDateColumn()
  updatedAt?: Date;
}
