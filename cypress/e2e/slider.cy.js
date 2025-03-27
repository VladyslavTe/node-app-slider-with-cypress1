describe('Swiper Gallery Test 1', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test 2', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test 3', function () {
  it('Checks if the user can scroll through the slides', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('be.visible');
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('be.visible');
  });
});

describe('Swiper Gallery Test 4', function () {
  it('Checks if the description of each slide is displayed correctly', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('be.visible').should('contain', 'Rome').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('be.visible').should('contain', 'London').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('be.visible').should('contain', 'Paris').should('contain', 'France');
  });
});

describe('Swiper Gallery Test 5', function () {
  it('Checks if the gallery is displayed correctly', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper').should('be.visible');
    cy.get('.swiper-slide-active').should('be.visible').should('contain', 'Rome').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('be.visible').should('contain', 'London').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('be.visible').should('contain', 'Paris').should('contain', 'France');
    cy.get('.swiper-button-next').should('exist');
    cy.get('.swiper-button-prev').should('exist');
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('be.visible').should('contain', 'London').should('contain', 'United Kingdom');
  });
});