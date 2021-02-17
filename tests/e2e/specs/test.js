describe("Home page load test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Vue.js Dogs");
  });

  it("clicks the first dog card", () => {
    cy.get(".dog-card")
      .eq(0)
      .click();
  });
  it("favorites count shows 1", () => {
    cy.get('[data-test="favorites"]').contains("1");
  });
  it("clicks favs page link", () => {
    cy.get('[data-test="favorites"]').click();
  });
  it("has 1 favorite dog card", () => {
    cy.get(".dog-card").should("have.length", 1);
  });
});
