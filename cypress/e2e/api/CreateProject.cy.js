/// <reference types="Cypress"/>

const faker = require('faker')

describe('create project', () =>{
  
    it('successfully', () => {
        const project = {
            name: `project-${faker.random.uuid()}`,
            description : faker.random.words(5)
        }
        cy.api_createProject(project)
        .then(response => {
            expect(response.status).to.equal(201)
            expect(response.body.name).to.equal(project.name)
            exepect(response.body.description).to.equal(project.description)

        })
        
        
    })
})