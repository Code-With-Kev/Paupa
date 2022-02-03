import React from 'react'
import BubbleDate from './BubbleDate';

const OnlyTasks = (props) => {
    const { allBubbles, filterID, handleShowInfo, capitalizeLabel, deleteBubbles } = props

    return (
        <div className="border-design">
            <div className="bubble-container" style={{padding: "3em 0em"}}>
                <div>

                                                                {/*               map of tasks                */}
                { 
                    allBubbles.filter(bubble => bubble.isExpense === false).map((bubble, i)=> {
                        return (
                                <div key={i}>
                                    {
                                        bubble._id === filterID?
                                        <div className="bubble-content" >
                                            <h1 style={{cursor: "pointer"}} className="bubble-content__label" value={bubble._id} onClick={handleShowInfo}>{capitalizeLabel(bubble.label)}</h1>
                                            
                                            
                                            <div className="description-price">
                                                <div>   
                                                    <p className='bubble-content__description'>{bubble.description}</p>
                                                </div>
                                            
                                            
                                                    {/*               only display cost if greater than 0                */}
                                                {
                                                    bubble.cost != null && bubble.cost > 0 &&
                                                    <div>
                                                        <p className="expense-amount">{`$${bubble.cost}`}</p>
                                                    </div>
                                                }
                                            </div>
                                            
                                            
                                            <div className='date-container'>
                                                <p><BubbleDate date={bubble.startDate} title="Start Date"/></p>
                                                <p><BubbleDate date={bubble.endDate} title="End Date"/></p>
                                                {!bubble.isExpense && <p class="delete-btn" onClick={(e) => deleteBubbles(e, bubble._id)}>Finished?</p>}
                                                {bubble.isExpense && <p class="delete-expense-btn" onClick={(e) => deleteBubbles(e, bubble._id)}>Remove?</p>}
                                            </div>
                                                            {/*               border color controller               */}
                                        </div>:
                                            <div className={`bubble-content ${bubble.priority==="High" && "high"}${bubble.priority==="Medium" && "medium"}${bubble.priority==="Low" && "low"}`} style={{
                                                boxShadow: bubble.isExpense && "0px 0px 3px green"}}>
                                                <h1 style={{cursor: "pointer"}} className="bubble-content__label" onClick={e=>handleShowInfo(bubble._id)}>{capitalizeLabel(bubble.label)}</h1>
                                            </div>
                    }
                                </div>
                                
                        )
                    })
                }
                </div>
            </div>
        </div>
        );
    };

    export default OnlyTasks
