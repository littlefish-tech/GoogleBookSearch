import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./style.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "80%",
    margin: "auto"
  },
}));

export default function Nav() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Search a Book" {...a11yProps(0)} href="/Search" />
          <Tab label="saved books" {...a11yProps(1)} href="/Saved" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* <TabPanel value={value} index={0} dir={theme.direction} href="/Search" >
          Rearch for a Book
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} href="/Saved" >
          Saved Books
        </TabPanel> */}
      </SwipeableViews>
    </div>
  );
}


// import React from "react";
// import "./style.css";

// function Nav(props) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <a className="navbar-brand btn-outline-info clickBut" href="/Saved">
//         Saved Reading
//       </a>
//       <a className="navbar-brand btn-outline-info clickBut" href="/Search">
//        Back to Search
//       </a>
//     </nav>
//   );
// }

// export default Nav;
