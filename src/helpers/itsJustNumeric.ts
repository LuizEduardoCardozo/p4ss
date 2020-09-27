export const itsJustNumeric = (password: string, msg: Array<string>): boolean => {
    const justNumeric = password === '' + (parseInt(password));

    if(justNumeric) {
        msg.push(
            'Your password must have numbers and words'
        )
    }

    return justNumeric;

}
