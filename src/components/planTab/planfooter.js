import React, { Component } from 'react'
import {Button} from 'primereact/button';


class PlanFooter extends Component {
    render() {
      return (
        <div className="p-grid p-justify-end">
        <div className="p-col-2">
            <div className="box">
            <Button label="Undo" className="p-button-raised p-button-secondary" />
            </div>
        </div>
        <div className="p-col-2">
            <div className="box">
            <Button label="Get Share Plans" className="p-button-raised p-button-secondary" />
            </div>
        </div>
        <div className="p-col-1">
            <div className="box">
            <Button label="Update" className="p-button-raised p-button-secondary" />
            </div>
        </div>
    </div>
      )
    }
}

export default PlanFooter