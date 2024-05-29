import React from 'react'
import AdditionComponent from './AdditionComponent'

describe('<AdditionComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AdditionComponent />)
  })
})