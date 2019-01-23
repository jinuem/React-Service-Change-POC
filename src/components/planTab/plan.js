import React, { Component } from 'react'
import PlanHeader from './planHeader'
import PlanTable from './planTable'
import PlanFooter from './planFooter';
import ServiceHeader from '../serviceCommonComponents/serviceHeader';
import ServiceChargeTabs from '../serviceCommonComponents/ServiceChargeTabs';
import ServiceFooter from '../serviceCommonComponents/serviceFooter';
class Plan extends Component {
    render() {
      return (
          <div class="container">
          <ServiceHeader/>
            <PlanHeader/>
            <PlanTable/>
            <PlanFooter/>
            <ServiceFooter/>
            <ServiceChargeTabs/>
          </div>
      )
    }
}

export default Plan