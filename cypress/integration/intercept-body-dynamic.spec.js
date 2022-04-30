it("intercept body dynamically", () => {
  cy.intercept("http://localhost:3088/api/shopping-list", (req) => {
    req.reply((res) => {
      res.body.items[0] = "Croissants";
    });
  }).as("shopping-list");

  cy.visit("localhost:3000");

  cy.get("[data-cy=shopping-list] li").should("have.length", 4);
});
