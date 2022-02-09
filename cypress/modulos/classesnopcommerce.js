export class PaginaWeb{
    acessoSite(){
        cy.visit("https://demo.nopcommerce.com/");
    }
    botaoRegistro(){
        cy.get('.ico-login').click();
        cy.get('.new-wrapper > .buttons > .button-1').click();
    }
    registro(email, senha){
        cy.get('#gender-male').click();
        cy.get('#FirstName').type("QA");
        cy.get('#LastName').type("Tech");
        cy.get('[name="DateOfBirthDay"]').select("29");
        cy.get('[name="DateOfBirthMonth"]').select("January");
        cy.get('[name="DateOfBirthYear"]').select("2001");
        cy.get('#Email').type(email);
        cy.get('#Password').type(senha);
        cy.get('#ConfirmPassword').type(senha);
        cy.get('#register-button').click();
    }
    validaRegistro(){
        cy.get('.result').should("contain", "Your registration completed");
    }
    botaoProsseguir(){
        cy.get('.buttons > .button-1').click();
    }
    botaoLogin(email, senha){
        cy.get('.ico-login').click();
        cy.get('#Email').type(email);
        cy.get('#Password').type(senha);
        cy.get('form > .buttons > .button-1').click();
    }
}