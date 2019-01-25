import React, { Component } from 'react'
import {DataTable} from 'primereact/datatable';

import { Column } from 'primereact/column';

class PlanTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                { "MDN": "9876548909", "Plan Id": "92382",  "Description": "New Verizon Plan", "Make/Model": "Samsung Galaxy", "Access Change": 20,  "Alert": "", "Status": ""},
                { "MDN": "9873423432", "Plan Id": "92382",  "Description": "New Verizon Plan", "Make/Model": "Samsung Galaxy", "Access Change": 20,  "Alert": "Yes", "Status": ""},
                { "MDN": "9876555909", "Plan Id": "92382",  "Description": "New Verizon Plan", "Make/Model": "Samsung Galaxy", "Access Change": 20,  "Alert": "", "Status": "A"},
                { "MDN": "9876522909", "Plan Id": "92382",  "Description": "New Verizon Plan", "Make/Model": "Samsung Galaxy", "Access Change": 20,  "Alert": "", "Status": ""},
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
            return <Column  field={col.field} header={col.header} sortable={true} />;
        });
        return (
            <div>
                {/* <div className="p-grid p-dir-rev">
                    <div className="p-col">
                        <div id="pt_plantable"  className="content-section implementation">
                            <DataTable value={this.state.data}>
                                {dynamicColumns}
                            </DataTable>
                        </div>
                    </div>
                </div> */}
                <div className="p-grid p-dir-rev">
                    <div className="p-col">
                        <div id="pt_plantable"  className="content-section implementation p-datatable-hoverable-rows">
                        {/* <DataTable value={this.state.data} selectionMode="single" selection={this.state.select1} onSelectionChange={e => this.setState({select1: e.value})}>
                        <Column field="MDN" header="MDN" />
                        <Column field="Plan Id" header="Plan Id" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable> */}
                            <DataTable className="p-datatable-hoverable-rows" resizableColumns={true} columnResizeMode="fit" value={this.state.data} selection={this.state.selectedRows} onSelectionChange={e => this.setState({selectedRows: e.value})}>
                                <Column selectionMode="multiple" style={{width:'3em'}}/>
                                <Column field="MDN" header="MDN" sortable={true}/>
                                <Column field="Plan Id" header="Plan Id" sortable={true}/>
                                <Column field="Description" header="Description" sortable={true}/>
                                <Column field="Make/Model" header="Make/Model" sortable={true}/>
                                <Column field="Access Change" header="Access Change" sortable={true}/>
                                <Column field="Alert" header="Alert" sortable={true}/>
                                <Column field="Status" header="Status" sortable={true}/>
                            </DataTable> 
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default PlanTable;