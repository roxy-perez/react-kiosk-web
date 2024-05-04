import React from 'react'
import AdminSidebar from './AdminSidebar'

describe('<AdminSidebar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AdminSidebar />)
  })
})