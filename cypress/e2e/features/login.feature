Feature: User Login

  Scenario: Successful Login - Standard User
    Given I am on the login page
    When I enter credentials for "standard_user"
    And I click the login button
    Then I should be logged in

  Scenario: Locked Out User Login
    Given I am on the login page
    When I enter credentials for "locked_out_user"
    And I click the login button
    Then I should see a locked out error message

  Scenario: Problem User Login
    Given I am on the login page
    When I enter credentials for "problem_user"
    And I click the login button
    Then I should be logged in
    And I should see a problem with the product images

  Scenario: Performance Glitch User Login
    Given I am on the login page
    When I enter credentials for "performance_glitch_user"
    And I click the login button
    Then I check for a performance glitch
    And I should be logged in

  Scenario: Error User Login
    Given I am on the login page
    When I enter credentials for "error_user"
    And I click the login button
    Then I should be logged in

  Scenario: Visual User Login
    Given I am on the login page
    When I enter credentials for "visual_user"
    And I click the login button
    Then I should be logged in
    And I should see elements with CSS ".visual_failure"