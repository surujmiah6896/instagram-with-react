import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

const Signup = () => {
    const [inputs, setInputs] = useState({
            fullName:'',
            userName:'',
            email:'',
            password:'',
        });

        const [showPassword, setShowPassword] = useState(false);
        const {loading, error, signup} = useSignUpWithEmailAndPassword();

  return (
    <>
                <Input 
                    placeholder='Enter Full Name'
                    fontSize={14}
                    size={"sm"}
                    type='text'
                    value={inputs.fullName}
                    onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                />

                <Input 
                    placeholder='Enter User Name'
                    fontSize={14}
                    size={"sm"}
                    type='text'
                    value={inputs.userName}
                    onChange={(e) => setInputs({...inputs, userName: e.target.value})}
                />

                <Input 
                    placeholder='Enter Email'
                    fontSize={14}
                    size={"sm"}
                    type='email'
                    value={inputs.email}
                    onChange={(e) => setInputs({...inputs, email: e.target.value})}
                />
        
            <InputGroup>
                    <Input 
                        placeholder='Password'
                        fontSize={14}
                        size={"sm"}
                        type={showPassword ? 'text' : 'password'}
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                <InputRightElement h={'full'}>
                        <Button variant={"ghost"} size={"sm"} onClick={()=>setShowPassword(!showPassword)}>
                            {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                {error && (
                    <Alert status='error' fontSize={13} p={2} borderRadius={4}>
                        <AlertIcon fontSize={12} />
                        {error.message}
                    </Alert>
                )}
            
                <Button
                    w={"full"}
                    colorScheme='blue'
                    size={"sm"}
                    fontSize={14}
                    onClick={() => signup(inputs)}
                    isLoading={loading}
                >
                    Sign up
                </Button>
    </>
  )
}

export default Signup
