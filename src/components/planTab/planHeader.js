
import React, { Component } from 'react'
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {SelectButton} from 'primereact/selectbutton';
import {Dropdown} from 'primereact/dropdown';
class PlanHeader extends Component {
    constructor(props){
        super(props);
        this.state= {
            levelType:'LineLevel',
        };
    }
    render() {
        const tabOptions = [
            {label: 'Account Level', value: 'AccountLevel'},
            {label: 'Line Level', value: 'LineLevel'},
        ];
      return (

                <div className="p-grid" id="planHeader">
                    <div className="p-col-12 p-md-6 p-lg-2 p-col-align-end">
                    <SelectButton  value={this.state.levelType} options={tabOptions} onChange={(e) => this.setState({levelType: e.value})}></SelectButton>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-4 selectGroup">
                    <span>Plan Collection 
                    </span>

                    <Dropdown className="selectInput planCollection" autoWidth={false} value={this.state.levelType} options={tabOptions} onChange={(e) => {this.setState({levelType: e.value})}} placeholder=""/>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-4 selectGroup"><span>Price Plan </span>

                    <Dropdown className="selectInput planPrice" autoWidth={false} value={this.state.levelType} options={tabOptions} onChange={(e) => {this.setState({levelType: e.value})}} placeholder=""/>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-2 planInputGroup">
                    <span>Plan ID</span>
                    <InputText className="planInput"/>
                    </div>
                </div>

      )
    }
}

export default PlanHeader