import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsPatchMunicipalExecutorStandard extends AssertionsBaseExtended {
    verifyMunicipalExecutorUpdate(executorUpdate, response) {
        expect(response.body.name, `O nome é: ${response.body.name}`).to.eq(executorUpdate.name);
        expect(response.body.email, `O email é: ${response.body.email}`).to.eq(executorUpdate.email);
        expect(response.body.cpf, `O cpf é: ${response.body.cpf}`).to.eq(executorUpdate.cpf);
        expect(response.body.phone, `O número é: ${response.body.phone}`).to.eq(executorUpdate.phone);
        expect(response.body.professional_phone, `O número profissional é: ${response.body.professional_phone}`).to.eq(executorUpdate.professional_phone);
        expect(response.body.phone_extension, `O ramal é: ${response.body.phone_extension}`).to.eq(executorUpdate.phone_extension);
        expect(response.body.role, `O cargo é: ${response.body.role}`).to.eq(executorUpdate.role);
        expect(response.body.registration, `O numero de matricula é: ${response.body.registration}`).to.eq(executorUpdate.registration);
        expect(response.body.responsible_sector, `O setor é: ${response.body.responsible_sector}`).to.eq(executorUpdate.responsible_sector);
    }
}

export const assertionsPatchMunicipalExecutorStandard = new AssertionsPatchMunicipalExecutorStandard();