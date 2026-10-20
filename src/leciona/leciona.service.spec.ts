import { Test, TestingModule } from '@nestjs/testing';
import { LecionaService } from './leciona.service.js';

describe('LecionaService', () => {
  let service: LecionaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LecionaService],
    }).compile();

    service = module.get<LecionaService>(LecionaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
