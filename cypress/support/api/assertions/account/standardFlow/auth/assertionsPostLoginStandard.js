import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsPostLoginStandard extends AssertionsBaseExtended {

    verifyTokenIsString(response) {
        expect(response.body.access_token).to.be.a('string');
    }

}

export const assertionsPostLoginStandard = new AssertionsPostLoginStandard();