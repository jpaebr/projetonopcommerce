export class PaginaCheckout {

    teladecheckout() {
        cy.get('#BillingNewAddress_CountryId').select("Brazil");
        cy.get('#BillingNewAddress_City').type("Rio de Janeiro");
        cy.get('#BillingNewAddress_Address1').type("Baixada Fluminense");
        cy.get('#BillingNewAddress_ZipPostalCode').type("22325-848");
        cy.get('#BillingNewAddress_PhoneNumber').type("75999547841");
        cy.get('#billing-buttons-container > .new-address-next-step-button').click();
        cy.get('#shipping-method-buttons-container > .button-1').click();
    }
    formadepagamento(pgto) {
        switch (pgto) {
            case 1:
                cy.get('#payment-method-buttons-container > .button-1').click();
                cy.get('#payment-info-buttons-container > .button-1').click();
                cy.get('#confirm-order-buttons-container > .button-1').click();
                break;
            default:
                cy.get('#paymentmethod_1').click();
                cy.get('#payment-method-buttons-container > .button-1').click();
                cy.get('#CreditCardType').select("Master card");
                cy.get('#CardholderName').type("QA TECH");
                cy.get('#CardNumber').type("8986545678990900000009");
                cy.get('#ExpireMonth').select("06");
                cy.get('#ExpireYear').select("2026");
                cy.get('#CardCode').type("514");
                cy.get('#payment-info-buttons-container > .button-1').click();
                cy.get('#confirm-order-buttons-container > .button-1').click();
        }
    }
    validacaoCompra() {
        cy.get('.section > .title > strong').should("contain", "Your order has been successfully processed!");
    }
    botaoLogout() {
        cy.get('.ico-logout').click();
    }
}