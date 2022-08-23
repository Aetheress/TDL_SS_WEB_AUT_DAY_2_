import BasePage from "./basePage";

class KatalonHistoryPage extends BasePage {
    static get appointments() {
        return cy.get(`.col-sm-12 > p`);
    }
}

export default KatalonHistoryPage;