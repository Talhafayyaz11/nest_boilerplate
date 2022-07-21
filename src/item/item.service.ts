import { Injectable } from '@nestjs/common';
import { item } from './interface/item.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '../model/item.entity';
import { CreateItemDto } from './dto/createItem.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  findAll(): Promise<item[]> {
    return this.itemRepository.find();
  }
  findOne(id: string): Promise<item> {
    return this.itemRepository.findOneBy({ id });
  }
  create(item: CreateItemDto): item {
    try {
      const entity = this.itemRepository.create(item);
      this.itemRepository.save(entity);
      return entity;
    } catch (e) {
      console.log(e);
    }
  }
}
