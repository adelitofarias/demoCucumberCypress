import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsGetProcedureRequestsIdAttachmentsStandard extends AssertionsBaseExtended {

    bodyShouldBeNotNull(response) {
        expect(response.body, `o corpo da resposta deve ser não nulo`).to.be.not.null;
    }    
}

export const assertionsGetProcedureRequestsIdAttachmentsStandard = new AssertionsGetProcedureRequestsIdAttachmentsStandard();