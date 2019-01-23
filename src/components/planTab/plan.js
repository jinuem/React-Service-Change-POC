import React, { Component } from 'react'
import PlanHeader from './planHeader'
import PlanTable from './planTable'
import PlanFooter from './planfooter';
import ServiceHeader from '../serviceCommonComponents/serviceHeader';
//import ServiceSideBar from '../serviceCommonComponents/serviceSideBar';
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
          </div>
      )
    }
}

export default Plan