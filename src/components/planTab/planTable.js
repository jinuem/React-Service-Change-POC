
import React, { Component } from 'react'
import {DataTable} from 'primereact/datatable';

import { Column } from 'primereact/column';

class PlanTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                { "MDN": "9876548909", "Plan Id": "92382",  "Description": "New Verizon Plan", "Make/Model": "Samsung Galaxy", "Access Change": 20,  "Alert": "", "Status": ""},
                { "MDN": "9873423432", "Plan Id": "92382",  "Description": "New Verizon Plan", "Make/Model": "Samsung Galaxy", "Access Change": 20,  "Alert": "", "Status": ""},
                { "MDN": "9876548909", "Plan Id": "92382",  "Description": "New Verizon Plan", "Make/Model": "Samsung Galaxy", "Access Change": 20,  "Alert": "", "Status": ""},
                { "MDN": "9876548909", "Plan Id": "92382",  "Description": "New Verizon Plan", "Make/Model": "Samsung Galaxy", "Access Change": 20,  "Alert": "", "Status": ""},
                { "MDN": "9876548909", "Plan Id": "92382",  "Description" : "sample no data"}
              ],
               
        };

    }

    render() {
        const columns = [
            {field:"MDN", header:"MDN"},
            {field:"Plan Id", header:"Plan Id" },
            {field:"Description", header:"Description" },
            {field:"Make/Model", header:"Make/Model" },
            {field:"Access Change", header:"Access Change" },
            {field:"Alert", header:"Alert" },
            {field:"Status", header:"Status" }
        ]
        const dynamicColumns = columns.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} sortable={true}/>;
        });
        return (
            <div className="p-grid p-dir-rev">
                <div className="p-col">
                    <div id="pt_plantable"  className="content-section implementation">
                        <DataTable value={this.state.data}>
                            {dynamicColumns}
                        </DataTable>
                    </div>
                </div>
            </div>)
    }
}

export default PlanTable