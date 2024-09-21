import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product} from './entities/product.entity';

@Module({
  controllers: [Products–noSpecController],
  providers: [Products–noSpecService],
})
export class Products–noSpecModule {}
