import React from 'react'
import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
    { id: 'e1', title: 'some event1' },
    { id: 'e2', title: 'some event2' },
    { id: 'e3', title: 'some event3' },
];

function EventsPage() {
    return (
        <>
            <div>EventsPage</div>
            <Event/>
            
        </>
    )
}

export default EventsPage