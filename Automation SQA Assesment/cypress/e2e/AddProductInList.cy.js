describe('Shopping Cart Add-Product Scenarios', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('a[href="/products"]').click();
  });

  it('TC_ANP_001: Add one product from All Products', () => {
    cy.get('.product-image-wrapper').first()
      .trigger('mouseover')
      .contains('Add to cart').click();
    cy.get('.modal-body p.text-center')  // targets the correct <p> element
    .should('be.visible')
    .and('contain.text', 'Your product has been added to cart.');
    cy.contains('View Cart').click();
    cy.get('.cart_info').should('exist');
  });

  it('TC_ANP_002: Add one product (3rd on list)', () => {
    cy.get('.product-image-wrapper').eq(2)
      .trigger('mouseover')
      .contains('Add to cart').click();
    cy.get('.modal-body p.text-center')  // targets the correct <p> element
    .should('be.visible')
    .and('contain.text', 'Your product has been added to cart.');
    cy.contains('View Cart').click();
    cy.get('.cart_info tbody tr').should('have.length', 1);
  });

  it('TC_ANP_003: Add two distinct products', () => {
    cy.get('.product-image-wrapper').eq(4).trigger('mouseover').contains('Add to cart').click();
    cy.get('.modal-footer').contains('Continue Shopping').click();
    cy.get('.product-image-wrapper').eq(7).trigger('mouseover').contains('Add to cart').click();
    cy.contains('View Cart').click();
    cy.get('.cart_info tbody tr').should('have.length', 2);
  });

  it('TC_ANP_004: Add via product detail view', () => {
    cy.get('.product-image-wrapper').eq(3).contains('View Product').click();
    cy.get('button:contains("Add to cart")').click();
    cy.get('.modal-body p.text-center')  // targets the correct <p> element
    .should('be.visible')
    .and('contain.text', 'Your product has been added to cart.');
    cy.contains('View Cart').click();
    cy.get('.cart_info tbody tr').should('have.length', 1);
  });

  it('TC_ANP_005: Add product with multiple quantity', () => {
    cy.get('.product-image-wrapper').eq(3).contains('View Product').click();
    cy.get('input#quantity').clear().type('4');
    cy.get('button:contains("Add to cart")').click();
    cy.get('.modal-body p.text-center')  // targets the correct <p> element
    .should('be.visible')
    .and('contain.text', 'Your product has been added to cart.');
    cy.contains('View Cart').click();
    cy.get('.cart_quantity button.disabled')
    .should('have.text', '4');
  });

  it('TC_ANP_006: Ensure cart persists across pages', () => {
    cy.get('.product-image-wrapper').first().trigger('mouseover').contains('Add to cart').click();
    cy.get('.modal-footer').contains('Continue Shopping').click();
    cy.visit('/');
    cy.contains('Cart').click();
    cy.get('.cart_info tbody tr').should('exist');
  });

  it('TC_ANP_007: Add from RECOMMENDED ITEMS', () => {
    cy.visit('/');
    cy.scrollTo('bottom');

    // Click "Add to cart" from the visible (active) carousel item
    cy.get('#recommended-item-carousel .carousel-inner .item.active')
      .contains('Add to cart')
      .click();

    // Confirm product was added to cart
    cy.get('.modal-body p.text-center')
      .should('be.visible')
      .and('contain.text', 'Your product has been added to cart.');

    cy.contains('View Cart').click();
    cy.get('.cart_info tbody tr').should('have.length.at.least', 1);
  });

  it('TC_ANP_008: Add when not logged in', () => {
    cy.clearCookies();
    cy.get('.product-image-wrapper').first().trigger('mouseover').contains('Add to cart').click();
    cy.get('.modal-body p.text-center')  // targets the correct <p> element
    .should('be.visible')
    .and('contain.text', 'Your product has been added to cart.');
    cy.contains('View Cart').click();
    cy.get('.cart_info tbody tr').should('exist');
  });

});
