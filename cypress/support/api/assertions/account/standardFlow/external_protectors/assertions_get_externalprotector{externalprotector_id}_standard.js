import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsGetOneExternalProtectorStandard extends AssertionsBaseExtended {
    verifyExternalProtectorId(response, idExternalProtector) {
        expect(response.body.id, `O id do protetor externo é: ${response.body.id}`).to.eq(idExternalProtector);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsGetOneExternalProtectorStandard = new AssertionsGetOneExternalProtectorStandard();