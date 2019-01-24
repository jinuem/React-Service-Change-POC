import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import serviceChange from './serviceCommonComponents/serviceChange'
import '../vzrf/styles/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import '../vzrf/styles/styles.css';
const Root = () => (

    <Router>
        <Route path="/" component={serviceChange} />
    </Router>

)

export default Root