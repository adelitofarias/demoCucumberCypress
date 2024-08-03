import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsGetProcedureIdStandard extends AssertionsBaseExtended {

    idShouldBeString(response) {
        expect(response.body.id, `o id deve ser um atributo do tipo string`).to.be.a('string');
    }

    equalId(response, idProcedure){
        expect(response.body.id, `O ID deve ser o mesmo do procedimento cadastrado anteriormente`).to.be.eq(idProcedure);
    }
}

export const assertionsGetProcedureIdStandard = new AssertionsGetProcedureIdStandard();