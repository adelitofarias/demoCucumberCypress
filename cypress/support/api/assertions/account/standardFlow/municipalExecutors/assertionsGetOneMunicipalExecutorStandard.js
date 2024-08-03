import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsGetOneMunicipalExecutorStandard extends AssertionsBaseExtended {
    verifyMunicipalExecutorId(response, idMunicipalExecutor) {
        expect(response.body.id, `O id do executante municipal é: ${response.body.id}`).to.eq(idMunicipalExecutor);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsGetOneMunicipalExecutorStandard = new AssertionsGetOneMunicipalExecutorStandard();