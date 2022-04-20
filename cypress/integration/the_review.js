describe('NYT reader user flow', () => {
    beforeEach(() => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=rCQGdOkp98BjDAL9RCx3zxJyGyCV5CRC', { fixture: 'sampleArticles.json'} )
      cy.visit('http://localhost:3000/')
    })
    it('should have a title, header and display all article cards', () => {
        cy.get('header').should('be.visible')
        cy.get('h1').should('have.text', 'The Review')
        cy.get('.article-container').should('be.visible')
        cy.get('.news-card').should('have.length', 5)
    })
    it('should have cards with title, date, section and image', () => {
        cy.get('.news-card').eq(0)
        cy.get('h4').eq(0).should('have.text', "Despair in Mariupol’s last stronghold: ‘They’re bombing us with everything’")
        cy.get('.thumbnail-type').eq(0).should('have.text', 'world')
        cy.get('.thumbnail-date').eq(0).should('have.text', '19/04/2022')
        cy.get('.thumbnail-image').eq(0).should('be.visible')

    })
    it('should allow users to click on news story for more information', () => {
        cy.get('.news-card').eq(0).click()
        cy.get('img').should('be.visible')
        cy.get('h2').should('have.text', "Despair in Mariupol’s last stronghold: ‘They’re bombing us with everything’")
        cy.get('p').eq(0).should('have.text', 'By Michael Schwirtz, Cora Engelbrecht and Andrew E. Kramer')
        cy.get('a').should('have.attr', 'href')
        cy.get('p').eq(2).should('have.text', 'A huge Soviet-era steel mill is where the last Ukrainian defenders of Mariupol have taken refuge as Russia’s battle to take full control of the city appeared to be entering its final stages.')
    })
    it('should allows users to search for articles', () => {
        cy.get('form').should('be.visible')
        cy.get('input')
        .type('Ukraine')
        .should('have.value', 'Ukraine')
        cy.get('.search-button')
            .click()
        cy.get('.news-card')
            .should('have.length', 0)

    })
  
  })