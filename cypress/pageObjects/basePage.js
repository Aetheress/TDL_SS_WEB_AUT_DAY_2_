class BasePage {
    static get url() {
      return "";
    }
  
    static visit(options) {
      options = {
        timeout: Cypress.config("defaultCommandTimeout"),
        uniqueText: this.uniqueText,
        expectedUrl: this.url,
        ...options,
      };
      return cy
        .visit(this.url)
        .then(() => this.assertIsCurrentPage(options));
    }
  
    static assertIsCurrentPage(
      options = {
        timeout: Cypress.config("defaultCommandTimeout"),
        expectedUrl: this.url,
      }
    ) {
      return this.validatePath(options);
    }
  
    static validatePath(
      options = {
        timeout: Cypress.config("defaultCommandTimeout"),
        expectedUrl: this.url,
      }
    ) {
      return cy
        .location(options)
        .should((loc) =>
          expect(`${loc.pathname}${loc.search}`).to.eq(options.expectedUrl)
        );
    }
  
    static closeAdvert() {
      return cy.get("#close-fixedban").should("be.visible").click();
    }

    static get menu() {
      return cy.get(`#menu-toggle`)
  }
  static get sideBar() {
      return cy.get(`#sidebar-wrapper`)
  }
  static get history() {
      return cy.get(`[href^="history"]`);
  }
  }
  
  export default BasePage;