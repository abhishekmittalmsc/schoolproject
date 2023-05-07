import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { SchoolLogin } from '../../actions/schoolLogin';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: `url('https://source.unsplash.com/1600x900/?school,education') no-repeat center center fixed`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    background: 'rgba(255, 255, 255, 0.7)',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submit: {
    width: '100%',
    marginTop: theme.spacing(3),
    borderRadius: theme.spacing(2),
    background: 'transparent',
    border: '2px solid white',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      background: 'white',
      color: '#3f51b5',
    },
  },
  link: {
    color: 'white',
    marginTop: theme.spacing(2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const navigate=useNavigate();

  const [schoolId, setSchoolId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleRegisterClick = () => {
    navigate('/newschoolregistration');
  }
  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <h2>Login to School Dashboard</h2>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            required
            label="School ID"
            name="schoolId"
            value={schoolId}
            className={classes.input}
            onChange={(e) => setSchoolId(e.target.value)}
          />
          <TextField
            variant="outlined"
            required
            label="Password"
            name="password"
            type="password"
            value={password}
            className={classes.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.submit}
          >
            Login
          </Button>
          <Link href="#" className={classes.link}>
            Forgot Password?
          </Link>
          <Link href="#" variant="body2" onClick={handleRegisterClick}>
            Register new school
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
