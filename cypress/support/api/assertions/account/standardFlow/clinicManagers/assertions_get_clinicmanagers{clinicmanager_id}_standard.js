import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsGetOneClinicManagerStandard extends AssertionsBaseExtended {
    verifyClinicManagerId(response, idClinicManager) {
        expect(response.body.id, `O id do gestor de clínica é: ${response.body.id}`).to.eq(idClinicManager);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsGetOneClinicManagerStandard = new AssertionsGetOneClinicManagerStandard();