import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import PageActions from '../../support/PageResources/pageActions'

const pages = new PageActions();

Given (/^I am on the greenKart site$/, function (){
    cy.visit('/');
});
When ('I click on {string} product', function (string){
    cy.fixture("shoppingCart").then((shop)=>{
    switch (string) {
        case "Cauli Flower":
            pages.pageWait(shop.cauliFlower);
            pages.clickElement(shop.cauliFlower);
            break
        case "Tomato":
            pages.pageWait(shop.tomato);
            pages.clickElement(shop.tomato);
    }    
    });

});
And (/^I click on "([^"]*)" button$/, function (button){
    cy.fixture("shoppingCart").then((shop)=>{
    switch (button) {
        case "cart":
            pages.clickElement(shop.cartIcon);
            break;
        case "checkout":
            cy.get(shop.checkoutBtn).contains(shop.checkOut).click();
            break;
        case "save cart":
            cy.wait(3000)
            pages.clickElement(shop.cartButton);
            break;
        case "agree":
            pages.clickElement(shop.agreeBtn);
            break;
        case "proceed":
            pages.clickElement(shop.proceedBtn);

    }    
    })
});

Then (/^I should see the shopping cart$/, function (){
    //cy.fixture('shoppingCart').then((shop)=> {
    cy.fixture('shoppingCart').then(function(shop) {
        pages.pageWait(shop.shoppingCart);
    });
});

And (/^I select the destination country$/, function (){
    cy.fixture('shoppingCart').then((shop)=> {
    pages.pageWait(shop.selectCountry);
    cy.get(shop.selectCountry).select(shop.country);
    });
});

Then (/^I should see a success message$/, function (){
    cy.fixture('shoppingCart').then((shop)=>{
    pages.viewElementText(shop.messageBanner, shop.successMessage)    
    });

});