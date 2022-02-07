describe('App Tests', () => {

  it('Should start with 1 point', () => {
    cy.visit('/');
    getPointsElement().should('have.text', '1');
  });

  it('Should increase points by clicking plus1', () => {
    cy.visit('/');

    getPointsElement().should('have.text', '1');
    getPlusButton().click();

    getPointsElement().should('have.text', '2');

    getPlusButton().click();
    getPlusButton().click();
    getPlusButton().click();

    getPointsElement().should('have.text', '5');
  });

  it('Should rest points by clicking plus1', () => {
    cy.visit('/');

    getPlusButton().click();
    getPlusButton().click();
    getPlusButton().click();

    getPointsElement().should('have.text', '4');

    getResetButton().click();

    getPointsElement().should('have.text', '0');
  });

  function getPointsElement() {
    return cy.get('div').contains('Points').get('span');
  }
  
  function getPlusButton() {
    return cy.get('button').contains('Plus 1');
  }
  
  function getResetButton() {
    return cy.get('button').contains('Reset');
  }

});