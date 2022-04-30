it("shows the error message when the request fails", () => {
  cy.intercept("http://localhost:3088/api/shopping-list", {
    forceNetworkError: true,
  }).as("shopping-list");

  cy.visit("localhost:3000");

  cy.get("[data-cy=error-msg]").should("be.visible");
});
