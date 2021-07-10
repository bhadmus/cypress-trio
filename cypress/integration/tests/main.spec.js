import PageActions from '../../support/PageResources/pageActions'
const pages = new PageActions();
context('Scenarios for Booking Flights on Wakanow', ()=>{
    it('Testing Round Trip', ()=>{
        // Launch the wakanow site
        
        // Click on the Flight type to pick Round Trip
       cy.fixture("shoppingCart").then((shop)=>{
       cy.visit('/');
       pages.pageWait(shop.shopItemButton);
       pages.clickElement(shop.shopItemButton);
       pages.clickElement(shop.cartIcon);
       pages.pageWait(shop.shoppingCart);
       cy.get(shop.checkoutBtn).contains(shop.checkOut).click();
       cy.wait(3000)
       pages.clickElement(shop.cartButton);
       cy.get(shop.selectCountry).select('Nigeria');
       pages.clickElement(shop.agreeBtn);
       pages.clickElement(shop.proceedBtn);
       
     
          
       })
    })
})