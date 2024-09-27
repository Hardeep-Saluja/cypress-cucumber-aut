Feature: Buying Product from GreenKart

    Scenario: Verify user can order product from GreenKart
    Given a user is in GreenKart page
    When user place order for "Strawberry" from cart
    Then order is placed successfullyn