/// <reference types="Cypress"/>

const faker = require('faker')

describe('create Issue', () =>{

    it('successfully', () => {

        const issue ={
            title:  `issue-${faker.random.uuid()}`,
            description: faker.random.words(3),
            project: {
                name:  `project-${faker.random.uuid()}`,
                description: faker.random.words(5)
            }
        }

        cy.api_creatIssue(issue)
        .then(response => {
            expect(response.status).to.equal(201)
            expect(response.body.title).to.equal(issue.title)
            exepect(response.body.description).to.equal(issue.description)

        })
        

    })
})