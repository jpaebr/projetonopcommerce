/// <reference types = "cypress" />

import { PaginaCheckout } from "./Modulos/enderecoclasses.js";

import { PaginaWeb } from "./Modulos/classesnopcommerce.js";

import { Produtos, Validação, Finalização } from "./Modulos/compra";


describe("Desafio - NopCommerce", () => {

    const site = new PaginaWeb();
    const checkout = new PaginaCheckout();
    const item = new Produtos();
    const valcar = new Validação();
    const concluir = new Finalização();
    const qtd = 4;
    const email = "qatech138@gmail.com"
    const senha = "12345678"
    const pgto = 2

    it("Login", () => {
        site.acessoSite();
        site.botaoRegistro();
        site.registro(email, senha);
        site.validaRegistro();
        site.botaoProsseguir();
        checkout.botaoLogout();
    })
    it("Tela de produtos e checkout", () => {
        site.acessoSite();
        site.botaoLogin(email, senha);
        item.buscar(qtd);
        valcar.botaoCart();
        valcar.validaCart(qtd);
        concluir.conclusao();
        checkout.teladecheckout();
        checkout.formadepagamento(pgto);
        checkout.validacaoCompra();
        checkout.botaoLogout();
    })
});