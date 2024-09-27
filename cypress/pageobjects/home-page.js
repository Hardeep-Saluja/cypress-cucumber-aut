class HomePage {
    constructor(){
        this.logo = ".brand"
        this.searchBox = "[type='search']"
        this.searchIcon = ""
        this.product = "[class-'products'][class-'product']"
        this.productName = "h4.product-name"
        this.addToCartButton = "button:contains('ADD TO CART')"
        this.cartIcon = ".cart-icon"
        this.proceedToCheckOutButton = "button:contains('PROCEED TO CHECKOUT')"
    }

    getLogo(){
        return cy.get(this.logo)
    }

    enterSearchValue(value){
        cy.get(this.searchBox).type(value)
    }

    addItemToCart(orderItem){
        cy.get(this.product).each(($el, index, $list) => {
            const fruit = $el.find(this.productName).text()
            if(fruit.includes(orderItem)){
                cy.wrap($el.find(this.addToCartButton)).click()
            }
        })
    } 

    clickCartIcon(){
        cy.get(this.cartIcon).click()
    }

    clickProceedToCheckOut(){
        cy.get(this.proceedToCheckOutButton).click()
    }
}export default HomePage