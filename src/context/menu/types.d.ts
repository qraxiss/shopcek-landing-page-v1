export type Menu = {
    isOpen: boolean
    handleIsOpen: () => void
    closeSideBar: () => void
    stateChangeHandler: (newState: any) => void
    ref?: any
    close: () => void
    setClose: (fn: () => void) => void
}
