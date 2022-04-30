it("intercepts once", () => {
  cy.intercept("http://localhost:3088/api/shopping-list", (req) => {
    req.query = { done: "true" };
  }).as("shopping-list");

  cy.visit("localhost:3000");

  cy.get("[data-cy=shopping-list] li").should("have.length", 3);
});
