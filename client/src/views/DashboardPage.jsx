import React, {useState, useEffect} from 'react'
import AllBubbles from '../components/Bubble/AllBubbles'
import './DashboardPage.css';
import CreateBubbleForm from '../components/Bubble/CreateBubbleForm';
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const DashboardPage = (props) => {
    const[expandForm, setExpandForm] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(null)
    const history = useHistory()

    useEffect(() => {
        axios.get("http://localhost:8000/api/loggedin", {withCredentials:true})
    .then(res => {
        console.log("hi")
        setLoggedInUser(res.data.user)
        history.push('/')
    })
    .catch(err => {
        console.log(err)
    }, [loggedInUser]) //loggedInUser
})
    console.log(loggedInUser)
    return (
        <div>
            <div className="welcome">
                {loggedInUser && <h1>Welcome back, {loggedInUser.username}</h1>}
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
                <div>
                    <AllBubbles formSubmitted={props.formSubmitted}/>
                </div>
                <button className="dark-mode">Dark Mode</button>
            </div>
        </div>
    )
}

export default DashboardPage
