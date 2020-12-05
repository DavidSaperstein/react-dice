import React from "react"
import DiceBox from './DiceBox'
import "./styles.css" 

export default function App() {
    return (
        <>
        <div className='dicebox-container'>
            <h1>Roll the Dice!</h1>
            <h3>(Select the dice you don't want to roll)</h3>
            <DiceBox />
        </div>
        </>
    )
}
