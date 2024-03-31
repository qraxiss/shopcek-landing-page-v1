import { MobileHeader, WebHeader } from './header'
import { Footer } from './footer'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

export function Layout({ children }: { children: any }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    useEffect(()=>{
        console.log(isMobile)

    }, [isMobile])

    return (
        <React.Fragment>
            {!isMobile ? <WebHeader /> : <MobileHeader />}
            <div className="sections">
                <div className="container">{children}</div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
