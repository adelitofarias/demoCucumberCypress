import { Config } from '@utils/config'

class DefaultUsersFront {

    //PASS_FOR_ALL
    senha = () => { return Config.PASS_FOR_ALL }

    //Standard
    standardEmail = () => { return Config.USER_STANDARD }

    //Locked
    lockedEmail = () => { return Config.USER_LOCKED }


}
export const defaultUsersFront = new DefaultUsersFront();
