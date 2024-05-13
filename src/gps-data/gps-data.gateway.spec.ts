import { Test, TestingModule } from '@nestjs/testing';
import { GpsDataGateway } from './gps-data.gateway';

describe('GpsDataGateway', () => {
  let gateway: GpsDataGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GpsDataGateway],
    }).compile();

    gateway = module.get<GpsDataGateway>(GpsDataGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
