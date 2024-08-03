import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsGetOneMunicipalRegulatorStandard extends AssertionsBaseExtended {
    verifyMunicipalRegulatorId(response, idMunicipalRegulator) {
        expect(response.body.id, `O id do regulador municipal é: ${response.body.id}`).to.eq(idMunicipalRegulator);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsGetOneMunicipalRegulatorStandard = new AssertionsGetOneMunicipalRegulatorStandard();