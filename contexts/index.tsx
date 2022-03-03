import React, { useContext, createContext, useState, useMemo, useCallback, useEffect } from 'react'

declare let window: any;

type SignedWithEthAccount = {
    address?: string
    error?: Error | undefined
    loading?: boolean
}

type StoreContext = {
    isAuth: boolean;
    ToggleAuth: (newState?: boolean) => void;
    setWithEth: (fn: (oldState: SignedWithEthAccount) => SignedWithEthAccount) => void
    withEth: SignedWithEthAccount;
}
const Store = createContext<StoreContext | null>(null)

export const StoreProvider = ({ children }: { children: React.ReactNode[] | React.ReactNode }) => {

    const [isAuth, setIsAuth] = useState(false)
    const [withEth, setWithEth] = useState<SignedWithEthAccount>({})


    const ToggleAuth = useCallback((newState?: boolean) => {
        if (newState) {
            setIsAuth(newState)
        } else {
            setIsAuth(!isAuth)
        }
    }, [isAuth])

    const value = useMemo(() => ({
        isAuth,
        ToggleAuth,
        withEth,
        setWithEth
    }), [isAuth, withEth, ToggleAuth])

    return (
        <Store.Provider value={value}>
            {children}
        </Store.Provider>)
}


export const useStore = () => {
    const context = useContext(Store);
    if (!context) {
        throw new Error("context was not found useAuth");
    }
    return context;
};



