import { Test, TestingModule } from '@nestjs/testing';
import { TipoDisciplinaService } from './tipo_disciplina.service.js';

describe('TipoDisciplinaService', () => {
  let service: TipoDisciplinaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoDisciplinaService],
    }).compile();

    service = module.get<TipoDisciplinaService>(TipoDisciplinaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
