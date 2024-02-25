Feature: Register Before Order

    @first
    Scenario: User needs to create an account before finishing the order
        Given I am on home page
        When I select Women menu item
        And I select one of the products
        And I select quantity, size and color
        And I click Add to cart button
        And I click Proceed to checkout button
        Then I see a message "Create an account"
