import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Products–noSpecService } from './products–no-spec.service';
import { CreateProducts–noSpecDto } from './dto/create-products–no-spec.dto';
import { UpdateProducts–noSpecDto } from './dto/update-products–no-spec.dto';

@Controller('products–no-spec')
export class Products–noSpecController {
  constructor(private readonly products–noSpecService: Products–noSpecService) {}

  @Post()
  create(@Body() createProducts–noSpecDto: CreateProducts–noSpecDto) {
    return this.products–noSpecService.create(createProducts–noSpecDto);
  }

  @Get()
  findAll() {
    return this.products–noSpecService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.products–noSpecService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProducts–noSpecDto: UpdateProducts–noSpecDto) {
    return this.products–noSpecService.update(+id, updateProducts–noSpecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.products–noSpecService.remove(+id);
  }
}
