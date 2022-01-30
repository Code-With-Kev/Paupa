import React from 'react';

const BubbleDetails = (props) => {
    const { bubbleInfo } = props
        return (
            <div>
                <h1 className="bubble-content__label" onClick={handleShowInfo}>{bubbleInfo.label}</h1><br />
                <h3>{bubbleInfo.description}</h3>
                <h3>{bubbleInfo.priority}</h3>
            </div>
        );
    };
    
    export default BubbleDetails;
