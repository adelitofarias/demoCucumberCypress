import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsGetAdminsAdminIDStandard extends AssertionsBaseExtended {
    verifyAdminId(response, idAdmin) {
        expect(response.body.id, `O id do admin é: ${response.body.id}`).to.eq(idAdmin);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsGetAdminsAdminIDStandard = new AssertionsGetAdminsAdminIDStandard();