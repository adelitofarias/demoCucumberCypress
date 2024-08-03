import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsGetOneStateExecutorStandard extends AssertionsBaseExtended {
    verifyStateExecutorId(response, idStateExecutor) {
        expect(response.body.id, `O id do executante estadual é: ${response.body.id}`).to.eq(idStateExecutor);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsGetOneStateExecutorStandard = new AssertionsGetOneStateExecutorStandard();