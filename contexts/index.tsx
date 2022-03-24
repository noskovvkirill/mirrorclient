import React, { useContext, createContext, useState, useMemo, useCallback, useEffect } from 'react'
import { useAccount } from 'wagmi'

declare let window: any;

type SignedWithEthAccount = {
    address?: string
    error?: Error | undefined
    loading?: boolean
}

export type NotificationType = {
    message: string
}

type StoreContext = {
    isAuth: boolean;
    isEmailPopUp: boolean;
    TogglePopUp: (newState?: boolean) => void;
    ToggleAuth: (newState?: boolean) => void;
    setWithEth: (fn: (oldState: SignedWithEthAccount) => SignedWithEthAccount) => void
    withEth: SignedWithEthAccount;
    notifications:NotificationType[];
    setNotifications: (fn: (oldState: NotificationType[]) => NotificationType[]) => void;
}
const Store = createContext<StoreContext | null>(null)

export const StoreProvider = ({ children }: { children: React.ReactNode[] | React.ReactNode }) => {

    const [{ data }] = useAccount()

    const [isAuth, setIsAuth] = useState(false)
    const [withEth, setWithEth] = useState<SignedWithEthAccount>({})
    const [isEmail, setIsEmail] = useState<boolean>(false)
    const [isEmailPopUp, setIsEmailPopUp] = useState<boolean>(false)

    const [notifications, setNotifications] = useState<any>([])

    const ToggleAuth = useCallback((newState?: boolean) => {
        if (newState) {
            setIsAuth(newState)
        } else {
            setIsAuth(!isAuth)
        }
    }, [isAuth])

    const TogglePopUp = useCallback((newState?: boolean) => {
        console.log('Toggle Email PopUp to', newState)
        if (newState) {
            setIsEmailPopUp(true)
        } else {
            setIsEmailPopUp(false)
            localStorage.setItem('EmailPopUpClose', 'true')
        }
    }, [isAuth])

    const getUserEmail = async () => {
        const isEmail = await fetch('/api/email/isEmail', {
            method: 'POST',
        })
            .then(d => d.json()).then(res => res.ok)
        console.log('Is User Email? 🦤 ', isEmail)
        return isEmail
    }

    const getUserSettings = async () => {
        console.log('Checking user email 💌')
        const EmailPopUpClose = localStorage.getItem('EmailPopUpClose')
        //fetch user email 
        const isEmail = await getUserEmail()
        if (isEmail) {
            setIsEmail(true)
        } else {
            setIsEmail(false)
        }
        if (EmailPopUpClose !== 'true' && !isEmail) {
            TogglePopUp(true)
        }
    }


    useEffect(() => {
        if (withEth.address && !isEmail && data?.address) {
            getUserSettings()
        }
    }, [withEth, data])

    const value = useMemo(() => ({
        isAuth,
        ToggleAuth,
        TogglePopUp,
        withEth,
        setWithEth,
        isEmailPopUp,
        notifications,
        setNotifications
    }), [isAuth, withEth, TogglePopUp, ToggleAuth, 
        notifications,
        setNotifications,
        isEmailPopUp])

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



