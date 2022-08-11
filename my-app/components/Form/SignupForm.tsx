import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import { useCsrfToken } from '../../hooks/useCsrfToken';
import axios from 'axios'

const loginUrl = 'http://localhost:8000/login/'

const SignupForm: React.FC = () => {
    const csrftoken = useCsrfToken()
    console.log(csrftoken)
    useEffect(() => {
        // Update the document title using the browser API
    });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const onSubmit = () => {
        const data = {
            username,
            password,
        }

        const headers: {
            'X-CSRFToken'?: string,
        } = {}

        if (csrftoken) {
            headers['X-CSRFToken'] = csrftoken
        }

        // Default options are marked with *
        axios({
            method: 'post',
            url: loginUrl,
            data: new URLSearchParams(data),
            headers,
            validateStatus: (status) => {
                console.log(status)
                return status >= 200 && status <= 302; // default
            }
        })
        .then(function(res) {
            setLoginStatus('success')
            setTimeout(() => {
                window.location.assign("/home/")
            })
        })
        .catch(function(error) {
            setLoginStatus('error')
        })
    }


    return (
        <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden' p="10px" bg="#fff">
            <FormControl isRequired pb="3">
                <FormLabel htmlFor='email-address'>Email</FormLabel>
                <Input onChange={(event) => setUsername(event.currentTarget.value )} name="email" id='email-address' placeholder='joe@gmail.com' type="email" />
            </FormControl>
            <FormControl isRequired pb="3">
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input onChange={(event) => setPassword(event.currentTarget.value)} name="password" id='password' type="password" />
            </FormControl>
            <Button onClick={onSubmit} colorScheme='blue'>Log In</Button>
            { loginStatus === 'error' ? (
                <Alert status='error' style={{ marginTop: '10px' }}>
                    <AlertIcon />
                    <AlertTitle>Login failed</AlertTitle>
                    <AlertDescription>Please check your credentials and try again. The fields are case-sensitive.</AlertDescription>
                </Alert>
            ) : loginStatus === 'success' && (
                <Alert status='success' style={{ marginTop: '10px' }}>
                    <AlertIcon />
                    <AlertTitle>Login successful</AlertTitle>
                    <AlertDescription>Redirecting you to your home.</AlertDescription>
                </Alert>
            )}
        </Box>
    )
};

export default SignupForm;
