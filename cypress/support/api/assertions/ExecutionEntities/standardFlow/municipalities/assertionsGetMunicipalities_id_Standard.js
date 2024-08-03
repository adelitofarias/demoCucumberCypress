const { AssertionsBaseExtended } = require("@utils/assertions/assertionsBaseExtended");

class AssertionsGetMunicipalities_Id_Standard extends AssertionsBaseExtended {
    verifyIdExists(response) {
        expect(response.id, `o ID do município é: ${response.id}`).have.property('id');
    }

    verifyTimeStampsExists(response) {
        expect(response, `created_at: ${response.created_at}`).have.property('created_at');
        expect(response, `updated_at: ${response.updated_at}`).have.property('updated_at');
        expect(response, `name: ${response.name}`).have.property('name');
        expect(response, `health_region: ${response.name}`).have.property('health_region');
        expect(response, `macro_region: ${response.name}`).have.property('macro_region');
    }
}

export const assertionsGetMunicipalities_Id_Standard = new AssertionsGetMunicipalities_Id_Standard();