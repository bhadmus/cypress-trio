import PageActions from '../../support/PageResources/pageActions'
const pages = new PageActions();
context('Scenarios for Booking Flights on Wakanow', ()=>{
    it('Testing Round Trip', ()=>{
        // Launch the wakanow site
        
        // Click on the Flight type to pick Round Trip
       cy.fixture("bookFlight").then((bf)=>{
       cy.visit('/');
       pages.pageWait(bf.flightType);
       pages.clickElement(bf.flightType);
       pages.clickElement(bf.roundTrip);
       cy.scrollTo('top');
       pages.clickElement(bf.flightGroup);
       pages.clickElement(bf.businessClass); 
       cy.scrollTo('top');
     
          
       })
    })
})