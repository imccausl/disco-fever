import { FormControl, FormLabel, Input } from '@chakra-ui/react'
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
        });
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
        </Box>
    )
};

export default SignupForm;
