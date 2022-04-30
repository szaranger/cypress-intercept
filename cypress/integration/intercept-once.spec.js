it("intercepts once", () => {
  cy.intercept(
    { method: "GET", url: "http://localhost:3088/api/shopping-list", times: 1 },
    {
      body: {
        items: ["Jam", "Bread"],
      },
    }
  ).as("shopping-list");

  cy.visit("localhost:3000");

  cy.get("[data-cy=shopping-list] li").should("have.length", 2);

  cy.visit("localhost:3000");

  cy.get("[data-cy=shopping-list] li").should("have.length", 4);
});
