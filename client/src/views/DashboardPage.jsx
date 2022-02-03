import React, {useState, useEffect} from 'react'
import AllBubbles from '../components/Bubble/AllBubbles'
import './DashboardPage.css';
import CreateBubbleForm from '../components/Bubble/CreateBubbleForm';
import axios from 'axios'


const DashboardPage = (props) => {
    const[expandForm, setExpandForm] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/loggedin", {withCredentials:true})
    .then(res => {
        setLoggedInUser(res.data.user)
    })
    .catch(err => {
        console.log(err)
    })
    }, [] )
    
    return (
        <div>
            <div className="welcome">
                { 
                <div>{loggedInUser && <h1>Welcome back, {loggedInUser.username}</h1>}</div>
                }
            </div>
            <div>
                {
                    expandForm === true?
                    <CreateBubbleForm
                        expandForm={expandForm}
                        setExpandForm={setExpandForm}
                        formSubmitted={props.formSubmitted}
                        setFormSubmitted={props.setFormSubmitted}
                    />:
                <p onClick={e=>setExpandForm(!expandForm)} className="expand-button">Add Paup</p>
                }
                {/* <button className="dark-mode">Dark Mode</button> */}
                <div>
                    <div>
                        <p>?</p>
                    </div>
                    <div>
                        <AllBubbles formSubmitted={props.formSubmitted}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
