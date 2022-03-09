import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import BubbleCollection from './BubbleCollection'

const LoginForm = (props) => {
    const [errors, setErrors] = useState([])
    const [formInfo, setFormInfo] = useState({
        email:"",
        password: "",
    });
    const history = useHistory();

    const handleChange = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", formInfo, {withCredentials:true})
        .then(res=>{
            console.log(res)
            if(res.data.msg === "success!"){
                history.push('/')
            }else{
                setErrors(res.data.msg)
            }
        })
        .catch(err=> {
            console.log(err)
        }, [errors])
    }

    return (
        <div>
            <form className='login' onSubmit={login} style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                {errors.length > 0 && errors != "success!" && <div className="error">{errors}</div>}
                <div className="login-password-bubble">
                    <div className='second-bubble'>
                        <BubbleCollection label="Login Email:" value={formInfo.email} handleChange={handleChange} type="email" name="email"/>
                    </div>
                </div>
                <div className="login-email-bubble">
                    <div className='second-bubble'>
                        <BubbleCollection label= "Login Password:" value={formInfo.password} handleChange={handleChange} type="password" name="password" />
                    </div>
                </div>
                {/* <div className='fourth-bubble-2'>
                        <BubbleCollection label="Password:" value={formInfo.password} handleChange={handleChange} type="password" name="password" />
                </div> */}
                {/* <div className='form-section'>        
                    <label>Email:</label>
                    <input className="input" type="text" name="email" onChange={handleChange}/>
                </div> */}
                {/* <div className="form-section">
                    <label>Password:</label>
                    <input className="input" type="password" name="password" onChange={handleChange}/>
                </div> */}
                {/* fix naming */}
                {/* <div className="login-email-password!"> */}
                    {/* </div> */}
                <div className='submit-bubble-btn login-btn'>
                    <div className="bubble-username">
                        <div className="reg-section username">
                            <input type="submit" className="sub-btn" style={{boxShadow: "0px 0px 0px white"}} value="Log In" />
                        </div>
                        <img className="bubble1" src={require('../UI/Images/bubble.png')} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm

// have it accept username or email