import { hasMinimalLenght } from './src/helpers/hasMinimalLenght';
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
        
        console.log(msg);

        const secure = !numericPassword && minimalLenght;

        return {secure, msg};
    }

}