import { Test, TestingModule } from '@nestjs/testing';
import { TipoDisciplinaController } from './tipo_disciplina.controller.js';
import { TipoDisciplinaService } from './tipo_disciplina.service.js';

describe('TipoDisciplinaController', () => {
  let controller: TipoDisciplinaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoDisciplinaController],
      providers: [TipoDisciplinaService],
    }).compile();

    controller = module.get<TipoDisciplinaController>(TipoDisciplinaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
