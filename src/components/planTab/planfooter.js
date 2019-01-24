import React, { Component } from 'react'
import {Button} from 'primereact/button';


class PlanFooter extends Component {
    render() {
      return (
        <div className="p-grid ">
        <div className="p-col-4 p-offset-8 p-col-align-end">
            <div className="box footer_buttons_group">
            <Button label="Undo" className="burgundybutton" />
            <Button label="Get Share Plans" className="burgundybutton" disabled/>
            <Button label="Update" className="burgundybutton"/>

            </div>
        </div>

    </div>
      )
    }
}

export default PlanFooter