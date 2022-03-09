import React from 'react'

const BubbleCollection = (props) => {
    const { label, value, handleChange, type, name } = props
    return (
        <div>
             <div className="bubble-username">
                <div className="reg-section username">
                    <label className="form-heading">{label}</label><br />
                    <input className="input form-input" type={type} name={name} value={value} onChange={handleChange}/>
                </div>
                <img className="bubble1" src={require('../UI/Images/bubble.png')} />
            </div>
        </div>
    )
}

export default BubbleCollection
