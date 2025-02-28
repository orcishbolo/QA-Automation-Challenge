import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginPage from "../page_objects/loginPage"



Given("I visit the SauceDemo login page", () => {
  loginPage.visit()
})

When("Click the login button", () => {
    cy.get("[data-test=login-button]").click();
});

Then("I should see the error message {string}", (errorMessage) => {
  cy.get('[data-test="error"]').should("contain", errorMessage);
});

When("I type a random username", () => {
    cy.get("[data-test=username]").type(`randomUser${Math.random()}`);
});

When("I type a random password", () => {
    cy.get("[data-test=password]").type(`randomPassword${Math.random()}`);
});