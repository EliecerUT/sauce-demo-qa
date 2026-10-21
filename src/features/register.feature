@mode:serial
Feature: Register a new user

    Scenario: Register a new user with valid credentials
        Given I am on the registration page
        When I fill in the registration form with valid credentials
            | First name    | Test                |
            | Last name     | QA                  |
            | Email address | test_qa@example.com |
            | Password      | Qa!Toolshop#2026x   |
            | Date of Birth | 1990-01-01          |
            | House number  | 123                 |
            | City          | Manizales           |
            | Postal code   | 12345               |
            | Country       | Colombia            |
            | Phone         | 1234567890          |
            | Street        | Main Street         |
            | State         | Caldas              |
        And I submit the registration form
        Then I should see a success message indicating that the user has been registered successfully

    Scenario: Register a new user with an already registered email
        Given I am on the registration page
        When I fill in the registration form with an already registered email
        And I submit the registration form
        Then I should see an error message indicating that the email is already registered
