Feature: Invalid Login

  Scenario: Empty Login Credentials
    Given I visit the SauceDemo login page
    When Click the login button
    Then I should see the error message "Epic sadface: Username is required"

  Scenario: Missing Password
    Given I visit the SauceDemo login page
    When I type a random username
    And Click the login button
    Then I should see the error message "Epic sadface: Password is required"

  Scenario: Invalid Credentials
    Given I visit the SauceDemo login page
    When I type a random username
    And I type a random password
    And Click the login button
    Then I should see the error message "Epic sadface: Username and password do not match any user in this service"