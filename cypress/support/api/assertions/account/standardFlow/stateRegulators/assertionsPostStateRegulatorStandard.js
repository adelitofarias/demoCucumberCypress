import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsPostStateRegulatorStandard extends AssertionsBaseExtended{
    verifyIdExists(response) {
        expect(response.body, `o ID do regulador estadual é: ${response.body.id}`).have.property('id');
    }

    verifyStateRegulatorEqual(stateRegulator, response) {
        expect(response.body.name, `o nome do regulador estadual é: ${response.body.name}`).to.eq(stateRegulator.author);
        expect(response.body.cpf, `o cpf do regulador estadual é: ${response.body.cpf}`).to.eq(stateRegulator.cpf.replace(/[^\d]/g, ''));
        expect(response.body.email, `o e-mail do regulador estadual é: ${response.body.email}`).to.eq(stateRegulator.email);
        expect(response.body.registration, `a matrícula do regulador estadual é: ${response.body.registration}`).to.eq(stateRegulator.matricula);
        expect(response.body.phone, `o número do regulador estadual é: ${response.body.phone}`).to.eq(stateRegulator.numero);
        expect(response.body.professional_phone, `o número profissional do regulador estadual é: ${response.body.professional_phone}`).to.eq(stateRegulator.phone);
        expect(response.body.phone_extension, `o ramal do regulador estadual é: ${response.body.phone_extension}`).to.eq(stateRegulator.ramal);
        expect(response.body.role, `O cargo do regulador estadual é: ${response.body.role}`).to.eq(stateRegulator.job);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsPostStateRegulatorStandard = new AssertionsPostStateRegulatorStandard();