import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsGetMunicipalManagerAlternative extends AssertionsBaseExtended { 

compareResponsesBody(response1, response2) {
  expect(response1.body.length).to.eq(response2.body.length);
}

}

export const assertionsGetMunicipalManagerAlternative = new AssertionsGetMunicipalManagerAlternative();
