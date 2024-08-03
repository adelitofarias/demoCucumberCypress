import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsPatchClinicManagerStandard extends AssertionsBaseExtended {
    verifyClinicManagerUpdate(clinicManager, response) {
        expect(response.body.name, `o nome do gestor de clínica é: ${response.body.name}`).to.eq(clinicManager.name);
        expect(response.body.cpf, `o cpf do gestor de clínica é: ${response.body.cpf}`).to.eq(clinicManager.cpf.replace(/[^\d]/g, ''));
        expect(response.body.email, `o e-mail do gestor de clínica é: ${response.body.email}`).to.eq(clinicManager.email);
        expect(response.body.registration, `a matrícula do gestor de clínica é: ${response.body.registration}`).to.eq(clinicManager.registration);
        expect(response.body.phone, `o número do gestor de clínica é: ${response.body.phone}`).to.eq(clinicManager.phone);
        expect(response.body.role, `O cargo do gestor de clínica é: ${response.body.role}`).to.eq(clinicManager.role);
    }
}

export const assertionsPatchClinicManagerStandard = new AssertionsPatchClinicManagerStandard();