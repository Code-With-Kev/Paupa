import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import axios from 'axios'


const DisplayOne = () => {
    const [ bubbleInfo, setBubbleInfo ] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/bubbles/${id}`)
            .then(res => {
                setBubbleInfo(res.data.results)
                console.log(res.data.results)
            })
            .catch(err => console.log("Uh oh --->", err))
        }, [])

    return (
        <div>
            <div className="details">
                <h1 style={{color: "white"}}>{bubbleInfo.label}</h1>
                <h2 style={{color: "white"}}>{bubbleInfo.description}</h2>
            </div>
        </div>
    )
}

export default DisplayOne

