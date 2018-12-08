import { OrdermgmtModule } from './ordermgmt.module';

describe('OrdermgmtModule', () => {
  let ordermgmtModule: OrdermgmtModule;

  beforeEach(() => {
    ordermgmtModule = new OrdermgmtModule();
  });

  it('should create an instance', () => {
    expect(ordermgmtModule).toBeTruthy();
  });
});
