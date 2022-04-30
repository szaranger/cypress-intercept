it("intercepts response body with fixture", () => {
  cy.intercept("http://localhost:3088/api/shopping-list", {
    fixture: "shopping-list",
  }).as("shopping-list");

  cy.visit("localhost:3000");

  cy.get("[data-cy=shopping-list] li").should("have.length", 2);
});
