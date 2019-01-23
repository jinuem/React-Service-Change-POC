import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Plan from './planTab/plan'
import '../vzrf/styles/primeflex.css';
import '../vzrf/styles/styles.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import ServiceChargeTabs from './serviceCommonComponents/ServiceChargeTabs';
const Root = () => (

    <Router>
        <Route path="/" component={Plan} />

    </Router>

)

export default Root