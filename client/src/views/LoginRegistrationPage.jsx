import React  from 'react'
import RegistrationForm from '../components/User/RegistrationForm'
import LoginForm from '../components/User/LoginForm'
import './LoginRegistrationPage.css';

const LoginRegistrationPage = (props) => {    
    return (
        <div className='shift-right'>
            <div className="reg-container" >
                <div>
                    <RegistrationForm />
                </div>
                <div>
                    <LoginForm />
                </div><br/>
            </div>
            <div>
                <img className="boy" src={require('../components/UI/Images/small_boy.png')}/>
                <img className="mini-bubbles" src={require('../components/UI/Images/mini_bubbles.png')}/>
                <img className="mini-bubbles2" src={require('../components/UI/Images/mini_bubbles.png')}/>
                {/* <img className="bubble1" src={require('../components/UI/Images/bubble.png')}> */}
                <img style={{height: "250px"}}className="paupa" src={require('../components/UI/Images/new_logo.png')}/>
            </div>
        </div>
    )
}

export default LoginRegistrationPage
