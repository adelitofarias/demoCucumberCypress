import { Config } from "@utils/config";

class RequestPatchAdminsStandard {
    loginAdmin() {
        return cy.getToken(Config.USER_ADMIN, Config.PASS_ADMIN);
    }
    patchAdmin(update ,idAdmin, tokenAuth) {
        return cy.request({
            method: 'PATCH',
            url: `${Config.DEV_API_GATEWAY}/v1/admins/${idAdmin}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            },
            body: update
        })
    }
}

export const requestPatchAdminsStandard = new RequestPatchAdminsStandard();