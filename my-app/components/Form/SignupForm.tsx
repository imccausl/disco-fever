import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import { useCsrfToken } from '../../hooks/useCsrfToken';

const loginUrl = 'http://localhost:8000/login/'

const SignupForm: React.FC = () => {
    const csrftoken = useCsrfToken().data
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

        // Default options are marked with *
        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(data)
        });
    }


    return (
        <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden' p="10px" bg="#fff">
            <FormControl isRequired pb="3">
                <FormLabel htmlFor='email-address'>Email</FormLabel>
                <Input onClick={(event) => setUsername(event.target.value)} name="email" id='email-address' placeholder='joe@gmail.com' type="email" />
            </FormControl>
            <FormControl isRequired pb="3">
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input onClick={(event) => setPassword(event.target.value)} name="password" id='password' type="password" />
            </FormControl>
            <Button onClick={onSubmit} colorScheme='blue'>Log In</Button>
        </Box>
    )
};

export default SignupForm;
