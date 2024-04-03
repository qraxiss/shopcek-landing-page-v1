import React from 'react'

import { slide as Menu } from 'react-burger-menu'

export class ParentComponent extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange(state: any) {
        this.setState({ menuOpen: state.isOpen })
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu() {
        this.setState({ menuOpen: false })
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu() {
        //@ts-ignore
        this.setState((state) => ({ menuOpen: !state.menuOpen as any }))
    }

    render() {
        return (
            <div>
                <Menu
                    //@ts-ignore
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                >
                    <a onClick={() => this.closeMenu()}>Home</a>
                    <a onClick={() => this.closeMenu()}>About</a>
                    <a onClick={() => this.closeMenu()}>Contact</a>
                    <a onClick={() => this.closeMenu()}>Settings</a>
                </Menu>
                {/* <CustomIcon onClick={() => this.toggleMenu()} /> */}
            </div>
        )
    }
}
