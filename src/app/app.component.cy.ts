import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { DisplayComponent } from './components/display/display.component';

const DATA_TEST_COUNTER = '[data-test=counter]';
const DATA_TEST_RESET_BUTTON = '[data-test=resetButton]';
const DATA_TEST_INCREMENT_BUTTON = '[data-test=incrementButton]';
const DATA_TEST_DECREMENT_BUTTON = '[data-test=decrementButton]';

describe('AppComponent', () => {
  beforeEach(() => {
    cy.mount(AppComponent, {
      declarations: [AppComponent, ButtonComponent, DisplayComponent],
    });
  });

  it('Should mount the AppComponent', () => {
    cy.get('[data-test=AppComponent]').should('exist');
  });

  it("The default value of the 'counter' property must be 0", () => {
    cy.get(DATA_TEST_COUNTER).should('have.text', '0');
  });

  it('Should increment the counter', () => {
    // Set the initial value of counter to 10
    for (let i = 0; i < 10; i++) {
      cy.get(DATA_TEST_INCREMENT_BUTTON).click();
    }

    // Validate if the counter is indeed 10
    cy.get(DATA_TEST_COUNTER).should('have.text', '10');

    // Increment the counter
    cy.get(DATA_TEST_INCREMENT_BUTTON).click();

    // Validate if the counter has been incremented to 11
    cy.get(DATA_TEST_COUNTER).should('have.text', '11');
  });

  it('Should reset the counter', () => {
    cy.get(DATA_TEST_COUNTER).should('have.text', '0');
    cy.get(DATA_TEST_INCREMENT_BUTTON).click();
    cy.get(DATA_TEST_COUNTER).should('not.have.text', '0');
    cy.get(DATA_TEST_RESET_BUTTON).click();
    cy.get(DATA_TEST_COUNTER).should('have.text', '0');
  });

  it('Should decrement the counter', () => {
    cy.get(DATA_TEST_COUNTER).should('have.text', '0');

    for (let i = 0; i < 10; i++) {
      cy.get(DATA_TEST_DECREMENT_BUTTON).click();
    }

    cy.get(DATA_TEST_COUNTER).should('have.text', '-10');
  });
});
