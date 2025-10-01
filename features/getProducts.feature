Feature: test products API

Scenario: get all products list
    Given he request the products list
    Then with products he should receive a 200 status code
    And with get the response should contain a list of products

Scenario: post to all product list
    Given he sends a post request to the products list
    Then with products he should receive a 405 status code
    And with post the response should contain an error message

Scenario: get all brands list
    Given he request the brands list
    Then with brands he should receive a 200 status code
    And with get the response should contain a list of brands

Scenario: put to all brands list
    Given he sends a put request to the brands list
    Then with brands he should receive a 405 status code
    And with put the response should contain an error message

Scenario: post to search product
    Given he sends a post request to search for top
    Then with post to search product he should receive a 200 status code
    And the response should contain a list of searched products

Scenario: post to search product without parameter
    Given he sends a post request to search product without parameter
    Then with post to search product he should receive a 400 status code
    And the response should contain a missing parameter message