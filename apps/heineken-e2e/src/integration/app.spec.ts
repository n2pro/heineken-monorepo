import { getGreeting } from '../support/app.po';

describe('heineken', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to heineken!');
  });
});
