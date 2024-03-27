'use client'

import { useCallback, useState, useContext } from 'react';
import useRegisterModal from '../../hooks/useRegisterModal'
import Modal from './Modal';
import Heading from './components/Heading'
import useLoginModal from '../../hooks/useLoginModal'
import { useRouter } from 'next/navigation';
import Input from './components/InputAlt'
import { Context } from '@/app/context/useContext';
import { login } from '../../app/auth/auth';

const LoginModal = () => {
    const router = useRouter();
    const { user, setUser,updateUser } = useContext(Context);
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal()
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
 
    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal])

    const handleLogin = () => {
        if (username === '' || password === '') {
            setMessage('Please fill in all fields');
        } else {
            login(username, password)
            .then(res => {
                if (res.user) {
                    updateUser(res.user);
                    loginModal.onClose();
                    router.push('/');                    
                } else {
                    setMessage(res.message);
                }
            }).catch(err => {
                setMessage(err.message);
            })
        }
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title="Welcome back"
                subtitle='Login to your account'
            />
            <Input
                id="userName"
                label="Username"
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
            {/* Hello Modal Body */}
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
                        Do not have an account?
                    </div>
                    <div
                        onClick={toggle}
                        className='
                            text-neutral-800
                            cursor-pointer
                            hover:underline
                        '
                    >
                        Create an account
                    </div>
                </div>

            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Log in"
            onClose={loginModal.onClose}
            body={bodyContent}
            footer={footerContent}
            handleOnSubmit={handleLogin}
        />
    )
}

export default LoginModal;