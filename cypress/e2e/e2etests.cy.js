import BasePage from "../pageObjects/basePage";
import KatalonIndexPage from "../pageObjects/katalonIndexPage";
import KatalonLoginPage from "../pageObjects/katalonLoginPage";
import KatalonMakeAppointmentPage from "../pageObjects/katalonMakeAppointmentPage";
import KatalonSummaryPage from "../pageObjects/katalonSummaryPage";

describe("Day 2 extra task", () => {
    context("Test scenario", () => {
        beforeEach(() => {
            KatalonIndexPage.visit();
        })
        it("Test case 1", () => {
            KatalonIndexPage.makeAppointment.click();
            KatalonLoginPage.username.type("John Doe");
            KatalonLoginPage.password.type("ThisIsNotAPassword");
            KatalonLoginPage.login.click();
            KatalonMakeAppointmentPage.facility.select("Seoul CURA Healthcare Center");
            KatalonMakeAppointmentPage.readmission.click();
            KatalonMakeAppointmentPage.medicaid.click();
            KatalonMakeAppointmentPage.widget.click();
            KatalonMakeAppointmentPage.august30th.click();
            KatalonMakeAppointmentPage.comment.type("Placeholder", {force: true});
            KatalonMakeAppointmentPage.bookAppointment.click();
            KatalonSummaryPage.facility.should("have.text", "Seoul CURA Healthcare Center");
            KatalonSummaryPage.readmission.should("have.text", "Yes");
            KatalonSummaryPage.program.should("have.text", "Medicaid");
            KatalonSummaryPage.visitDate.should("have.text", "30/08/2022")
            KatalonSummaryPage.comment.should("have.text", "Placeholder");
        })
    })
})