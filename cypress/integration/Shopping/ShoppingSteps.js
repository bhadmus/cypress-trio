import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import PageActions from '../../support/PageResources/pageActions'

const pages = new PageActions();

Given (/^I am on the greenKart site$/, function (){
    cy.visit('/');
});
When (/^I click on "([^"]*)" product$/, function (product){
    cy.fixture("shoppingCart").then((shop)=>{
    switch (product) {
        case "Cauli Flower":
            pages.pageWait(shop.cauliFlower);
            pages.clickElement(shop.cauliFlower);
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
        
    }    
    })
});
Then (/^I should see the shopping cart$/, function (){
    cy.fixture('shoppingCart').then((shop)=> {
        pages.pageWait(shop.shoppingCart);
    });
});
And (/^I select the destination country$/, function (){

});
Then (/^I should see a success message$/, function (){

});
