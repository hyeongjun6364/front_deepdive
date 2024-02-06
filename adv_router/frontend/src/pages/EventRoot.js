import React from 'react'
import EventsNavigation from '../components/EventsNavigation'
import { Outlet } from 'react-router-dom'
function EventRootsLayout() {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    )
}

export default EventRootsLayout