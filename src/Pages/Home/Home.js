import React from 'react'
import './Home.css'
import Alerts from '../../Components/Alerts/Alerts'

function Home() {
    return (
        <div className="Home">
            <div className="c-alert-container">
                <Alerts text="Welcome to the homepage." timer={6000} delay={0} />
                <Alerts text="Please enjoy your stay!" timer={6000} delay={60} />
            </div>
            Hier komt de duurzaamhuis react app van het volgende groepje:
            <br></br>
            * Vincent Pinas
            <br></br>
            * Max Bouricius
            <br></br>
            * Robin Zhao
        </div>
    )
}

export default Home