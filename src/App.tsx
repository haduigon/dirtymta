// import React from 'react';
// import logo from './logo.svg';
import "./App.css";
import React from 'react';
import { Container, Typography } from '@mui/material';
// import { Box } from '@mui/material';
// import { Paper } from '@mui/material';
import '@fontsource/roboto';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Outlet } from "react-router-dom";
// import { Stack } from '@mui/material';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import { useState } from 'react';
// import Logo from "./components/Logo";
// import logo from '../src/assets/img/dirtymta2.png'
// import TabPanel from '@mui/lab/TabPanel';
import Navbar from "./components/Navbar";

interface Props {
  children?: React.ReactNode;
  index: string;
  value: string;
}

export function TabPanel(props: Props): JSX.Element {
  console.log(+props.value !== +props.index, 'props.value !== props.index');

  return (
    <div
      role="tabpanel"
      hidden={props.value !== props.index}
      id={`test-tabpanel-${props.index}`}
      aria-labelledby={`test-tab-${props.index}`}
    >
      {props.value === props.index && <Typography>{props.children}</Typography>}
    </div>
  );
}

function App() {
  // const [value, setValue] = useState('0');

  // function handleChange(_event: React.SyntheticEvent, newValue: string) {
  //   setValue(newValue);
  // }
  return (
    <div>

      <Navbar />
      
      <Outlet />
      {/* <Container maxWidth="md">

          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
          >
            <Tab value="0" label="Who we are"  />
            <Tab value="1" label="Whom it is needed for" />
            <Tab value="2" label="What do we suggest" />
            <Tab value="3" label="Contact us" />
          </Tabs>

        <TabPanel value={value} index={'0'}>
          Content for New Arrivals
        </TabPanel>
        <TabPanel value={value} index={'1'}>
          Content for Item Two
        </TabPanel>
        <TabPanel value={value} index={'2'}>
          Content for Item Three
        </TabPanel>
        <TabPanel value={value} index={'3'}>
          Contact us
        </TabPanel>
      </Container> */}
    </div>
  );
}

export default App;
