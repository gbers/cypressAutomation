describe('User should able to search items and add to cart', () => {
  it('Add items to cart', () => {
    cy.visit('https://www.amazon.com/');
    cy.wait(4000);
    // search via search box
    cy.searchItem('sofabed');
    cy.wait(2000);
    // select by suggestion
    cy.selectSuggestionItemByName('sofabeds and sleepers queen');
    // Select items by index
    cy.selectItemByIndex(3);
    // Update quantity
    cy.setQuantity(2)
    // Add to cart
    cy.addToCart();
  }) 


})