import { createContext, useContext, useEffect, useState } from 'react'
import { Menu } from './types'

//@ts-ignore
const MenuContext = createContext<Menu>()

export function useMenu() {
    return useContext(MenuContext)
}

export function MenuProvider({ children }: { children: any }) {
    const [open, setOpen] = useState(false)

    return <MenuContext.Provider value={{ open, setOpen }}>{children}</MenuContext.Provider>
}
