export const hasUppercase = (password: string, msg: Array<string> ) => {

    password.split('').forEach((word, index) => {
        const charCode = password.charCodeAt(index);

        if(charCode > 64 && charCode < 97) {
            return true;
        }

    })

    return false;

}