# TestDevLab Winter School Web Automation and WebDriverIO Final Task

## Run the tests

To run the tests, run command:
```
npm run wdio
```

## Run the exact test

To run the exact test, run command:
```
npm run tag "your_tag"
```

### There are 4 tags:
### @first:
Test Case 1
When an unregistered user tries to proceed with checkout after ordering some item, the page
should ask to create an account or sign in first, before letting the user finish the order
### @second:
Test Case 2
Users should be able to search a product using the search box at the top of the page. For
example, searching for "Blouse" should only find results containing text "Blouse".
### @third:
Test Case 3
The cart should correctly show the number of items. When a user adds one product to a cart,
the counter on the cart should increase by 1.
### @fourth:
Test Case 4
Similarly, when there is 1 item in the cart, if the user removes an item from the cart, it now
should display that there are no items anymore.

## A bit of explanation

I wanted to make fourth TC with .alert-warning selector and message "Your shopping cart is empty." but there was some magic ;)

In the second TC (searching) were one interesting thing as well. Couldn't make products counting from productsPage. Tried a lot of features, but it doesn't work. Maybe my bad, maybe it's impossible (no)

## Log file

Added a log file to git. There was one problem in fourth Test Case, done it a bit "weird", but it works. I spent a couple of hours to figure out why it doesn't work, but I didn't find any reasons.

##### Author: Marks Klescs
