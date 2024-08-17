import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsGetPetStandard extends AssertionsBaseExtended {

    statusShouldBeString(response) {
        expect(response.body[0].status, `o status deve ser um atributo do tipo string`).to.be.a('string');
    }

    firstPetStatus(response, statusValido) {
        expect(response.body[0].status, `o status deve o mesmo passado na consulta`).to.eq(statusValido);
    }

    validateAllPetsHaveValidStatus(response, statusValido){
        response.body.forEach((pet) => {
            expect(statusValido).to.include(pet.status); // Verifica se o status do pet é um dos valores válidos
          });
    }


}

export const assertionsGetPetStandard = new AssertionsGetPetStandard();