import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ZikoraSave from './zikoraSave';
import Footer from '../../components/footer'
import ZikoraTarget from './zikoraTarget';
import ZikoraForKid from './zikoraForKid';
import ZikoraEsusu from './zikoraEsusu';


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

  const tabsStyle = {
    '@media (max-width: 639px)': {
      padding: '0.2rem', minWidth: '50vw',
      fontSize: '12px'
  }
   
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ 
        borderBottom: 1,
        borderColor: 'divider'
        }}>
        <Tabs value={value} allowScrollButtonsMobile={true} onChange={handleChange} aria-label="basic tabs example" variant='fullWidth' 
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
          '@media (max-width: 639px)': {
            width: '100%',
            padding: '0',
            paddingBottom: '1rem',
            // display: 'flex',
            // flexDirection: 'row',
            // overflow: 'auto',
        }
          }}>

          <Tab label="Zikora Save" sx={{...tabsStyle}}   {...a11yProps(0)} />
          <Tab label="Zikora Target" sx={{...tabsStyle}}  {...a11yProps(1)} />
          <Tab label="Zikora For Kids" sx={{...tabsStyle}}  {...a11yProps(2)} />
          <Tab label="Zikora Esusu" sx={{...tabsStyle}}  {...a11yProps(2)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ZikoraSave />
      </TabPanel>
      <TabPanel value={value} index={1}>
       <ZikoraTarget />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ZikoraForKid />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ZikoraEsusu />
      </TabPanel>
      <Box sx={{marginTop: '8rem'}}>
        <Footer />
      </Box>
    </Box>
  );
}