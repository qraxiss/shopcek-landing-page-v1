import { createContext, useContext, useEffect, useState } from 'react'
import { Menu } from './types'

//@ts-ignore
const MenuContext = createContext<Menu>()

export function useMenu() {
    return useContext(MenuContext)
}

export function MenuProvider({ children }: { children: any }) {
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
        setOpen(!isOpen)
    }

    const closeSideBar = () => {
        console.log('close')
        setOpen(false)

        console.log(isOpen)
    }

    useEffect(() => {
        console.log(isOpen)
    }, [isOpen])

    return <MenuContext.Provider value={{ isOpen, handleIsOpen, closeSideBar }}>{children}</MenuContext.Provider>
}
