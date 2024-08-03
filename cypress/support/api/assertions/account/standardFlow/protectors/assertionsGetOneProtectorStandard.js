import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsGetOneProtectorStandard extends AssertionsBaseExtended {
    verifyProtectorId(response, idProtector) {
        expect(response.body.id, `O id do protetor é: ${response.body.id}`).to.eq(idProtector);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsGetOneProtectorStandard = new AssertionsGetOneProtectorStandard();