/// <reference types="Cypress"/>
 
   Cypress.Commands.add('login', () => { 
    
    cy.visit('/users/sign_in')
    cy.get('#user_login').type(Cypress.env('user_name'),{log:false})
    cy.get('#user_password').type(Cypress.env('user_password',{log:false}))
    cy.get('[data-testid="sign-in-button]').click()

     })

     Cypress.Commands.add('logout', ()=>{

      cy.get('.qa-user-avatar').click()
      cy.contains('Sign out').click()
      
     })

     Cypress.Commands.add('gui_createProject', project =>{

      cy.visit('projects/new')

      cy.get('#project_name').type(project.name)
      cy.get('#project_description').type(project.description)
      cy.get('#project_initialize_with_readme').check()
      cy.contains('Create project').click()

     })

     Cypress.Commands.add('gui_creatIssue', issue =>{

      cy.visit( `${Cypress.env('user_name')}/${issue.project.name}/issues/new`)

      cy.get('.qa-issuable-form-title').type(issue.name)
      cy.get('#issue_description').type(issue.description)
      cy.contains('Create issue').click()

     })

     Cypress.Commands.add('gui_setLabelOnIssue', label => {
      cy.get('.gl-label-text').click()
      cy.contains(label.name).click()
      cy.get('body').click()
    })

    Cypress.Commands.add('gui_setMilestoneOnIssue', milestone => {
      cy.get('.block.milestone .edit-link').click()
      cy.contains(milestone.title).click()
    })