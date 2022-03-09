import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import './RegistrationForm.css'

const RegistrationForm = (props) => {
    const [formInfo, setFormInfo] = useState({
        username: "",
        email:"",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
    });
    const history = useHistory()
    const [errors, setErrors] = useState([])

    const handleChange = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }
    const handleRegSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", formInfo, {withCredentials:true})
            .then(res=>{
                console.log(res)
                if(res.data.errors){
                    setErrors(res.data.errors)
                }else{
                    history.push('/')
                }
            })
            .catch(err=> {
                console.log(err)
            }, [errors])
            
            setFormInfo({
                username: "",
                email:"",
                confirmEmail: "",
                password: "",
                confirmPassword: "",
            })
        }
        console.log(errors)

    return (
        <div>
            <form onSubmit={handleRegSubmit}> 
                <div>
                    {errors.username?.message && <div className="error">{errors.username.message}</div>}
                    {errors.email?.message && <div className="error">{errors.email.message}</div>}
                    {errors.password?.message && <div className="error">{errors.password.message}</div>}
                    
                    <div className="form-section grid">
                        <label>Username:</label>
                        <img className="bubble1" src={require('../UI/Images/bubble.png')} />
                        <input className="input" type="text" name="username" value={formInfo.username} onChange={handleChange}/>
                    </div>
                    <div className="form-section">
                        <label>Email:</label>
                        <input className="input" type="email" name="email" value={formInfo.email} onChange={handleChange} />
                    </div>
                    <div className="form-section">
                        <label>Confirm Email:</label>
                        <input className="input" type="email" name="confirmEmail" value={formInfo.confirmEmail} onChange={handleChange} />
                    </div>
                    <div className="form-section">
                        <label>Password:</label>
                        <input className="input" type="password" value={formInfo.password} name="password" onChange={handleChange} />
                    </div>
                    <div className="form-section">
                        <label>Confirm Password:</label>
                        <input className="input" type="password" value={formInfo.confirmPassword} name="confirmPassword" onChange={handleChange} />
                    </div>
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm
