import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsPatchExecutionlocalsStandard extends AssertionsBaseExtended {
    verifyExecutionlocalUpdate(novoLocaldeExecucao, response) {
        expect(response.body.name, `O nome é: ${response.body.name}`).to.eq(novoLocaldeExecucao.name);
        expect(response.body.phone, `O número é: ${response.body.phone}`).to.eq(novoLocaldeExecucao.phone);
        expect(response.body.cnpj, `O número cnpj é: ${response.body.cnpj}`).to.eq(novoLocaldeExecucao.cnpj);
        expect(response.body.technichal_responsible_name, `O nome do responsável é: ${response.body.technichal_responsible_name}`).to.eq(novoLocaldeExecucao.technichal_responsible_name);
        expect(response.body.address.street, `O endereço é: ${response.body.address.street}`).to.eq(novoLocaldeExecucao.address.street);
        expect(response.body.address.number, `O número do endereço é: ${response.body.address.number}`).to.eq(novoLocaldeExecucao.address.number);
        expect(response.body.address.complement, `O complemento do endereço é: ${response.body.address.complement}`).to.eq(novoLocaldeExecucao.address.complement);
        expect(response.body.address.district, `O bairro do endereço é: ${response.body.address.district}`).to.eq(novoLocaldeExecucao.address.district);
    }
}

export const assertionsPatchExecutionlocalsStandard = new AssertionsPatchExecutionlocalsStandard();