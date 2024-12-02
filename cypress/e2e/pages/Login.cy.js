/// <reference types = "cypress" />
import 'cypress-xpath';


describe('Demoblaze', () => {

    beforeEach('Launch', () => {

        cy.visit('https://www.demoblaze.com/');
       // cy.wait(8000);
        //cy.title().should('eq','Home');
    
    })

    it('add items', () => {
        cy.xpath("//a[normalize-space()='Samsung galaxy s6']").click();
        // add to cart
        cy.xpath("//a[normalize-space()='Add to cart']").click();
        // click on cart
        cy.xpath("//a[@id='cartur']").should('be.visible').and('contain','Cart')
        cy.xpath("//a[@id='cartur']").click()
        // place order
        const placeorder="//button[normalize-space()='Place Order']"
        cy.xpath(placeorder).should('be.visible').click();
        const price="//td[normalize-space()='360']"
       // const placeOrderButton = "//button[normalize-space()='Place Order']";

        cy.xpath(price)
          .invoke('text')
          .then((text) => {
            cy.log('Price is:', text); // Ensure this line is correct
          });
          // enter  name 
          
          cy.xpath("//input[@id='name']").type("Shamal mahajan")
          // country
          cy.xpath("//input[@id='country']").type("India");
          // city
          cy.xpath("//input[@id='city']").type("Pune")
          // card
          cy.xpath("//input[@id='card']").type("None")
          // month
          cy.xpath("//input[@id='month']").type("November");
          //year
          cy.xpath("//input[@id='year']").type("2024")
          // click on purches
          cy.xpath("//button[normalize-space()='Purchase']").click()
          // success message
           const message ="//h2[normalize-space()='Thank you for your purchase!']"
           cy.xpath(message).invoke('text').then((text) =>{
            cy.log('Success message is:', text)
           })
           // click on ok
           cy.xpath("//button[normalize-space()='OK']").click();
           // click on close
          //cy.xpath("//div[@id='orderModal']//button[@type='button'][normalize-space()='Close']").click()

    })


    it('Contacts', () =>{
        cy.xpath("//a[normalize-space()='Contact']").click();
        // contact mail
        cy.xpath("//input[@id='recipient-email']").type("ram@1234")
        // contact name
        cy.xpath("//input[@id='recipient-name']").type("Shyam Jadhav");
        //msg
        cy.xpath("//textarea[@id='message-text']").type("Testing")
        // send message
        cy.xpath("//button[normalize-space()='Send message']").click();
    })

    it('buy', ()=>{
        cy.wait(3000);
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.wait(4000);
        cy.screenshot()
        cy.wait(4000);
        cy.get('.col-sm-12 > .btn').click();

    })

    it('cart',()=>{
        cy.wait(5000);
        cy.get('#cartur').click();
        cy.get('.col-lg-1 > .btn').click();
        cy.xpath("//input[@id='name']").type('shamalm');
        cy.xpath("//input[@id='country']").type('India');
        cy.xpath("//input[@id='city']").type('pune');
        cy.xpath("//input[@id='card']").type('gvdsgb');
        cy.xpath("//input[@id='month']").type('july');
        cy.xpath("//input[@id='year']").type('2000');cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(5000);
        cy.screenshot()
        cy.get('.confirm').click();
    })

})