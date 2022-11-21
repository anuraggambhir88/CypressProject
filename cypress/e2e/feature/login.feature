@regression
Feature: Checking login module

    Scenario: Login User into System success
        Given I visit the webdriver University
        When I enter the username webdriver
        And I enter the password webdriver123
        And I click on login
        Then I should be presented with validation succeeded


    Scenario: Login User into System failed
        Given I visit the webdriver University
        When I enter the username webdriver123
        And I enter the password webdriver123
        And I click on login
        Then I should be presented with validation failed

    @login
    Scenario Outline: Login user into System
        Given I visit the webdriver University
        When I enter the username <username>
        And I enter the password <password>
        And I click on login
        Then I should be presented with <message>

        Examples:
            | username     | password     | message              |
            | webdriver    | webdriver123 | validation succeeded |
            | webdriver123 | webdriver123 | validation failed    |




