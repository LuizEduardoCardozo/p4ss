export const hasUppercase = (password: string, msg: Array<string> ) => {

    let isValid = false;

    password.split('').forEach((word, index) => {
        const charCode = password.charCodeAt(index);

        if(charCode > 64 && charCode < 97) {
            isValid = true;
        }

    })

    if(!isValid) {
        msg.push('Your password must have contains at least one uppercase word');
    }

    return isValid;

}