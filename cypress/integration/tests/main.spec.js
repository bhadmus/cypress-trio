import PageActions from '../../support/PageResources/pageActions'
const pages = new PageActions();

context('Buy items on greenKart', ()=>{
    beforeEach(()=>{
        cy.visit('/');
    });
    it.only('Buy Cauliflower', ()=>{
        // Launch the wakanow site
        
        // Click on the Flight type to pick Round Trip
       cy.fixture("shoppingCart").then((shop)=>{
       pages.pageWait(shop.cauliFlower);
       pages.clickElement(shop.cauliFlower);
       pages.clickElement(shop.cartIcon);
       pages.pageWait(shop.shoppingCart);
       cy.get(shop.checkoutBtn).contains(shop.checkOut).click();
       cy.wait(3000)
       pages.clickElement(shop.cartButton);
       cy.get(shop.selectCountry).select(shop.country);
       pages.clickElement(shop.agreeBtn);
       pages.clickElement(shop.proceedBtn);
       
       });
    });

    it('Buy Tomato', ()=>{
        // Launch the wakanow site
        
        // Click on the Flight type to pick Round Trip
       cy.fixture("shoppingCart").then((shop)=>{
       pages.pageWait(shop.tomato);
       pages.clickElement(shop.tomato);
       pages.clickElement(shop.cartIcon);
       pages.pageWait(shop.shoppingCart);
       cy.get(shop.checkoutBtn).contains(shop.checkOut).click();
       cy.wait(3000)
       pages.clickElement(shop.cartButton);
       cy.get(shop.selectCountry).select('Nigeria');
       pages.clickElement(shop.agreeBtn);
       pages.clickElement(shop.proceedBtn);
       
       });
    });
});