import React from 'react'
import './BubbleInput.css'

const BubbleInput = () => {
    return (
        <div>
            <img className="stack1" src={require('../UI/Images/bubble.png')} />
                        <label>Username:</label>
                       <input className="input" type="text" name="username" />
        </div>
    )
}

export default BubbleInput
