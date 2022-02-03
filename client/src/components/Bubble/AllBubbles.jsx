import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './AllBubbles.css'
import BubbleDate from './BubbleDate';
import BarChart from '../UI/BarChart'; 

const AllBubbles = (props) => {
    const [allBubbles, setAllBubbles] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const [filterID, setFilterID] = useState("")
    const [deleted, setDeleted] = useState(false)
    

    useEffect(()=>{
        axios.get("http://localhost:8000/api/bubbles")
        .then(res=> {
            console.log("All bubbles --->", res);
            setAllBubbles(res.data.results)
            for (let bubble of res.data.results) {
                console.log("this is the cost --->", bubble.cost)
            }
        })
        .catch(err=>err)
}, [showInfo, props.formSubmitted, deleted])

    const handleShowInfo = (e) => {
        if (showInfo === false){
            setShowInfo(!showInfo)
            setFilterID(e)
        } else {
            setShowInfo(!showInfo)
        }
    }

    function capitalizeLabel(name) {
        return name.replace(/\b(\w)/g, s => s.toUpperCase());
    }

    const deleteBubbles = (e, id) => {
        console.log("deleting item with this id ---->", id)
        axios.delete(`http://localhost:8000/api/bubbles/${id}`)
            .then(res => {
                console.log("deleted --->", res.data.results)
                setDeleted(!deleted)
            })
            .catch(err => console.log("Uh oh --->", err))
    }

    return (
        <div>
            <div>
                <div className="bubble-container border-design bubble-group">

                                                                {/*               map of tasks                */}
                { 
                    allBubbles.map((bubble, i)=> {
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
            <BarChart allBubbles={allBubbles}/>
        </div>
        );
    };

    export default AllBubbles

    // Make border change color based on priority
    // Add a collapse bubble button