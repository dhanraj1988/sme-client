import { AccountRoutingModule } from './account-routing.module';

describe('AccountRoutingModule', () => {
  let routingModule: AccountRoutingModule;

  beforeEach(() => {
    routingModule = new AccountRoutingModule();
  });

  it('should create an instance', () => {
    expect(routingModule).toBeTruthy();
  });
});
