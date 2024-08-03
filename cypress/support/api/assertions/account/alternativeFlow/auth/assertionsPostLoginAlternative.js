import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsPostLogin extends AssertionsBaseExtended{

    verifyErrorMessage(response, message) {
        expect(response.body.message, `A mensagem deve ser "${message}"`).to.eq(message);
    }

    verifyErrorDescription(response, description) {
        expect(response.body.description, `A descrição do erro deve ser ${description}`).to.eq(description);
    }
}

export const assertionsPostLoginAlternative = new AssertionsPostLogin();