
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
                <div id="serviceHeader" className="p-grid">
                    <div className="p-col-12 p-md-12 p-lg-5 p-lg-offset-1">
                    <span className="boldText">Billing Outlet ID </span>
                    <InputText className="billingInput"/>
                    <img onClick={()=>alert('clicked')} className="searchIcon" src={searchIcon}/>
                    <span className="addOnText"> VZM CUSTOMER SERVICE</span>
                    </div>
                    <div className="p-col-12 p-md-9 p-lg-5">
                    <span className="boldText">Sales Rep ID </span>
                    <InputText className="salesRepInput"/>
                    <img onClick={()=>alert('clicked')} className="searchIcon" src={searchIcon}/>
                    <span className="addOnText"> ENC REP</span>
                    </div>
                    <div className="p-col-12 p-md-3 p-lg-1">
                    <Button label="History" className="burgundybutton"/>
                    </div>
                </div>
        )
    }
}

export default ServiceHeader;