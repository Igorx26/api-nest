import { Test, TestingModule } from '@nestjs/testing';
import { CursaController } from './cursa.controller.js';
import { CursaService } from './cursa.service.js';

describe('CursaController', () => {
  let controller: CursaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursaController],
      providers: [CursaService],
    }).compile();

    controller = module.get<CursaController>(CursaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
