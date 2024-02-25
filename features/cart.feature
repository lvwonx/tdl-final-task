Feature: Correct number counting in cart

    @third
    Scenario: User should see the correct number of items in the cart
        Given I am on home page
        When I select Women menu item
        And I select one of the products
        And I select quantity, size and color
        And I click Add to cart button
        Then I see correct number of items in the cart
