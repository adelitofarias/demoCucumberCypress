import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended"

class AssertionsPatchProcedurerequestStandard extends AssertionsBaseExtended {

    idShouldBeString(response) {
        expect(response.body.id, `o id deve ser um atributo do tipo string`).to.be.a('string');
    }

    equalId(response, idProcedure){
        expect(response.body.id, `O ID deve ser o mesmo do procedimento cadastrado anteriormente`).to.be.eq(idProcedure);
    }

    equalBreed(response, breed){
        expect(response.body.animal_breed, `A raça do animal deve ser igual a raça utilizada para a atualização`).to.be.eq(breed);
    }
    
}

export const assertionsPatchProcedurerequestStandard = new AssertionsPatchProcedurerequestStandard();