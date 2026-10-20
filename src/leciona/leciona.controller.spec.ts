import { Test, TestingModule } from '@nestjs/testing';
import { LecionaController } from './leciona.controller.js';
import { LecionaService } from './leciona.service.js';

describe('LecionaController', () => {
  let controller: LecionaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LecionaController],
      providers: [LecionaService],
    }).compile();

    controller = module.get<LecionaController>(LecionaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
