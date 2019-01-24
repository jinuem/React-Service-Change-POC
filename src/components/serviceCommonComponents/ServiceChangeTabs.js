import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import PlanHeader from '../planTab/planHeader';
import PlanTable from '../planTab/planTable';
import PlanFooter from '../planTab/planFooter';



class ServiceChangeTabs extends Component {
  render() {
    return (
      <Tabs defaultTab="vertical-tab-two" vertical>
        <TabList>
          <Tab tabFor="vertical-tab-one">Devices</Tab>
          <Tab tabFor="vertical-tab-two">Plan</Tab>
          <Tab tabFor="vertical-tab-three">Features</Tab>
        </TabList>
        <TabPanel tabId="vertical-tab-one">
          <p>Tab 1 content</p>
        </TabPanel>
        <TabPanel tabId="vertical-tab-two">
        <PlanHeader/>
                <PlanTable/>
                <PlanFooter/>
        </TabPanel>
        <TabPanel tabId="vertical-tab-three">
          <p>Tab 3 content</p>
        </TabPanel>
      </Tabs>
    );
  }
}

export default ServiceChangeTabs;