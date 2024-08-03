import { Config } from "@utils/config";

class RequestGetAdminsAdminIDStandard {

    loginAdmin() {
        return cy.getToken(Config.USER_ADMIN, Config.PASS_ADMIN);
    }
    getOneAdmin(idAdmin, tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/admins/${idAdmin}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
    }
}

export const requestGetAdminsAdminIDStandard = new RequestGetAdminsAdminIDStandard();