it("intercepts status code", () => {
  cy.intercept("http://localhost:3088/api/shopping-list", {
    statusCode: 500,
    body: {
      message: "Something went wrong in the server!",
    },
  }).as("shopping-list");

  cy.visit("localhost:3000");

  cy.get("[data-cy=status-code]").should("be.visible");
  cy.get("[data-cy=status-msg]").should("be.visible");
});
