import { Header } from './header'
import { Footer } from './footer'
import React from 'react'

export function Layout({children}: {
    children: any
}) {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer/>
        </React.Fragment>
    )
}
