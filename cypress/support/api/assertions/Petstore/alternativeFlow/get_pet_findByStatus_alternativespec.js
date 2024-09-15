import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsGetPetAlternative extends AssertionsBaseExtended {

    shouldHaveEmptyBody(response) {
        expect(response.body, 'the body should be empty').to.be.an('array').that.is.empty;
    }

    shouldHaveSizeZero(response) {
        expect(response.size, 'the size should be 0').to.equal(0);
    }
}

export const assertionsGetPetAlternative = new AssertionsGetPetAlternative();