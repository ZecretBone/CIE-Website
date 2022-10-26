import Capstone from "./Component/Capstone";
import Studentproject from "./Component/Studentproject"
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Box";


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Projectlist() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{p:"0", pb:"4rem"}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", p:"0",m:"0" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{mt:"2rem"}}
        >
          <Tab label="Capstone projects"  {...a11yProps(0)} sx={{ml:"10vw", color:"orange"}}/>
          <Tab label="Student projects" sx={{color:"orange"}} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} sx={{p:0, m:0}} index={0}>
        <Capstone/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Studentproject/>
      </TabPanel>
    </Container>
  );
}
