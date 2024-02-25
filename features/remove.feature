Feature: Removing from the cart

    @fourth
    Scenario: The user removes an item from the cart, and it should be empty
        Given I am on home page
        When I select Women menu item
        And I select one of the products
        And I select quantity, size and color
        And I click Add to cart button
        And I close the confirmation of order window
        And I click on the cart image
        And I click on item removing button
        Then I see a message (empty)