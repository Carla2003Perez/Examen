import { Test, TestingModule } from '@nestjs/testing';
import { Products–noSpecController } from './products–no-spec.controller';
import { Products–noSpecService } from './products–no-spec.service';

describe('Products–noSpecController', () => {
  let controller: Products–noSpecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Products–noSpecController],
      providers: [Products–noSpecService],
    }).compile();

    controller = module.get<Products–noSpecController>(Products–noSpecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
