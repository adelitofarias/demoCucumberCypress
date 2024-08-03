import { Config } from "@utils/config";

class RequestPatchMunicipalRegulatorStandard {
    loginMunicipalRegulator() {
        return cy.getToken(Config.USER_REGULADOR_MUNICIPAL_BACK_0, Config.PASS_DEFAULT_BACK);
    }
    patchMunicipalRegulator(update ,idMunicipalRegulator, tokenAuth) {
        return cy.request({
            method: 'PATCH',
            url: `${Config.DEV_API_GATEWAY}/v1/municipalregulators/${idMunicipalRegulator}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            },
            body: update
        })
    }
}

export const requestPatchMunicipalRegulatorStandard = new RequestPatchMunicipalRegulatorStandard();