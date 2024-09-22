import { Injectable } from '@nestjs/common';
import { CreateProducts–noSpecDto } from './dto/create-products–no-spec.dto';
import { UpdateProducts–noSpecDto } from './dto/update-products–no-spec.dto';

@Injectable()
export class Products–noSpecService {
  create(createProducts–noSpecDto: CreateProducts–noSpecDto) {
    return 'This action adds a new products–noSpec';
  }

  findAll() {
    return `This action returns all products–noSpec`;
  }

  findOne(id: number) {
    return `This action returns a #${id} products–noSpec`;
  }

  update(id: number, updateProducts–noSpecDto: UpdateProducts–noSpecDto) {
    return `This action updates a #${id} products–noSpec`;
  }

  remove(id: number) {
    return `This action removes a #${id} products–noSpec`;
  }
}
