import './assets/scss/app.scss'
import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import ScrollToTop from './layout/auto-scroll'

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ScrollToTop />
                <Routes />
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App
