
Feature: Login

    Background:
        Given I am on the login page

    Scenario: Successful login with valid credentials
        When I enter a valid username and password
        And I click the login button
        Then I should be redirected to the home page

    # Scenario: Unsuccessful login with invalid credentials
    #     When I enter an invalid username and password
    #     And I click the login button
    #     Then I should see an error message indicating invalid credentials

    # Scenario: Unsuccessful login with empty fields
    #     When I leave the username and password fields empty
    #     And I click the login button
    #     Then I should see an error message indicating that fields cannot be empty

