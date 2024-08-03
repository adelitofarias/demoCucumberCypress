const { AssertionsBaseExtended } = require("@utils/assertions/assertionsBaseExtended");

class AssertionsPostExecutionlocalsStandard extends AssertionsBaseExtended {

    verifyIdExists(response) {
        expect(response.body, `o ID do local de execução é: ${response.body.id}`).have.property('id');
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsPostExecutionlocalsStandard = new AssertionsPostExecutionlocalsStandard();