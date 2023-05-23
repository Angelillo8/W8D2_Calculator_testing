describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should allow number buttons update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number7').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '275')
  });

  it('should allow arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number8').click();
    cy.get('#operator-add').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('.display').should('contain', '17')
  });

  it('should allow multiple operations be chained together', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click(); 
    cy.get('.display').should('contain', '4')
  });

  it('should allow the output as expected for positive numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-add').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click(); 
    cy.get('.display').should('contain', '11')
  });

  it('should allow output as expected for negative numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click(); 
    cy.get('.display').should('contain', '-5')
  });

  it('should allow output as expected for decimal numbers', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click(); 
    cy.get('.display').should('contain', '2.5')
  });

  it('should allow output as expected for very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number3').click();
    cy.get('#number0').click();
    cy.get('#number5').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click(); 
    cy.get('.display').should('contain', '9.830599099999901e+22')
  });

  it('should allow return undefined in exceptional circumstances', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click(); 
    cy.get('.display').should('contain', 'Undefined')
  });

  it('should allow return undefined in exceptional circumstances another time', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-add').click(); 
    cy.get('#number5').click();
    cy.get('#operator-equals').click(); 
    cy.get('.display').should('contain', "NaN")
  });
});