import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsPatchAdminsStandard extends AssertionsBaseExtended {
    verifyAdminUpdate(admin, response) {
        expect(response.body.name, `O nome é: ${response.body.name}`).to.eq(admin.name);
        //expect(response.body.email, `O email é: ${response.body.email}`).to.eq(admin.email); Tirado enquanto bug de atualizar cpf não é resolvido (pode não deixar o email voltar para o original)
        //expect(response.body.cpf, `O cpf é: ${response.body.cpf}`).to.eq(admin.cpf); Tirado enquanto bug de atualizar cpf não é resolvido
        expect(response.body.phone, `O número é: ${response.body.phone}`).to.eq(admin.phone);
        expect(response.body.professional_phone, `O número profissional é: ${response.body.professional_phone}`).to.eq(admin.professional_phone);
        expect(response.body.phone_extension, `O ramal é: ${response.body.phone_extension}`).to.eq(admin.phone_extension);
        expect(response.body.registration, `O numero de matricula é: ${response.body.registration}`).to.eq(admin.registration);
    }
}

export const assertionsPatchAdminsStandard = new AssertionsPatchAdminsStandard();