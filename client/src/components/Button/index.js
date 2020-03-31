import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function TextButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box pt={1.5}>
      <Button>search</Button>
      {/* <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons" color="primary">
        Link
      </Button> */}
      </Box>
    </div>
  );
}



// import React from "react";
// import "./style.css";

// // The ...props means, spread all of the passed props onto this element
// // That way we don't have to define them all individually
// function DeleteBtn(props) {
//   return (
//     <button className="delete-btn" {...props} role="button" tabIndex="0">
//       {props.children}
//     </button>
//   );
// }



// export default DeleteBtn;
