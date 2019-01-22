
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
          <div>
                <div class="p-grid p-justify-between">
                    <div class="p-col-12 p-md-6 p-lg-3">
                    <SelectButton  value={this.state.levelType} options={tabOptions} onChange={(e) => this.setState({levelType: e.value})}></SelectButton>
                    </div>
                    <div class="p-col-12 p-md-6 p-lg-3">Plan Collection

                    <Dropdown value={this.state.levelType} options={tabOptions} onChange={(e) => {this.setState({levelType: e.value})}} placeholder=""/>
                    </div>
                    <div class="p-col-12 p-md-6 p-lg-3">Price Plan

                    <Dropdown value={this.state.levelType} options={tabOptions} onChange={(e) => {this.setState({levelType: e.value})}} placeholder=""/>
                    </div>
                    <div class="p-col-12 p-md-6 p-lg-3">
                    Plan ID
                    <InputText/>
                    </div>
                </div>
          </div>
      )
    }
}

export default PlanHeader