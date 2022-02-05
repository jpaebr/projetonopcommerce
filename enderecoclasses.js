export class PaginaCheckout {

    teladecheckout() {
        cy.get('#BillingNewAddress_CountryId').select("Brazil");
        cy.get('#BillingNewAddress_City').type("Rio de Janeiro");
        cy.get('#BillingNewAddress_Address1').type("Baixada Fluminense");
        cy.get('#BillingNewAddress_ZipPostalCode').type("22325-848");
        cy.get('#BillingNewAddress_PhoneNumber').type("75999547841");
        cy.get('#billing-buttons-container > .new-address-next-step-button').click();
        cy.get('#shipping-method-buttons-container > .button-1').click();
        cy.get('#payment-method-buttons-container > .button-1').click();
        cy.get('#payment-info-buttons-container > .button-1').click();
        cy.get('#confirm-order-buttons-container > .button-1').click();
        cy.get('.section > .title > strong').should("contain", "Your order has been successfully processed!");
    }
    botaoLogout() {
        cy.get('.ico-logout').click();
    }
}