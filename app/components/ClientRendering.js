'use client'

import { useState, useEffect } from "react";
import ReactLoading from 'react-loading';

const ClientRendering = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <ReactLoading height={25} width={70} color="#000000" />
            </div>
        )
    }

    return (
        <>
            {children}
        </>
    );
}

export default ClientRendering;