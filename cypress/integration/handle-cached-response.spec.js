it("handle a cached response", () => {
  cy.intercept("http://localhost:3088/api/shopping-list", (req) => {
    delete req.headers["if-none-match"];
  }).as("shopping-list");

  cy.visit("localhost:3000");

  cy.wait("@shopping-list").its("response.statusCode").should("eq", 200);
});
