import React, {Component} from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
//import {TabView,TabPanel} from 'primereact/tabview';

class ServiceSideBar extends Component {

    constructor(props){
        super(props);
        
    }

    render() {
        return (    
           <div>
            
            
<div className="tabordion">
  <section id="section1">
    <input type="radio" name="sections" id="option1" checked/>
    <label for="option1">John Lennon</label>
    <article>
      <h2>John Lennon</h2>
      <p>hiiiiii</p>
    </article>
  </section>
  <section id="section2">
    <input type="radio" name="sections" id="option2"/>
    <label for="option2">Paul McCartney</label>
    <article>
      <h2>Paul McCartney</h2>
      <p>2222222222</p>
    </article>
  </section>
  <section id="section3">
    <input type="radio" name="sections" id="option3"/>
    <label for="option3">George Harrison</label>
    <article>
      <h2>George Harrison</h2>
      <p>33333333333</p>
    </article>
  </section>
  <section id="section4">
    <input type="radio" name="sections" id="option4"/>
    <label for="option4">Ringo Starr</label>
    <article>
      <h2>Ringo Starr</h2>
      <p>44444444444</p>
    </article>
  </section>
</div>

</div> 




        );
    }
}

export default ServiceSideBar;