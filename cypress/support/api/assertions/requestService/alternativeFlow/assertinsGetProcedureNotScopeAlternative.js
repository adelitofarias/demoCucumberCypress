import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended"

class AssertionsGetProcedureNotScopeAlternative extends AssertionsBaseExtended {

    verifyErrorDescription(response, message) {
        expect(response.body.description, `A mensagem de erro deve ser igual a esperada`).to.eq(message);
    }

}

export const assertionsGetProcedureNotScopeAlternative = new AssertionsGetProcedureNotScopeAlternative();