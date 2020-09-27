import { hasMinimalLenght, 
    hasSpecialCaracteres, 
    hasUppercase, 
    itsCommonPasswords, 
    itsJustNumeric } from './src/helpers';

export class P4ss {
    
    private password: string;
    private commonChecking: boolean;
        
    constructor(password: string, commonChecking: boolean = false) {
        this.password = password;
        this.commonChecking = commonChecking;
    }

    isValidPassword() {
        const msg: Array<string> = []
        
        let common = true;
 
        const numericPassword = itsJustNumeric(this.password, msg);
        const minimalLenght = hasMinimalLenght(this.password, 8, msg);
        const specialCaracteres = hasSpecialCaracteres(this.password, ['!', '@', '$'], msg);
        const upperCase = hasUppercase(this.password, msg);

        if(this.commonChecking) {
            common = itsCommonPasswords(this.password, msg);
        }

        const secure = !numericPassword && 
        minimalLenght && 
        specialCaracteres && 
        upperCase && 
        !common;

        return {secure, msg};
    }

}