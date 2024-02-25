Feature: Searching a product

    @second
    Scenario Outline: User should see only results that he searched
        Given I am on home page
        When I input <keyword> in searching form
        And I click on searching button
        And I see confirmation about searching <keyword> element
        Then I see only <keyword> products at searching page

    Examples: 
        | keyword   |
        | "T-shirt" |
