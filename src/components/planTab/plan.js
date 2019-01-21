import React, { Component } from 'react'
import PlanHeader from './planHeader'
import PlanTable from './planTable'

class Plan extends Component {
    render() {
      return (
          <div class="container">
              <PlanHeader/>
              <PlanTable/>
          </div>
      )
    }
}

export default Plan