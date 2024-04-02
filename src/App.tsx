import './assets/scss/app.scss'
import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import ScrollToTop from './layout/auto-scroll'

import { ApolloProvider } from './lib/apollo-wrapper'

function App() {
    return (
        <React.Fragment>
            <ApolloProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    <Routes />
                </BrowserRouter>
            </ApolloProvider>
        </React.Fragment>
    )
}

export default App
