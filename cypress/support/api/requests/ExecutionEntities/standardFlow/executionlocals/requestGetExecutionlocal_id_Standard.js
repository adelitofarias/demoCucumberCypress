
import { Config } from "@utils/config";


class RequestGetExecutionlocal_id_Standard {

    getExecutionLocalID(token, executionlocal_id){
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/executionlocals/${executionlocal_id}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
        })
    }
}

export const requestGetExecutionlocal_id_Standard = new RequestGetExecutionlocal_id_Standard();