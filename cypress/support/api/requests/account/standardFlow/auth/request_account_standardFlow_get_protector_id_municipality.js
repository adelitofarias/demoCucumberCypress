import { Config } from "@utils/config";

class Request_account_standardFlow_get_protector_id_municipality {


    dadosProtetor(token, idProtector){
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/protectors/${idProtector}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            }
        })
    }

}

export const request_account_standardFlow_get_protector_id_municipality= new Request_account_standardFlow_get_protector_id_municipality();