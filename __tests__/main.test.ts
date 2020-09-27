import P4ss from '..';

describe('P4ss password strenght tester', () => {

    it('Should return error when calling a too small password', () => {
        const p4ss = new P4ss('12345', true);
        const isValid = p4ss.isValidPassword();
        expect(isValid.secure).toBe(false);
        expect(isValid.msg).toContain('Your password have ' + 
        '5 caracteres, secure passwords must have at least' +
        '8 characteres');
    })

    it('Should return error when calling a numeric password', () => {
        const p4ss = new P4ss('12345', true);
        const isValid = p4ss.isValidPassword();
        expect(isValid.secure).toBe(false);
        expect(isValid.msg).toContain('Your password must have numbers and words');
    })

    it('Should return error when calling a password without special caracteres', () => {
        const p4ss = new P4ss('12345', true);
        const isValid = p4ss.isValidPassword();
        expect(isValid.secure).toBe(false);
        expect(isValid.msg).toContain('Your password must have special caracteres like: !, @, $');
    })

    it('Should return error when calling a password without uppercase caracteres', () => {
        const p4ss = new P4ss('12345', true);
        const isValid = p4ss.isValidPassword();
        expect(isValid.secure).toBe(false);
        expect(isValid.msg).toContain('Your password must have contains at least one uppercase word');
    })

    it('Should return true when calling a secure password', () => {
        const p4ss = new P4ss('FreyVvfnf$', true);
        const isValid = p4ss.isValidPassword();
        expect(isValid.secure).toBe(true);
    })  

})
