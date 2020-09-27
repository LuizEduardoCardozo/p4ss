export const hasSpecialCaracteres = (
    password: string,
    specialCaracteres: Array<string>, 
    msg: Array<string> ) : boolean => {

        const isValid = password.split('')
                .some((word) => specialCaracteres.includes(word));

        if(!isValid)
            msg.push(`Your password must have special caracteres like: ${specialCaracteres.join(', ')}`)

        return isValid;

}