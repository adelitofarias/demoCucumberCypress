import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsPostForgotStandard extends AssertionsBaseExtended {
    verifyMessage(response, message) {
        expect(response.body.message, `A mensagem deve ser "${message}"`).to.eq(message);
    }

}

export const assertionsPostForgotStandard = new AssertionsPostForgotStandard();