import { Test, TestingModule } from '@nestjs/testing';
import { TipoCursoController } from './tipo_curso.controller.js';
import { TipoCursoService } from './tipo_curso.service.js';

describe('TipoCursoController', () => {
  let controller: TipoCursoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoCursoController],
      providers: [TipoCursoService],
    }).compile();

    controller = module.get<TipoCursoController>(TipoCursoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
