import { P4ss } from '..';

describe('P4ss password strenght tester', () => {

    it('Should return error when calling a just numeric password', () => {
        const p4ss = new P4ss('123');
        const isValid = p4ss.isValidPassword();
        expect(isValid.secure).toBe(false);
    })  

})
