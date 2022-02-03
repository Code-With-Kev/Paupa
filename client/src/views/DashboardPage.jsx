import React, {useState, useEffect} from 'react'
import AllBubbles from '../components/Bubble/AllBubbles'
import './DashboardPage.css';
import CreateBubbleForm from '../components/Bubble/CreateBubbleForm';
import axios from 'axios'
import Daily from '../components/Daily/Daily';


const DashboardPage = (props) => {
    const[expandForm, setExpandForm] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(null)
    const [switchTab, setSwitchTab] = useState(false)
    

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
                <button className="switchTab" onClick={e=>setSwitchTab(!switchTab)}><img className="switch-icon" src={require('../components/UI/Images/switch_icon.png')} /></button>                
                <button className="switchTab" onClick={}><img className="switch-icon" src={require('../components/UI/Images/switch_icon.png')} /></button>                
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
                        <AllBubbles formSubmitted={props.formSubmitted} switchTab={switchTab} setSwitchTab={setSwitchTab}/>
                    </div>
            </div>
        </div>
    )
}

export default DashboardPage
