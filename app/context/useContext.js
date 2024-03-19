import { createContext, useState, useEffect } from "react";
import { getToken } from '../utils/functions';
import { getUser } from '../auth/auth';

export const Context = createContext(undefined);

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const updateUser = (user) => {
        setUser(user)
    }

    useEffect(() => {
        const initUser = async () => {
            try {
                const token = await getToken();
                if (token) {
                    const user = await getUser()
                    user && updateUser(user)
                } else {
                    updateUser(null)
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        initUser()
    }, [])

    const contextValue = {
        user: user,
        setUser: setUser,
        updateUser: updateUser,
        isRefreshing:isRefreshing,
        setIsRefreshing:setIsRefreshing
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

