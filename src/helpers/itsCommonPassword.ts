import commonPasswords from "../resources/commonPasswords";

export const itsCommonPasswords = (password: string, msg: Array<string> ) => {

    const isCommon = commonPasswords.includes(password);

    if(isCommon) {
        msg.push('Your password is too common, please, try with a stronger password');
    }

    return isCommon;

}