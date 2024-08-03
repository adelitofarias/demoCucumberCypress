import { Config } from "@utils/config";

class RequestDeleteProcedureRequestIdAttachments {

    getAttachmentDataOfProcedure(idAttachment, idProcedure, tokenAuth) {
        return cy.request({
            method: 'DELETE',
            url: `${Config.DEV_API_GATEWAY}/v1/procedurerequests/${idProcedure}/attachments/${idAttachment}`,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            },
        })
    }
}

export const requestDeleteProcedureRequestIdAttachments = new RequestDeleteProcedureRequestIdAttachments();