import { AccountModule } from './account.module';

describe('AccountModule', () => {
  let accountModuleTsModule: AccountModule;

  beforeEach(() => {
    accountModuleTsModule = new AccountModule();
  });

  it('should create an instance', () => {
    expect(accountModuleTsModule).toBeTruthy();
  });
});
