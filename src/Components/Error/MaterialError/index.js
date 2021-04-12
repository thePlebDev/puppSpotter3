import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';





function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Error =({error,showError,setShowError})=> {
  const classes = useStyles();


  const handleClose = (event, reason) => {

    setShowError(false);
  };

  return (
        <div className={classes.root} >
          <Snackbar open={showError} autoHideDuration={6000} onClose={handleClose}>
              {
                showError && error
                  ?
                <Alert onClose={handleClose} severity="error">
                  {error}
                </Alert>
                  :
                <div></div>
              }
            
          </Snackbar>

        </div>
  );
}

export default Error
