import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import IconButton from '@mui/material/IconButton';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


export default function FormDialog({phoneNumber, onVerificationSuccess, onVerificationFailed, onChangeMobileNumber}) {
    
    const [open, setOpen] = useState(false);
    const [otpValue, setOtpValue] = useState("");
    const [failed, setFailed] = useState(false);

    const firebaseConfig = {
        apiKey: "AIzaSyBOr2TXM8OnqUdXNTSsb9X0i4wRkuhWUOQ",
        authDomain: "schoolmate-cdd22.firebaseapp.com",
        projectId: "schoolmate-cdd22",
        storageBucket: "schoolmate-cdd22.appspot.com",
        messagingSenderId: "189522594600",
        appId: "1:189522594600:web:fe75cc8fba516ce2915e1d",
        measurementId: "G-ZHZDCXJ4DP"
    };

    firebase.initializeApp(firebaseConfig);

    function otpSent(e) {
        e.preventDefault();
        setOpen(true);
        const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
          size: 'invisible',
        });
        const number = `+91${phoneNumber}`
        firebase.auth().signInWithPhoneNumber(number, recaptchaVerifier)
          .then((confirmationResult) => {
            const verifyButton = document.getElementById('verify-button');
            verifyButton.addEventListener('click', () => {
              const code = document.getElementById('otp-input').value; // Retrieve the OTP entered by the user
              confirmationResult.confirm(code)
                .then((result) => {
                    console.log('result', result)
                    if(result.operationType==='signIn'){
                        onVerificationSuccess()
                        handleClose()
                        setFailed(false)
                    }
                    else{
                        setFailed(true)
                        onVerificationFailed()
                    }
                  console.log('result', result);
                  // User successfully verified the phone number
                  // TODO: navigate to next screen or perform other actions
                })
                .catch((error) => {
                  console.log('error', error);
                  setFailed(true)
                  onVerificationFailed()
                  // Handle error
                });
            });
          })
          .catch((error) => {
            console.log('error', error);
            // Handle error
          });
      }

    const handleClose = () => {
        setOpen(false);
    };
    const handleChandMobileNumber=()=>{
        onChangeMobileNumber();
        setOpen(false);
    }
    


    return (
        <div>
            <Button onClick={otpSent}
                style={{ "marginTop": '6px' }}
                fullWidth
                variant="text"
                size="large"
                disabled={phoneNumber.length !== 10 ? true : false}
            >
                Send OTP
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Verification</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {`To verify given Mobile Number ${phoneNumber}, please enter the OTP  here`}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="otp-input"
                        label="OTP"
                        type="OTP"
                        fullWidth
                        variant="standard"
                        value={otpValue}
                        onChange={(e)=>{setOtpValue(e.target.value)}}
                        InputProps={{
                            endAdornment: failed ? (
                              <IconButton edge="end">
                                <ErrorOutlineIcon color="error" />
                              </IconButton>
                            ) : null  
                          }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleChandMobileNumber}>Change Mobile Number</Button>
                    <Button  id='verify-button' disabled={otpValue.length!==6}>Verify</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}