import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';


const SignupForm: React.FC = () => {
    useEffect(() => {
        // Update the document title using the browser API
    });

    const onClick = () => {
        alert('hello')
    }

    return (
        <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden' p="10px" bg="#fff">
            <FormControl isRequired pb="3">
                <FormLabel htmlFor='email-address'>Email</FormLabel>
                <Input name="email" id='email-address' placeholder='joe@gmail.com' type="email" />
            </FormControl>
            <FormControl isRequired pb="3">
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input name="password" id='password' type="password" />
            </FormControl>
            <Button onClick={onClick} colorScheme='blue'>Sign Up</Button>
        </Box>
    )
};

export default SignupForm;
