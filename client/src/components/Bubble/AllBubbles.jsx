import React, {useState, useEffect} from 'react';
import axios from 'axios'
//import {Link} from "react-router-dom"
import './AllBubbles.css'

const AllBubbles = (props) => {
    const [allBubbles, setAllBubbles] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/bubbles")
        .then(res=> {
            console.log("All bubbles --->", res);
            setAllBubbles(res.data.results)
        })
        .catch(err=>err)
    }, [props.formSubmitted, deleted])

    const handleShowInfo = () => {
        setShowInfo(!showInfo);
    }

    return (
        <div>
            <div className="border-design bubble-group">
            {
                allBubbles.map((bubble, i)=> {
                    return (
                            <div key={i}>
                                <div className="bubble-content">
                                    <h1 className="bubble-content__label" onClick={handleShowInfo}>{bubble.label}</h1><br />
                                    {/* <h3 className="bubble-content__description">{bubble.description}</h3> */}
                                </div>
                            </div>
                    )
                })
            }
            </div>
        </div>
        );
    };

    export default AllBubbles