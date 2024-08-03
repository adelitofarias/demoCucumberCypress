import { Config } from "@utils/config";

class RequestPostExecutionlocalsStandard {

    createExecutionLocal(token, municipality_id, data, cnpj){
        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/executionlocals`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
            body: {
                "name": data.nome,
                "technical_responsible_name": data.nome,
                "cnpj": cnpj.replace(/[^\d]/g, ''),
                "address": {
                    "zip_code": data.cep,
                    "street": data.endereco,
                    "number": data.numero.toString(),
                    "district": "PB",
                    "city": data.cidade
                },
                "municipality_id": municipality_id,
                "type": "execution_local_municipal"
            }
        })
    }

    postExecutionLocals(token, data){
        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/executionlocals`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
            body: data
        })
    }

    getMunicipalities(tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/municipalities`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            },
        })
    }

}

export const requestPostExecutionlocalsStandard = new RequestPostExecutionlocalsStandard();