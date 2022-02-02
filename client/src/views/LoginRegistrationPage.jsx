import React  from 'react'
import RegistrationForm from '../components/User/RegistrationForm'
import LoginForm from '../components/User/LoginForm'
import './LoginRegistrationPage.css';

const LoginRegistrationPage = (props) => {    
    return (
        <div className="reg-container" >
            <div> 
                <RegistrationForm />
            </div>
            <div>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginRegistrationPage
