import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsPostClinicManagerStandard extends AssertionsBaseExtended{
    verifyIdExists(response) {
        expect(response.body, `o ID do gestor de clínica é: ${response.body.id}`).have.property('id');
    }

    verifyClinicManagerEqual(clinicManager, response) {
        expect(response.body.name, `o nome do gestor de clínica é: ${response.body.name}`).to.eq(clinicManager.author);
        expect(response.body.cpf, `o cpf do gestor de clínica é: ${response.body.cpf}`).to.eq(clinicManager.cpf.replace(/[^\d]/g, ''));
        expect(response.body.email, `o e-mail do gestor de clínica é: ${response.body.email}`).to.eq(clinicManager.email);
        expect(response.body.registration, `a matrícula do gestor de clínica é: ${response.body.registration}`).to.eq(clinicManager.matricula);
        expect(response.body.phone, `o número do gestor de clínica é: ${response.body.phone}`).to.eq(clinicManager.numero);
        expect(response.body.role, `O cargo do gestor de clínica é: ${response.body.role}`).to.eq(clinicManager.job);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsPostClinicManagerStandard = new AssertionsPostClinicManagerStandard();