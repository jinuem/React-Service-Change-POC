
import React, { Component } from 'react'
import ServiceHeader from './serviceHeader';
import ServiceChangeTabs from './ServiceChangeTabs';
import ServiceFooter from './serviceFooter';


class serviceChange extends Component {
    constructor(props){
        super(props);
   }
    render() {
        return(
            <div>
                <ServiceHeader/>
                <ServiceChangeTabs />
                <ServiceFooter />
            </div>
        )                   
                      
    }
}

export default serviceChange;