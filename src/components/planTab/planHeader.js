
import React, { Component } from 'react'
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {SelectButton} from 'primereact/selectbutton';
import {Dropdown} from 'primereact/dropdown';
class PlanHeader extends Component {
    constructor(props){
        super(props);
        this.state= {
            levelType:'',
        };
    }
    render() {
        const tabOptions = [
            {label: 'Account Level', value: 'AccountLevel'},
            {label: 'Line Level', value: 'Line Level'},
        ];
      return (
          <div>
              
              <div class="p-grid p-justify-between">
                    <div class="p-col-12 p-md-6 p-lg-5">Billing Outlet ID
                    <InputText/>
                    <img src="/"/>
                    VZM CUSTOMER SERVICE
                    </div>
                    <div class="p-col-12 p-md-6 p-lg-5">Sales Rep ID
                    <InputText/>
                    <img src="/"/>
                    ENC REP
                    </div>
                    <div class="p-col-12 p-md-6 p-lg-2">
                    <Button label="History"/>
                    </div>
                </div>
                <div class="p-grid p-justify-between">
                    <div class="p-col-12 p-md-6 p-lg-3">
                    <SelectButton value={this.state.levelType} options={tabOptions} onChange={(e) => this.setState({levelType: e.value})}></SelectButton>
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