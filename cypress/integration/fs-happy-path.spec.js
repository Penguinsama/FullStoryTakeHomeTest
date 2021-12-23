/// <reference types="cypress" />

import MarketPage from '../support/pageObjects/Market.page'
import CartPage from '../support/pageObjects/Cart.page'
import BasePage from '../support/pageObjects/Base.page'
import CheckoutPage from '../support/pageObjects/Checkout.page'

describe('FullStory recording', () => {
    it('Basic functionality is correctly recorded', () => {

       //cy.intercept('https://rs.fullstory.com/rec/bundle*').as('dataRecorded')

        BasePage.visit()
        BasePage.clickMarketButton()

        /* cy.wait('@dataRecorded').then((interception) => {
            interception.should('have.property', 'Seq')
            interception.should('have.property', 'When')
            interception.should('have.property', 'Evts')
        }) */

        MarketPage.addBananasItem()

        /* cy.wait('@dataRecorded').then((interception) => {
            interception.should('have.property', 'Seq')
            interception.should('have.property', 'When')
            interception.should('have.property', 'Evts')
        }) */

        MarketPage.addCocktailMixItem()
        
        /* cy.wait('@dataRecorded').then((interception) => {
            interception.should('have.property', 'Seq')
            interception.should('have.property', 'When')
            interception.should('have.property', 'Evts')
        }) */
        
        MarketPage.clickCartButton()
        
        /* cy.wait('@dataRecorded').then((interception) => {
            interception.should('have.property', 'Seq')
            interception.should('have.property', 'When')
            interception.should('have.property', 'Evts')
        }) */
        
        CartPage.removeFirstItem();
        
        /* cy.wait('@dataRecorded').then((interception) => {
            interception.should('have.property', 'Seq')
            interception.should('have.property', 'When')
            interception.should('have.property', 'Evts')
        }) */
        
        CartPage.clickCheckoutButton()

        /* cy.wait('@dataRecorded').then((interception) => {
            interception.should('have.property', 'Seq')
            interception.should('have.property', 'When')
            interception.should('have.property', 'Evts')
        }) */

        CheckoutPage.fillOutPurchaseInfo()

        /* cy.wait('@dataRecorded').then((interception) => {
            interception.should('have.property', 'Seq')
            interception.should('have.property', 'When')
            interception.should('have.property', 'Evts')
        }) */

        CheckoutPage.clickPurchaseButton()

        /* cy.wait('@dataRecorded').then((interception) => {
            interception.should('have.property', 'Seq')
            interception.should('have.property', 'When')
            interception.should('have.property', 'Evts')
        }) */
        
    })
})