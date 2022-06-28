/// <reference types="Cypress"/>

const faker = require('faker')

describe('create Issue', () =>{

    const issue ={
        title:  `issue-${faker.random.uuid()}`,
        description: faker.random.words(3),
        project: {
            name:  `project-${faker.random.uuid()}`,
            description: faker.random.words(5)
        }
    }

    beforeEach(() => {
        cy.login()
        //cy.gui_createProject(issue.project) 
        cy.api_createProject(issue.project) //otimizando o teste usando chamada https

    })

    it('successfully', () => {
        cy.gui_creatIssue(issue)

        cy.get('.issue-details')
        .should('contains', issue.title)
        .and('contain', issue.description)
    })
})