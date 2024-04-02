import React from 'react'

import { Slider } from '../components/swiper'
import { Partnership } from '../components/partnership'
import { Services } from '../components/services'
import { Faq } from '../components/faq'

export function Home() {
    return (
        <React.Fragment>
            <Slider />
            <Services />
            <Partnership />
            <Faq />
        </React.Fragment>
    )
}
