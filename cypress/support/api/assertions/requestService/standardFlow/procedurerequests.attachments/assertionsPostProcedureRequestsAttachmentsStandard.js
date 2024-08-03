import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsPostProcedureRequestsAttachmentsStandard extends AssertionsBaseExtended {

    idShouldBeString(response) {
        for(let i = 0; i < response.length; i++) {
            expect(response[i].id, `o id deve ser um atributo do tipo string`).to.be.a('string');
        }
    }

    verifyDownloadLink(response, idProcedure){
        for(let i = 0; i < response.length; i++) {
            expect(response[i].download_link, `o link de donwload do arquivo é: ${response[i].download_link}`).to.eq(`/v1/procedurerequests/${idProcedure}/attachments/${response[i].id}`);
        }
    }
    
}

export const assertionsPostProcedureRequestsAttachmentsStandard = new AssertionsPostProcedureRequestsAttachmentsStandard();