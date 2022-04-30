it("delay request", () => {
  cy.intercept("http://localhost:3088/api/shopping-list", (req) => {
    req.reply((res) => {
      res.delay = 3000;
    });
  }).as("shopping-list");

  cy.visit("localhost:3000");

  cy.get("[data-cy=shopping-list] li").should("have.length", 4);
});
