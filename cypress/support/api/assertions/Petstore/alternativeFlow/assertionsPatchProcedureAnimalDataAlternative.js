import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended"

class AssertionsPatchProcedureAnimalDataAlternative extends AssertionsBaseExtended {
    verifyErrorMessage(response, message) {
        expect(response.body.message, `A mensagem de erro foi ${response.body.message}`).to.eq(message)
    }
    verifyErrorDescription(response, description) {
        expect(response.body.description, `A descrição de erro foi ${response.body.description}`).to.eq(description)
    }
}

export const assertionsPatchProcedureAnimalDataAlternative = new AssertionsPatchProcedureAnimalDataAlternative();