
import React, { Component } from 'react'
import {DataTable} from 'primereact/datatable';
import {Button} from 'primereact/button';
import { Column } from 'primereact/column';

class ServiceFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                { "MDN":"9493928192","Device":"Mobile","MDN Change" : "MDN Change", "SIM" :"SIM1","Plan":"Plan","Feature":"Feature","SPO":"SPO", "Status":"Status","Copy Line":"Copyline"},                 
                { "MDN":"2017389387","Device":"","MDN Change" : "", "SIM" :"","Plan":"Plan","Feature":"","SPO":"SPO", "Status":"Status","Copy Line":"Copyline"},
                { "MDN":"4017929729","Device":"","MDN Change" : "", "SIM" :"","Plan":"","Feature":"Feature","SPO":"SPO", "Status":"Status","Copy Line":"Copyline"}
              ],
               
        };

    }

    render() {
        const columns = [
            {field:"MDN", header:"MDN"},
            {field:"Device", header:"Device" },
            {field:"MDN Change", header:"MDN Change" },
            {field:"SIM", header:"SIM" },
            {field:"Plan", header:"Plan" },
            {field:"Feature", header:"Feature" },
            {field:"SPO", header:"SPO" },
            {field:"Status", header:"Status" },
            {field:"Copy Line", header:"Copy Line" }
        ]
        const dynamicColumns = columns.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} sortable={true}/>;
        });
        return (
            <div>
                ------------------------------------------------Order Preview----------------------------------------------
                <div class="p-grid p-justify-between">
                    <div class="p-col-12 p-md-11 p-lg-11">
                            <div className="p-grid p-dir-rev">
                            <div className="p-col">
                                <div className="content-section implementation">
                                    <DataTable value={this.state.data}>
                                    {dynamicColumns}
                                    </DataTable>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div class="p-col-12 p-md-1 p-lg-1">
                            <div className="p-grid p-dir-col">
                                <div className="p-col">
                                    <div className="box">
                                    <Button label="Validate" disabled="disabled" className="p-button-raised p-button-secondary" />
                                    </div>
                                </div>
                                <div className="p-col">
                                    <div className="box">
                                    <Button className="footerbutton" label="View Promos" disabled="disabled" className="p-button-raised p-button-secondary" />
                                    </div>
                                </div>
                                <div className="p-col">
                                    <div className="box">
                                    <Button label="WFM" disabled="disabled" className="p-button-raised p-button-secondary" />
                                    </div>
                                </div>
                                <div className="p-col">
                                    <div className="box">
                                    <Button label="Submit" disabled="disabled" className="p-button-raised p-button-secondary" />
                                    </div> 
                                </div>
                            </div>
                            
                           
                            
                    </div>
                </div>
            
            </div>
            )
    }
}

export default ServiceFooter;