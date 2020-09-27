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

});
