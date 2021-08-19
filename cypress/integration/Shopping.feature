# Created by Ademola Bhadmus on 14.08.2021
Feature: Shopping Test

    Testing two shopping scenarios

   Scenario: A user should be able to shop for cauli flower successfully
     Given I am on the greenKart site
     When I click on "Cauli Flower" product
     And I click on "cart" button
     Then I should see the shopping cart
     When I click on "checkout" button
     And I click on "save cart" button
     And I select the destination country
     And I click on "agree" button
     And I click on "proceed" button
     Then I should see a success message

  Scenario: A user should be able to shop for Tomato  successfully
     Given I am on the greenKart site
     When I click on "Tomato" product
     And I click on "cart" button
     Then I should see the shopping cart
     When I click on "checkout" button
     And I click on "save cart" button
     And I select the destination country
     And I click on "agree" button
     And I click on "proceed" button
     Then I should see a success message