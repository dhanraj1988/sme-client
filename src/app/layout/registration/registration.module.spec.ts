import { RegistrationModule } from './registration.module';

describe('RegistrationModule', () => {
    let chartsModule: RegistrationModule;

    beforeEach(() => {
        chartsModule = new RegistrationModule();
    });

    it('should create an instance', () => {
        expect(RegistrationModule).toBeTruthy();
    });
});
