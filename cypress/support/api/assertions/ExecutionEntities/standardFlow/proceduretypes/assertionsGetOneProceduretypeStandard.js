const { AssertionsBaseExtended } = require("@utils/assertions/assertionsBaseExtended");

class AssertionsGetOneProceduretypeStandard extends AssertionsBaseExtended {

    IdEqualTo(response, idProcedureType){
        expect(response.body.id, `O ID retornado deve ser igual ao ID do Executante municipal criado anteriormente`).to.be.eq(idProcedureType);
    }
}

export const assertionsGetOneProceduretypeStandard = new AssertionsGetOneProceduretypeStandard();