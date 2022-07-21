// item.entity.ts
import { Entity, Column, BeforeInsert } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ApiProperty } from '@nestjs/swagger';
import decypher from '../utils/decypher';
import { Request } from '@nestjs/common';

const { encrypt } = decypher;
@Entity('user')
export class User extends BaseEntity {
  @ApiProperty({ type: String })
  @Column({ type: 'varchar', length: 300 })
  name: string;

  @ApiProperty({ type: String })
  @Column({ type: 'varchar', length: 300 })
  email: string;

  @ApiProperty({ type: String })
  @Column({ type: 'varchar', length: 300 })
  encryptedPassword: string;

  @ApiProperty({ type: String })
  @Column({ type: 'varchar', length: 300 })
  phoneNumber: string;

  @ApiProperty({ type: String })
  @Column({ type: 'varchar', length: 300 })
  city: string;

  @BeforeInsert()
  async hashPassword() {
    this.encryptedPassword = await encrypt(this.encryptedPassword);
  }
}
