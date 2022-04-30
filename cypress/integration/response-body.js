it("intercepts response body", () => {
  cy.intercept("http://localhost:3088/api/shopping-list", {
    body: {
      items: ["Jam", "Bread"],
    },
  }).as("shopping-list");

  cy.visit("localhost:3000");

  cy.get("[data-cy=shopping-list] li").should("have.length", 2);
});
