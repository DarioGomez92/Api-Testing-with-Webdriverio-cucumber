Feature: Login API

Scenario: post to verify login with valid details
    Given he sends a post request to verify login with valid credentials
    Then he should receive a 200 status code for login
    And the response should confirm that user exists

Scenario: post to verify login without email parameter
    Given he sends a post request to verify login without email parameter
    Then he should receive a 400 status code for login
    And the response should indicate a missing parameter error

Scenario: delete to verify login
    Given he sends a delete request to verify login
    Then he should receive a 405 status code for login
    And the response should indicate that method is not supported

Scenario: post to verify login with invalid details
    Given he sends a post request to verify login with invalid details
    Then he should receive a 404 status code for login
    And the response should indicate that user was not found