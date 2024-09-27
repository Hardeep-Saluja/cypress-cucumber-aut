import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../pageobjects/home-page"
import PlaceOrderPage from "../pageobjects/place-order-page"
import SubmitPage from "../pageobjects/submit-page"
import SummaryPage from "../pageobjects/summary-page"
import { expect } from "chai"

const homePage = new HomePage()
const placeOrderPage = new PlaceOrderPage()
const submitPage = new SubmitPage()
const summaryPage = new SummaryPage()
const placeOrder = new PlaceOrderPage()

Given('a user is in GreenKart page', () =>{
    cy.visit("/")
    cy.fixture("data").then((data)=>{
        homePage.getLogo().should('have.text', data.logotext)
    })
})

When('user place order for {string} from cart', (orderItem)=>{
    homePage.enterSearchValue("berry")
    homePage.addItemToCart(orderItem)
    homePage.clickCartIcon
    homePage.clickProceedToCheckOut
    placeOrderPage.clickPlaceOrderButton()
})

Then('order is placed successfully', () =>{
    submitPage.selectCountry("India")
    submitPage.selectTermCheckBox()
    submitPage.clickProceedButton()
    cy.fixture("data").then((data)=>{
        summaryPage.getSuccesMessage().then((message)=>{
            expect(message).to.contains(data.successmessge)
        })
    })
})