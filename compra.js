export class Produtos {
    buscar(qtd) {
        cy.get('#small-searchterms').type("Nokia Lumia 1020{enter}");
        cy.get('.item-grid').should("contain", "Nokia Lumia 1020");
        cy.get('.product-title > a').click();
        cy.get('#product_enteredQuantity_20').clear().type(qtd);
        cy.get('#add-to-cart-button-20').click();
        cy.get('#small-searchterms').type("Samsung Series 9 NP900X4C Premium Ultrabook{enter}");
        cy.get('.item-grid').should("contain", "Samsung Series 9 NP900X4C Premium Ultrabook");
        cy.get('.product-title > a').click();
        cy.get('#product_enteredQuantity_6').clear().type(qtd);
        cy.get('#add-to-cart-button-6').click();
    }
}
export class Validação {
    botaoCart() {
        cy.get('#topcartlink').click();
    }
    validaCart(qtd) {
        cy.get('.cart > tbody').should("contain", "Nokia Lumia 1020");
        cy.get('.cart > tbody').should("contain", "Samsung Series 9 NP900X4C Premium Ultrabook");
        cy.get('.cart').should("contain", qtd);
        cy.get('.cart').should("contain", qtd);
    }
}
export class Finalização {
    conclusao() {
        cy.get('#termsofservice').click();
        cy.get('#checkout').click();
    }
}

