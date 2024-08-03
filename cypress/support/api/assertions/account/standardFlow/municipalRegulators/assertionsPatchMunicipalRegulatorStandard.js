import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsPatchMunicipalRegulatorStandard extends AssertionsBaseExtended {
    verifyMunicipalRegulatorUpdate(reguladorUpdate, response) {
        expect(response.body.name, `O nome é: ${response.body.name}`).to.eq(reguladorUpdate.name);
        expect(response.body.email, `O email é: ${response.body.email}`).to.eq(reguladorUpdate.email);
        expect(response.body.cpf, `O cpf é: ${response.body.cpf}`).to.eq(reguladorUpdate.cpf);
        // expect(response.body.phone, `O número é: ${response.body.phone}`).to.eq(reguladorUpdate.numero);
        // expect(response.body.professional_phone, `O número profissional é: ${response.body.professional_phone}`).to.eq(reguladorUpdate.numeroProf);
        // expect(response.body.phone_extension, `O ramal é: ${response.body.phone_extension}`).to.eq(reguladorUpdate.ramal);
        expect(response.body.role, `O cargo é: ${response.body.role}`).to.eq(reguladorUpdate.role);
        expect(response.body.registration, `O numero de matricula é: ${response.body.registration}`).to.eq(reguladorUpdate.registration);
        expect(response.body.responsible_sector, `O setor é: ${response.body.responsible_sector}`).to.eq(reguladorUpdate.responsible_sector);
    }
}

export const assertionsPatchMunicipalRegulatorStandard = new AssertionsPatchMunicipalRegulatorStandard();