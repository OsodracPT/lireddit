import React from 'react'
import { Formik, Form } from 'formik'
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { Box, Button } from '@chakra-ui/react';

interface registerProps {

}

export const Register: React.FC<registerProps> = ({ }) => {
    return (
        <Wrapper variant="small">
            <Formik initialValues={{ username: "", password: "" }}
                onSubmit={(values) => {
                    console.log(values);
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name="username" placeholder="username" label="Username"></InputField>
                        <Box mt={4}>
                            <InputField name="password" placeholder="password" label="Password" type="password"></InputField>
                        </Box>
                        <Button mt={4} isLoading={isSubmitting} type="submit" colorScheme="teal"> Register</Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
}

export default Register