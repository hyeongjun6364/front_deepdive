import React from 'react'

function TimerChallenge({ title, targetTime }) {

    return (
        <section>
            <h2>{title}</h2>
            <p>{targetTime} second{targetTime > 1 ? 's' : ''}</p>
            <p>
                <button>Start Challenge</button>
            </p>
        </section>
    )
}

export default TimerChallenge