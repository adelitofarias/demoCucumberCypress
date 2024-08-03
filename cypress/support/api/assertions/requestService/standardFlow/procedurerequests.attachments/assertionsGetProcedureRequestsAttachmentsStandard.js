import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsGetProcedureRequestsAttachmentsStandard extends AssertionsBaseExtended {

    shouldBeArray(response) {
        expect(response.body, `o corpo deve ser do tipo array`).to.be.a('array');
    }

    shouldBeOfRequest(response, idProcedure){ //Deve pertencer a mesma request criada
        for(let i = 0; i < response.body.length; i++) {
            expect(response.body[i].request_id, `o arquivo pertence a esta request: ${response.body[i].request_id}`).to.eq(idProcedure);
        }
    }

    verifyDownloadLink(response, idProcedure){
        for(let i = 0; i < response.body.length; i++) {
            expect(response.body[i].download_link, `o link de donwload do arquivo é: ${response.body[i].download_link}`).to.eq(`/v1/procedurerequests/${idProcedure}/attachments/${response.body[i].id}`);
        }
    }
    
}

export const assertionsGetProcedureRequestsAttachmentsStandard = new AssertionsGetProcedureRequestsAttachmentsStandard();