import BasePage from "./basePage";

class KatalonMakeAppointmentPage extends BasePage {
    static get facility() {
        return cy.get(`#combo_facility`);
    }
    static get readmission() {
        return cy.get(`#chk_hospotal_readmission`);
    }
    static get medicaid() {
        return cy.get(`#radio_program_medicaid`);
    }
    static get widget() {
        return cy.get(`.glyphicon-calendar`);
    }
    static get august30th() {
        //i don't like this one bit, too dependent on other stuff
        //test case will no longer work as soon as september hits
        return cy.get(`tbody > tr:nth-child(5) > td:nth-child(3)`);
    }
    static get comment() {
        return cy.get(`#txt_comment`);
    }
    static get bookAppointment() {
        return cy.get(`#btn-book-appointment`);
    }
    static get blank() {
        return cy.get(`.form-horizontal`);
    }
}

export default KatalonMakeAppointmentPage;