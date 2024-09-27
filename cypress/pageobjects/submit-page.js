class SubmitPage {
    constructor(){
        this.ddCountry = "select"
        this.chkBoxTerm = "[type='checkbox']"
        this.proceedButton = "button:contains('proceedButton')"
    }

    selectCountry(country){
        cy.get(this.ddCountry).select(country)
    }

    selectTermCheckBox(){
        cy.get(this.chkBoxTerm).check()
    }

    clickProceedButton(){
        cy.get(this.proceedButton).click()
    }
}export default SubmitPage