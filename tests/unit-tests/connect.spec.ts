import * as user from '../../src/nx_clients';

describe('user', () => {
    it('should be defined', () => {
        expect(user.createAppInfoServiceClient).toBeDefined();
    });
});
