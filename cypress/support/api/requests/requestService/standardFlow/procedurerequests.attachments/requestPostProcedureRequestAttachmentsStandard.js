import { Config } from "@utils/config";

class RequestPostProcedureRequestAttachments {

    postProcedureRequestsAttachments(idProcedure, tokenAuth) {
            return cy.fixture('image.jpeg', 'binary').then((image) => {
                return cy.fixture('file1.pdf', 'binary').then((file1) => {
                    return cy.fixture('file2.pdf', 'binary').then((file2) => {
                        return cy.fixture('file3.pdf', 'binary').then((file3) => {

                            const formData = new FormData();

                            formData.append('attachment', Cypress.Blob.binaryStringToBlob(image, 'image/jpeg'), 'image.jpeg');
                            formData.append('attachment', Cypress.Blob.binaryStringToBlob(file1, 'application/pdf'), 'file1.pdf');
                            formData.append('attachment', Cypress.Blob.binaryStringToBlob(file2, 'application/pdf'), 'file2.pdf');
                            formData.append('attachment', Cypress.Blob.binaryStringToBlob(file3, 'application/pdf'), 'file3.pdf');
                            formData.append('type', 'animal_photo;attachment;attachment;attachment;');

                            console.log(formData)
                            return cy.request({
                                method: 'POST',
                                url: `${Config.DEV_API_GATEWAY}/v1/procedurerequests/${idProcedure}/attachments`,
                                headers: {
                                    'Accept': 'application/json',
                                    'Authorization': `Bearer ${tokenAuth}`
                                },
                                failOnStatusCode: false,
                                timeout: 10000,
                                body: formData
                            });
                        });
                    });
                });
            });
    }

}

export const requestPostProcedureRequestAttachments = new RequestPostProcedureRequestAttachments();