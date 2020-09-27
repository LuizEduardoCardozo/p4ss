import { hasMinimalLenght } from './src/helpers/hasMinimalLenght';
import { hasSpecialCaracteres } from './src/helpers/hasSpecialCaracteres';
import { itsJustNumeric } from './src/helpers/itsJustNumeric';

export class P4ss {
    
    private password: string;
        
    constructor(password: string) {
        this.password = password;

    }

    isValidPassword() {
        const msg: Array<string> = []
 
        const numericPassword = itsJustNumeric(this.password, msg);
        const minimalLenght = hasMinimalLenght(this.password, 8, msg);
        const specialCaracteres = hasSpecialCaracteres(this.password, ['!', '@', '$'], msg);

        console.log(msg);

        const secure = !numericPassword && minimalLenght && specialCaracteres;

        return {secure, msg};
    }

}