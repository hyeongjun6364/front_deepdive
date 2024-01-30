import React from 'react'
import {Outlet} from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

function ErrorPage() {
    return (
        <>
            <MainNavigation />
            <main >
                <p>error</p>
            </main>
        </>

    )
}

export default ErrorPage