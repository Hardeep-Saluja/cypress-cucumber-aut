class PlaceOrderPage {
    constructor(){
        this.placeOrderButton = "button:contains('Place Order')"
    }

    clickPlaceOrderButton(){
        cy.get(this.placeOrderButton).click()
    }
}export default PlaceOrderPage