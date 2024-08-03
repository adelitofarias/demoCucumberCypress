import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsGetOneStateRegulatorStandard extends AssertionsBaseExtended {
    verifyStateRegulatorId(response, idStateRegulator) {
        expect(response.body.id, `O id do regulador estadual é: ${response.body.id}`).to.eq(idStateRegulator);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsGetOneStateRegulatorStandard = new AssertionsGetOneStateRegulatorStandard();