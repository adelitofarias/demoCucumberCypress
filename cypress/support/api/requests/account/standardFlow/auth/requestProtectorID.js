import { util } from '@utils/util'
import { Config } from "@utils/config";

class RequestProtectorID {

  idProtector(email, senha) {
    return cy.getToken(email, senha).then(token => {
      const ID = util.decodeJWTToken(token.body.access_token);
      return ID; // Retornar o ID
    });
  }

  idAdmin() {
    return cy.getToken(Config.USER_ADMIN, Config.PASS_ADMIN).then(token => {
      const ID = util.decodeJWTToken(token.body.access_token);
      return ID; // Retornar o ID
    });
  }

  idMunicipalRegulator() {
    return cy.getToken(Config.USER_REGULADOR_MUNICIPAL_BACK_0, Config.PASS_DEFAULT_BACK).then(token => {
      const ID = util.decodeJWTToken(token.body.access_token);
      return ID; // Retornar o ID
    });
  }

  idMunicipalExecutor() {
    return cy.getToken(Config.USER_EXECUTANTE_MUNICIPAL_BACK_0, Config.PASS_DEFAULT_BACK).then(token => {
      const ID = util.decodeJWTToken(token.body.access_token);
      return ID; // Retornar o ID
    });
  }

  idStateRegulator() {
    return cy.getToken(Config.USER_REGULADOR_ESTADUAL_BACK_0, Config.PASS_DEFAULT_BACK).then(token => {
      const ID = util.decodeJWTToken(token.body.access_token);
      return ID; // Retornar o ID
    });
  }

  idStateExecutor() {
    return cy.getToken(Config.USER_EXECUTANTE_ESTADUAL_BACK_0, Config.PASS_DEFAULT_BACK).then(token => {
      const ID = util.decodeJWTToken(token.body.access_token);
      return ID; // Retornar o ID
    });
  }

  idMunicipalManager() {
    return cy.getToken(Config.USER_GESTOR_MUNICIPAL_BACK_0, Config.PASS_DEFAULT_BACK).then(token => {
      const ID = util.decodeJWTToken(token.body.access_token);
      return ID; // Retornar o ID
    });
  }

  idClinicManager() {
    return cy.getToken(Config.USER_GESTOR_CLINICA_BACK_0, Config.PASS_DEFAULT_BACK).then(token => {
      const ID = util.decodeJWTToken(token.body.access_token);
      return ID; // Retornar o ID
    });
  }
}

export const requestProtectorID = new RequestProtectorID();
