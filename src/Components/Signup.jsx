import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';

export default function Signup() {
    let [register, setregister] = useState({
        name: "",
        usename: "",
        phone: "",
        email: "",
        password: "",
        cpassword: ""
    })
    function getData(name, value) {
        setregister((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })
    }
    function postData() {
        if (register.password === register.cpassword)
            alert(
                `
                Name:${register.name}
                User Name:${register.username}
                Phone:${register.phone}
                Email:${register.email}
                Password:${register.password}
                Confirm Password:${register.cpassword}
            `
            )
        else
            alert("Password and Confirm Password does not matched!!!")
    }
    return (
        <Grid container spacing={2}>
            <Grid item md={2} xs={12}>
            </Grid>
            <Grid item md={8} xs={12}>
                <h5 className='background text-light text-center p-2'>Signup Section</h5>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '98%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}
                        id="outlineed-name-input"
                        label="name*"
                        type="text"
                        autoComplete="current-name"
                        placeholder='Enter Name'
                        name='name'
                    />
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}
                        id="outlineed-username-input"
                        label="UserName*"
                        type="username"
                        autoComplete="current-username"
                        placeholder='Enter User Name'
                        name='username'
                    />
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}
                        id="outlineed-email-input"
                        label="Email*"
                        type="email"
                        autoComplete="current-email"
                        placeholder='Enter Email'
                        name='email'
                    />
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}
                        id="outlineed-phone-input"
                        label="Phone*"
                        type="text"
                        autoComplete="current-phone"
                        placeholder='Enter Phone Number'
                        name='phone'
                    />
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}

                        id="outlineed-password-input"
                        label="Password*"
                        type="password"
                        autoComplete="current-password"
                        placeholder='Enter Password'
                        name='password'
                    />
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}
                        id="outlineed-cpassword-input"
                        label="Confirm Password*"
                        type="password"
                        autoComplete="current-cpassword"
                        placeholder='Enter Confirm Password'
                        name='cpassword'
                    />
                    <Button variant="contained" className='background' onClick={postData}>Signup</Button>
                    <Link href='/login' color='inherit' underline='none'>Already User? Login to Your Account</Link>
                </Box>
            </Grid>
            <Grid item md={2} xs={12}>
            </Grid>
        </Grid>
    )
}
