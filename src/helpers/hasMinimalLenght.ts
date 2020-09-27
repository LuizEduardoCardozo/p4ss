export const hasMinimalLenght = (password: string, minimal: number, msg: Array<string>) => {

    if(password.length <= minimal) {
        msg.push(`Your password has ` + 
        `${password.length} caracteres, secure passwords must have at least` +
        `${minimal} characteres`);

        return false;
    }

    return true;

}