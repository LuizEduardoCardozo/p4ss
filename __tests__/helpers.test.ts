import { hasSpecialCaracteres } from '../src/helpers/hasSpecialCaracteres';
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
    
});
