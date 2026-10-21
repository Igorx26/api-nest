import { Test, TestingModule } from '@nestjs/testing';
import { TipoCursoService } from './tipo_curso.service.js';

describe('TipoCursoService', () => {
  let service: TipoCursoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoCursoService],
    }).compile();

    service = module.get<TipoCursoService>(TipoCursoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
