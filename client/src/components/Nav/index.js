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


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

export default function IconTabs() {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <Paper square className={classes.root}>
      <Tabs
        // value={value}
        // onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab label="news" icon={<PersonPinIcon />} aria-label="person" href="/search"/>
        <Tab label="Saved" icon={<FavoriteIcon />} aria-label="favorite" href="/saved"/>
      </Tabs>
    </Paper>
  );
}