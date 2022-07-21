import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  UseInterceptors,
  ParseUUIDPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateItemDto } from './dto/createItem.dto';
import { ItemService } from './item.service';
import { item } from './interface/item.interface';
import {
  ApiTags,
  ApiBody,
  ApiCreatedResponse,
  ApiResponse,
  ApiQuery,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Item } from '../model/item.entity';
import { TransformInterceptor } from '../interceptors/transform.interceptor';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseInterceptors(TransformInterceptor)
@Controller('item')
@ApiTags('Items')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get('/getAll')
  @ApiResponse({ status: 200, description: 'Return a list of items' })
  findAll(): Promise<item[]> {
    return this.itemService.findAll();
  }

  @Get('/getById/:id')
  @ApiQuery({ name: 'id' })
  @ApiResponse({ status: 200, description: 'Return a list of items' })
  findOne(
    @Query('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<item> {
    return this.itemService.findOne(id);
  }

  @Post('/create')
  @HttpCode(200)
  @ApiBody({ type: CreateItemDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    status: 200,
    type: Item,
  })
  create(@Body() createItemdto: CreateItemDto): item {
    return this.itemService.create(createItemdto);
  }

  @Put('/:id')
  update(@Body() createItemdto: CreateItemDto, @Query('id') id): string {
    return 'updated';
  }

  @Delete('/delete')
  delete(@Param('id') id): string {
    return 'deleted';
  }
}
