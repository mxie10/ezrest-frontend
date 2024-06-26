'use client'
import {useRouter} from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import useRegisterModal from '../../hooks/useRegisterModal';
import useLoginModal from '../../hooks/useLoginModal';
import Modal from './Modal';
import Heading from './components/Heading';
import Input from './components/InputAlt';
import { register } from '../../auth/auth';

const RegisterModal = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);

    const toggle = useCallback(()=>{
        registerModal.onClose();
        loginModal.onOpen();
    },[loginModal,registerModal])

    const handleRegister = () => {
        if (username.trim() === '' || password.trim() === ''|| email.trim() === '') {
          setMessage('Please fill in all fields');
          return;
        }
        if (password.trim() !== confirmedPassword.trim()) {
          setMessage('Passwords do not match');
          return;
        }
        register(username, password, email)
            .then(res => {
                if (res === 'success') {
                    setMessage(null);
                    registerModal.onClose();
                    loginModal.onOpen();
                    router.push('/');
                }else{
                    setMessage('Username or email address already exists.');
                }
            }
        ).catch(err => {
            console.log(err);
        })
      }

    const bodyContent = (
        <div className='flex flex-col'>
            <div className='flex flex-col gap-4'>
                <Heading
                    title="Welcome to EZRent"
                    subtitle='Create an account'
                />
                <Input
                    id="username"
                    label="User Name"
                    disabled={isLoading}
                    required
                    onChangeValue={text => setUsername(text)}
                />
                <Input
                    id="password"
                    type="password"
                    label="Password"
                    disabled={isLoading}
                    required
                    onChangeValue={text => setPassword(text)}
                />
                <Input
                    id="conirmPassword"
                    type="password"
                    label="Confirm Password"
                    disabled={isLoading}
                    required
                    onChangeValue={text => setConfirmedPassword(text)}
                />
                <Input
                    id="emailaddress"
                    label="Email"
                    disabled={isLoading}
                    required
                    onChangeValue={text => setEmail(text)}
                />
                {/* Hello Modal Body */}
               
            </div>
             <div className='text-red-600 text-center mt-3'>{message}</div>
        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <div
                className='
                    text-neutral-500
                    text-center
                    mt-4
                    font-light
                '
            >
                <div className='justify-center text-center flex flex-row item-cen gap-2'>
                    <div>
                        Already have an account?
                    </div>
                    <div
                        onClick={toggle}
                        className='
                            text-neutral-800
                            cursor-pointer
                            hover:underline
                        '
                    >
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Register"
            onClose={registerModal.onClose}
            body={bodyContent}
            footer={footerContent}
            actionlabel='Register'
            handleOnSubmit={handleRegister}
        />
    )
}

export default RegisterModal;