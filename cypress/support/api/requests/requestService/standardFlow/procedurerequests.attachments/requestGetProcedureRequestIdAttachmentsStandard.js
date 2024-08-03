import { Config } from "@utils/config";

class RequestGetProcedureRequestIdAttachments {

    getAttachmentDataOfProcedure(idAttachment, idProcedure, tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/procedurerequests/${idProcedure}/attachments/${idAttachment}`,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            },
        })
    }
}

export const requestGetProcedureRequestIdAttachments = new RequestGetProcedureRequestIdAttachments();