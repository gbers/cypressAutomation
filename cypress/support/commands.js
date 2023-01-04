// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- Open Login Page --
 Cypress.Commands.add('openLoginPage', () => { 
    cy.visit('https://www.amazon.com/');
    cy.wait(4000);
    // Open mouse to account list
    cy.get('#nav-link-accountList').click();

  })
  // Email page
  Cypress.Commands.add('loginEmail', (email) => { 
    // Assert input email page
    // Assert amazon icon should exists
    cy.get('.a-link-nav-icon > .a-icon').should('be.visible');
    // Assert form label
    cy.get('.a-form-label').contains('Email or mobile phone number');
    // Assert legal text row and link
    cy.get('#legalTextRow').contains('By continuing, you agree to Amazon')
    // Assert need help
    cy.get('.a-expander-header > .a-icon').should('be.visible');
    // Assert Create new account button
    cy.get('#createAccountSubmit').should('be.visible');

    // Input email
    cy.get('#ap_email').click().clear().type(email);

    // Select Continue
    cy.get('#continue').click();

  })
  // Password page
  Cypress.Commands.add('loginPassword', (password) => {     

    // Assert login password page
    // Assert amazon icon 
    cy.get('.a-link-nav-icon > .a-icon').should('be.visible');
    // Assert change email button
    cy.get('#ap_change_login_claim').should('be.visible');
    // Assert forgot password 
    cy.get('#auth-fpp-link-bottom').should('be.visible');
    // Assert details button
    cy.get('#remember_me_learn_more_link').should('be.visible');

    // Input password
    cy.get('#ap_password').click().clear().type(password);
    // Select Sign in button
    cy.get('#signInSubmit').click();
  })

  // Error login
    Cypress.Commands.add('emailErrorNotification', (type) => { 
        // Assert error notifications
        cy.get('#auth-error-message-box').should('be.visible');
        cy.get('.a-alert-heading').contains('There was a problem');
        if(type == 'email'){
            cy.get('.a-list-item').contains('We cannot find an account with that email address');
        }
        if(type == 'password'){
            cy.get('.a-list-item').contains('Your password is incorrect');
        }
     })

    // -- Search Item --
    Cypress.Commands.add('searchItem', (value) => { 
        // select search box
        cy.get('#twotabsearchtextbox').click().clear().type(value);
        // select search button
        //cy.get('#nav-search-submit-button').click();
    })
    
    
    // -- Select Item --
    Cypress.Commands.add('selectItemByIndex', (index) => { 
    cy.get('.s-result-item').eq(index).click();
    })

    // -- Select search button--
    Cypress.Commands.add('selectSearch', () => { 
    cy.get('#nav-search-submit-button').click();
    })

    // -- select button add to cart --
    Cypress.Commands.add('addToCart', () => { 
        cy.get('#add-to-cart-button').click();
     })

    
     Cypress.Commands.add('setQuantity', (qty) => { 
        // Select the "Quantity" field
        cy.get('#quantity').select(qty);
         // Update the quantity to 
        // cy.get('#quantity').type(qty);
          // Click the "Update Cart" button
         cy.get('#update-cart-button').click();
        // Assert that the quantity in the cart is 
        cy.get('#cart-item-quantity').should('have.text', qty);
     })

    // -- Update quantity--


    // Select by item name
    Cypress.Commands.add('selectSuggestionItemByName', (itemName) => { 
    cy.get('#nav-flyout-searchAjax').each(function($el,index,$list) {
        if($el.text().includes(itemName)){
            cy.wrap($el).click();
        }
        else{
            cy.log($el.text);
        }
    })
})