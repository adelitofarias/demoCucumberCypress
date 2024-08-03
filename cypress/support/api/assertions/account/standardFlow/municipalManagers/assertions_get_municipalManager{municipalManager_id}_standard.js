import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsGetOneMunicipalManagerStandard extends AssertionsBaseExtended {
    verifyMunicipalManagerId(response, idMunicipalManager) {
        expect(response.body.id, `O id do gestor municipal é: ${response.body.id}`).to.eq(idMunicipalManager);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsGetOneMunicipalManagerStandard = new AssertionsGetOneMunicipalManagerStandard();