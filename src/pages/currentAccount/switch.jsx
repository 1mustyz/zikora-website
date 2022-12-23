import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CurrentAccount from './currentAccount';
import Footer from '../../components/footer'
import BankingAccount from './bankingAccount';
import ZikoraSalary from './zikoraSalary';


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
        <Box sx={{}}>
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant='fullWidth' 
          TabIndicatorProps={{
            style: {
              backgroundColor: "#608E75",
              textTransform: 'none',
            }
          }}
          sx={{
          paddingLeft: '6rem',
          paddingRight: '6rem',
          textTransform: 'none',
          }}>

          <Tab label="Zikora Personal"  {...a11yProps(0)} />
          <Tab label="Zikora Business Banking"  {...a11yProps(1)} />
          <Tab label="Zikora Salary" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CurrentAccount />
      </TabPanel>
      <TabPanel value={value} index={1}>
       <BankingAccount />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ZikoraSalary />
      </TabPanel>
      <Box sx={{marginTop: '8rem'}}>
        <Footer />
      </Box>
    </Box>
  );
}