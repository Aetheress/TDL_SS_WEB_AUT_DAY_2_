import BasePage from "./basePage";

class KatalonIndexPage extends BasePage {
    static get url() {
        return "/";
    }
    static get makeAppointment() {
        return cy.get(`#btn-make-appointment`);
    }
}

export default KatalonIndexPage;