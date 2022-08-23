import BasePage from "./basePage";

class KatalonSummaryPage extends BasePage {
    static get facility() {
        return cy.get(`#facility`);
    }
    static get readmission() {
        return cy.get(`#hospital_readmission`)
    }
    static get program() {
        return cy.get(`#program`);
    }
    static get visitDate() {
        return cy.get(`#visit_date`);
    }
    static get comment() {
        return cy.get(`#comment`)
    }
}

export default KatalonSummaryPage;