import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended"

class AssertionsPutProcedureRequestStatusStandard extends AssertionsBaseExtended {

    idShouldBeString(response) {
        expect(response.body.id, `O ID deve ser um atributo do tipo string`).to.be.a('string');
    }

    equalId(response, idProcedure) {
        expect(response.body.id, `O ID deve ser o mesmo do procedimento cadastrado anteriormente`).to.be.eq(idProcedure);
    }

    equalStatus(response, status) {
        expect(response.body.status, `O status deve ser igual ao utilizada para a atualização`).to.be.eq(status);
    }

}

export const assertionsPutProcedureRequestStatusStandard = new AssertionsPutProcedureRequestStatusStandard();