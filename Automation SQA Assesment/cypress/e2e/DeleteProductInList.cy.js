describe('Cart Removal Tests (TC_DP_022 / TC_DP_023 / TC_DP_024)', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
    cy.get('ul.nav').contains('Products').click(); // go to products list
  });

    it('TC_DP_022: Remove a single product from cart', () => {
    cy.visit('https://automationexercise.com');
    cy.get('ul.nav').contains('Products').click();

    // Add a product to the cart
    cy.get('.product-image-wrapper').first().within(() => {
        cy.contains('Add to cart').click();
    });

    cy.get('.modal-body').contains('View Cart').click();

    // Ensure at least 1 product is in the cart
    cy.get('.cart_info tbody tr').should('have.length.at.least', 1);

    // Remove the first product using correct selector
    cy.get('.cart_info tbody tr').first().find('a.cart_quantity_delete').click();

    // Assert product is removed
    cy.get('.cart_info tbody tr').should('have.length.lessThan', 1);
    });

    context('TC_DP_023: Remove one, others remain', () => {
    it('should not remove other items when deleting one', () => {
        cy.visit('https://automationexercise.com');
        cy.get('ul.nav').contains('Products').click();

        // Add Product A and B
        cy.get('.product-image-wrapper').then($items => {
        cy.wrap($items.eq(0)).contains('Add to cart').click();
        cy.contains('button', 'Continue Shopping').should('be.visible').click();

        cy.wrap($items.eq(1)).contains('Add to cart').click();
        cy.get('.modal-body').contains('View Cart').click();
        });

        // Confirm two items
        cy.get('.cart_info tbody tr').should('have.length', 2);

        // Remove first one using correct selector
        cy.get('.cart_info tbody tr').first().find('a.cart_quantity_delete').click();

        // Ensure one remains
        cy.get('.cart_info tbody tr').should('have.length', 1);

        // Optional: verify totals reflect remaining product
        cy.get('.cart_total_price').should('exist');
    });
    });
});
