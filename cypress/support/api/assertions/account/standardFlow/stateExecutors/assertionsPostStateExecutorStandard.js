import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsPostStateExecutorStandard extends AssertionsBaseExtended{
    verifyIdExists(response) {
        expect(response.body, `o ID do executante estadual é: ${response.body.id}`).have.property('id');
    }

    verifyStateExecutorEqual(stateExecutor, response) {
        expect(response.body.name, `o nome do executante estadual é: ${response.body.name}`).to.eq(stateExecutor.author);
        expect(response.body.cpf, `o cpf do executante estadual é: ${response.body.cpf}`).to.eq(stateExecutor.cpf.replace(/[^\d]/g, ''));
        expect(response.body.email, `o e-mail do executante estadual é: ${response.body.email}`).to.eq(stateExecutor.email);
        expect(response.body.registration, `a matrícula do executante estadual é: ${response.body.registration}`).to.eq(stateExecutor.matricula);
        expect(response.body.phone, `o número do executante estadual é: ${response.body.phone}`).to.eq(stateExecutor.numero);
        expect(response.body.professional_phone, `o número profissional do executante estadual é: ${response.body.professional_phone}`).to.eq(stateExecutor.phone);
        expect(response.body.phone_extension, `o ramal do executante estadual é: ${response.body.phone_extension}`).to.eq(stateExecutor.ramal);
        expect(response.body.role, `O cargo do executante estadual é: ${response.body.role}`).to.eq(stateExecutor.job);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsPostStateExecutorStandard = new AssertionsPostStateExecutorStandard();