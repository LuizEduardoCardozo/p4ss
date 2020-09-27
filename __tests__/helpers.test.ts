import { hasMinimalLenght } from '../src/helpers/hasMinimalLenght';
import { hasSpecialCaracteres } from '../src/helpers/hasSpecialCaracteres';
import { hasUppercase } from '../src/helpers/hasUppercase';
import { itsCommonPasswords } from '../src/helpers/itsCommonPassword';
import { itsJustNumeric } from '../src/helpers/itsJustNumeric';

describe('helpers', () => {
    
    const msg: Array<string> = [];

    it('should return false when passed an alfanumeric string', ()=> {
        const testString = 'a123';
        const response = itsJustNumeric(testString, msg);
        expect(response).toBe(false);
    });
    
    it('should return true when passed an numeric string', ()=> {
        const testString = '123';
        const response = itsJustNumeric(testString, msg);
        expect(response).toBe(true);
    })
    

    it('should return false when password is too small', ()=> {
        const testString = '123';
        const response = hasMinimalLenght(testString, 8, msg);
        expect(response).toBe(false);
    })

    it('should return true when password is big enouth', ()=> {
        const testString = '123456789';
        const response = hasMinimalLenght(testString, 8, msg);
        expect(response).toBe(true);
    })


    it('should return false when passed an string that doesnt contains any special caractere', ()=> {
        const specialCaracteres = ['!', '#', '$'];
        const testString = '123';
        const response = hasSpecialCaracteres(testString, specialCaracteres, msg);
        expect(response).toBe(false);
    })

    it('should return true when passed an string that contains a special caractere', ()=> {
        const specialCaracteres = ['!', '$', '#'];
        const testString = '123#';
        const response = hasSpecialCaracteres(testString, specialCaracteres, msg);
        expect(response).toBe(true);
    })

    
    it('should return false when passed an string that not contains any uppercase characteres', ()=> {
        const testString = 'abc';
        const response = hasUppercase(testString, msg);
        expect(response).toBe(false);
    })

    it('should return true when passed an string that contains uppercase characteres', ()=> {
        const testString = 'Abc';
        const response = hasUppercase(testString, msg);
        expect(response).toBe(true);
    })


    it('should return false when passed an common password', ()=> {
        const testString = 'freyfvfnfnf';
        const response = itsCommonPasswords(testString, msg);
        expect(response).toBe(true);
    })
    
    it('should return true when passed a not common password', ()=> {
        const testString = 'b2xhbXVuZG8';
        const response = itsCommonPasswords(testString, msg);
        expect(response).toBe(false);  
    })

    
});
