import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginPage from "../page_objects/loginPage"

Given("I am on the login page", () => {
  loginPage.visit()
})

When("I enter credentials for {string}", (username: string) => {
  cy.fixture("users.json").then((users) => {
    const user = users[username]
    if (user) {
      loginPage.enterUsername(user.username)
      loginPage.enterPassword(user.password)
    } else {
      throw new Error(`User "${username}" not found in fixture.`)
    }
  })
})

When("I click the login button", () => {
  loginPage.clickLoginButton()
})

Then("I should be logged in", () => {
  loginPage.assertLoggedIn()
})

Then("I should see a locked out error message", () => {
  loginPage.assertLockedOutError()
})


Then("I should see a problem with the product images", () => {
    loginPage.assertSameProductImage()
  })

Then("I should see elements with CSS {string}", () => {
    loginPage.assertVisualFailure()
  })