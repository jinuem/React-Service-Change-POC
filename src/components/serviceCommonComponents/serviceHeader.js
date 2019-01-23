
import React, { Component } from 'react'
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import searchIcon from '../../images/Icon_Search_Glass.png';
class ServiceHeader extends Component {
    constructor(props){
        super(props);
        this.state= {
            levelType:'',
        };
    }
    render() {
        return(
                <div class="p-grid p-justify-between">
                    <div class="p-col-12 p-md-6 p-lg-5">Billing Outlet ID
                    <InputText/>
                    <img onClick={()=>alert('clicked')} className="searchIcon" src={searchIcon}/>
                    VZM CUSTOMER SERVICE
                    </div>
                    <div class="p-col-12 p-md-6 p-lg-5">Sales Rep ID
                    <InputText/>
                    <img onClick={()=>alert('clicked')} className="searchIcon" src={searchIcon}/>
                    ENC REP
                    </div>
                    <div class="p-col-12 p-md-2 p-lg-2">
                    <Button label="History" className="p-button-danger"/>
                    </div>
                </div>
        )
    }
}

export default ServiceHeader;