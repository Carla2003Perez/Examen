import { Module } from '@nestjs/common';
import { Products–noSpecService } from './products.service';
import { Products–noSpecController } from './products.controller';
import { Product} from './entities/products–no-spec.entity';
import { Product} from './entities/products–no-spec.entity';

@Module({
  controllers: [Products–noSpecController],
  providers: [Products–noSpecService],
})
export class Products–noSpecModule {}
