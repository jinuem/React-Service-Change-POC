import React, { Component } from 'react'
import PlanHeader from './planHeader'
import PlanTable from './planTable'
import ServiceChangeHeader from '../serviceChangeHeader/serviceChangeHeader';

class Plan extends Component {
    render() {
      return (
          <div class="container">
            <ServiceChangeHeader/>
            <PlanHeader/>
            <PlanTable/>
          </div>
      )
    }
}

export default Plan