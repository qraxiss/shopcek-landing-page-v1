import App from '../App'
import { Home } from '../pages/home'
import { LaunchApp } from '../pages/launch-app'

import { Routes, Route } from 'react-router'

import { Layout } from '../layout'
import React from 'react'

const routes = [
    {
        component: <Home />,
        route: '/'
    },
    {
        component: <Home />,
        route: '*'
    },
    {
        component: <LaunchApp />,
        route: '/launch-app'
    }
]

export default () => {
    return (
        <React.Fragment>
            <Routes>
                {routes.map((item, idx) => (
                    <Route path={item.route} key={idx} element={<Layout> {item.component} </Layout>}></Route>
                ))}
            </Routes>
        </React.Fragment>
    )
}
