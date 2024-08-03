import { Config } from "@utils/config";

class RequestGetProcedureRequestAttachments {

    getAttachmentsOfProcedure(idProcedure, tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/procedurerequests/${idProcedure}/attachments`,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            },
        })
    }
}

export const requestGetProcedureRequestAttachments = new RequestGetProcedureRequestAttachments();