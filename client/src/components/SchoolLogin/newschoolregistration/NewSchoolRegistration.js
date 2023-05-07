import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { Formik } from 'formik';
import SchoolForm from './SchoolForm';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)`
  },
  box: {
    width: '80%',
    height: '80%',
    background: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
  },
}));

function NewSchoolRegistration() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {/* <Typography variant="h5" align="center" display="block" >School Registration Form</Typography> */}
      <div className={classes.box}>
        
        <Formik
          initialValues={{ name: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
               
          <SchoolForm/>
        </Formik>
      </div>
    </div>
  );
}

export default NewSchoolRegistration;