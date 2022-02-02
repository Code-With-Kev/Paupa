import React, {useState} from 'react'
import axios from 'axios'

const LoginForm = (props) => {
    const [errors, setErrors] = useState([])
    const [formInfo, setFormInfo] = useState({
        email:"",
        password: "",
    });
    const [loginSubmit, setLoginSubmit] = useState(false)

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
            if(res.data.msg){
                setErrors(res.data.msg)
            }else{
                setLoginSubmit(!loginSubmit)
            }
        })
        .catch(err=> {
            console.log(err)
        }, [loginSubmit, errors])
    }

    return (
        <div>
            <form className='login' onSubmit={login} style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                {errors.length > 0 && errors != "success!" && <div className="error">{errors}</div>}
                <div className='form-section'>        
                    <label>Email:</label>
                    <input className="input" type="text" name="email" onChange={handleChange}/>
                </div>
                <div className="form-section">
                    <label>Password:</label>
                    <input className="input" type="password" name="password" onChange={handleChange}/>
                </div>
                    <input type="submit" value="Log In" />
            </form>
        </div>
    )
}

export default LoginForm

// have it accept username or email