import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsPatchStateExecutorStandard extends AssertionsBaseExtended {
    verifyStateExecutorUpdate(executanteUpdate, response) {
        expect(response.body.name, `O nome é: ${response.body.name}`).to.eq(executanteUpdate.name);
        expect(response.body.email, `O email é: ${response.body.email}`).to.eq(executanteUpdate.email);
        expect(response.body.cpf, `O cpf é: ${response.body.cpf}`).to.eq(executanteUpdate.cpf);
        // expect(response.body.phone, `O número é: ${response.body.phone}`).to.eq(executanteUpdate.numero);
        // expect(response.body.professional_phone, `O número profissional é: ${response.body.professional_phone}`).to.eq(executanteUpdate.numeroProf);
        // expect(response.body.phone_extension, `O ramal é: ${response.body.phone_extension}`).to.eq(executanteUpdate.ramal);
        expect(response.body.role, `O cargo é: ${response.body.role}`).to.eq(executanteUpdate.role);
        expect(response.body.registration, `O numero de matricula é: ${response.body.registration}`).to.eq(executanteUpdate.registration);
    }
}

export const assertionsPatchStateExecutorStandard = new AssertionsPatchStateExecutorStandard();