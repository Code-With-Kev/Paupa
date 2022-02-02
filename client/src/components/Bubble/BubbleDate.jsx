import React from "react";
import moment from 'moment'
import './BubbleDate.css'

const BubbleDate = (props) => {
    const { date, title } = props
    const month = moment(date).format('MMM');
    const day = moment(date).format('Do')
    const year = moment(date).format('YYYY')

    return (
        <div className="bubble-date__section">
            <div className="bubble-date__title">
                {title}
            </div>
            <div className="bubble-date">
                <div className="bubble-date__content">
                    <p className="month">{month}</p>
                    <p>{day}</p>
                    <p>{year}</p>
                </div>
            </div>
        </div>
    )
}

export default BubbleDate