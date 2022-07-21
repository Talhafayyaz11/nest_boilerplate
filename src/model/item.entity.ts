// item.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('item')
export class Item extends BaseEntity {
  @ApiProperty({ type: String })
  @Column({ type: 'varchar', length: 300 })
  name: string;

  @ApiProperty({ type: String })
  @Column({ type: 'varchar', length: 300 })
  description: string;

  @ApiProperty({ type: Number })
  @Column({ type: 'int' })
  qty: number;
}
