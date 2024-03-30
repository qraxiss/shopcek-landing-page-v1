import './assets/scss/app.scss'
import { Layout } from './layout'
import { Slider } from './components/swiper'
import { Services } from './components/services'
import { Partnership } from './components/partnership'
import { Faq } from './components/faq'
import React from 'react'

function App() {
    return (
        <React.Fragment>
            <Layout>
                <Slider />
                <Services/>
                <Partnership/>
                <Faq/>
            </Layout>
        </React.Fragment>
    )
}

export default App
