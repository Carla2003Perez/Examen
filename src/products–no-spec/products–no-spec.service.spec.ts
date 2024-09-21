import { Test, TestingModule } from '@nestjs/testing';
import { Products–noSpecService } from './products–no-spec.service';

describe('Products–noSpecService', () => {
  let service: Products–noSpecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Products–noSpecService],
    }).compile();

    service = module.get<Products–noSpecService>(Products–noSpecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
