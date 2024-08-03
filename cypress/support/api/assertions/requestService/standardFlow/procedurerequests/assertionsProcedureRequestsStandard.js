import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsProcedureRequestsStandard extends AssertionsBaseExtended {

    idShouldBeString(response) {
        expect(response.body.id, `o id deve ser um atributo do tipo string`).to.be.a('string');
    }

    genderShouldBeEq(response, gender){
        expect(response.body.animal_gender, `O gênero do animal deve ser igual ao cadastrado`).to.be.eq(gender);
    }

    specieShoulBeEq(response, specie){
        expect(response.body.animal_specie, `A espécie do animal deve ser igual ao cadastrado`).to.be.eq(specie);
    }

    breedShouldBeEq(response, breed){
        expect(response.body.animal_breed, `A raça do animal deve ser igual ao cadastrado`).to.be.eq(breed);
    }

    nameShouldBeEq(response, name){
        expect(response.body.name, `O procedimento do animal deve ser igual ao cadastrado`).to.be.eq(name);
    }
}

export const assertionsProcedureRequestsStandard = new AssertionsProcedureRequestsStandard();