import { DefaultUsers } from '@utils/users/defaultUsersAPI'
import { DefaultEvironment } from '@utils/environment/defaultEvironment'

export const Config = {

        //Access development web environment
        DEV_API_GATEWAY: Cypress.env('API_ADDRESS') || DefaultEvironment.DEV_API_GATEWAY,
        DEV_APP_ADDRESS: Cypress.env('APP_ADDRESS') || DefaultEvironment.DEV_APP_ADDRESS,

        //Admin profile access
        USER_ADMIN: Cypress.env('USER_ADMIN') || DefaultUsers.USER_ADMIN,
        PASS_ADMIN: Cypress.env('PASS_ADMIN') || DefaultUsers.PASS_ADMIN,

        //Password for all users
        PASS_FOR_ALL: Cypress.env('PASS_FOR_ALL') || DefaultUsers.PASS_FOR_ALL,

        //STANDARD profile access
        USER_STANDARD: Cypress.env('USER_STANDARD') || DefaultUsers.USER_STANDARD,

        //LOCKED profile access
        USER_LOCKED: Cypress.env('USER_LOCKED') || DefaultUsers.USER_LOCKED,

}
