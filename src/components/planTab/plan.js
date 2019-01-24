import React, { Component } from 'react'
import PlanHeader from './planHeader'
import PlanTable from './planTable'
import PlanFooter from './planFooter';

class Plan extends Component {
    render() {
      return (
          <div class="container">
         
            <PlanHeader/>
            <PlanTable/>
            <PlanFooter/>

          </div>
      )
    }
}

export default Plan