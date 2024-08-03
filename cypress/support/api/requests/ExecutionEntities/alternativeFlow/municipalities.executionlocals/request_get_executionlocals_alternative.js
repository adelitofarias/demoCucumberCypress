class Request_get_executionlocals_alternative {
  get_executionlocals_alternative(token, url) {
   return cy.request({
      methods: "GET",
      url: url,
      failOnStatusCode: false,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
    }); 
  }
}

export const request_get_executionlocals_alternative =
  new Request_get_executionlocals_alternative();
