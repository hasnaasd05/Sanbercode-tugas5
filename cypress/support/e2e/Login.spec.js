describe('Login Functionality', () => {
    it('Logs in with valid credentials', () => {
      cy.visit('https://kasirdemo.belajarqa.com');
      cy.get('input[id="email"]').type('hasnaseptidewi@gmail.com');
      cy.get('input[id="password"]').type('hasna123');
      cy.get('button[type="submit"]').click();
      cy.contains('dashboard').should('be.visible');
    });
});

describe('Create Category', () => {
    it('Creates a new category successfully', () => {
        cy.get('a[href="/categories"]').click();
        cy.get('a[href="/categories/create"]').click();
        cy.get('input[id="nama"]').type('Sepatu');
        cy.get('input[id="deskripsi"]').type('Serba sepatu olahraga');
        cy.get('button[type="button"]').contains('simpan').click();
        cy.url().should('include', '/categories');

    });
});


