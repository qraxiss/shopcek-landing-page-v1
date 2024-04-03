import { createContext, useContext, useEffect, useState, useRef } from 'react'
import { Menu } from './types'

//@ts-ignore
const MenuContext = createContext<Menu>()

export function useMenu() {
    return useContext(MenuContext)
}

export function MenuProvider({ children }: { children: any }) {
    const [isOpen, setOpen] = useState(false)
    const [close, setClose] = useState(() => {})
    const ref = useRef()

    const handleIsOpen = () => {
        setOpen(!isOpen)
    }

    const closeSideBar = () => {
        setOpen(false)
    }

    useEffect(() => {
        console.log(close)
    }, [close])

    return (
        <MenuContext.Provider
            value={{
                ref,
                isOpen,
                handleIsOpen,
                closeSideBar,
                stateChangeHandler: (newState: any) => setOpen(newState.isOpen),
                close: close as any,
                setClose
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}
