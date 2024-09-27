class SummaryPage {
    constructor(){
        this.successMessage = ".wrapperTwo span:visible"
    }

    getSuccesMessage(){
        let value = ''
       return cy.get(this.successMessage).invoke('text').then((text)=>{
            value = text
        }).then(()=> value)
    }

}export default SummaryPage