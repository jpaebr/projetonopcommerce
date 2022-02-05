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

    it("Login", () => {
        site.acessoSite();
        site.botaoRegistro();
        site.registro();
        site.validaRegistro();
        site.botaoProsseguir();
        checkout.botaoLogout();
    })
    it("Tela de produtos e checkout", () => {
        site.acessoSite();
        site.botaoLogin();
        item.buscar(qtd);
        valcar.botaoCart();
        valcar.validaCart(qtd);
        concluir.conclusao();
        checkout.teladecheckout();
        checkout.botaoLogout();
    })
});