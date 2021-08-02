import React, {useState} from 'react';
import axios from 'axios';
import {ReactSession} from 'react-client-session';
import './login.css';

function Login() {
   
    const[resstate, setRestate] = useState([]);

    const[state, setState] = useState({
     
        username: '',
        password: '',
       
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        }) 
     
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost/practical_test/Trainee-Associate-Assignment/bizlogic/api/log.php',state)
        .then(response => {
           const message = response.data.message;
           
            setRestate(
                response.data.message
            )
            if(message === 'done'){
           
                alert('You are succsesfully login!');
                ReactSession.setStoreType("localStorage");
                ReactSession.set("username", state.username);
                ReactSession.set("password", state.password);
               
                window.location = '/home';
            }else{
                alert('Your details are wrong. Please enter detail again!');
                setState({
                    username: '',
                    password: '',

                }
                  
                )
            }
        })

        
      
       
       
    }

    return (
        <div className = "loxbox">

        <form className="dash-content__form" method="POST" onSubmit={handleSubmit}>
         
        <div className="dash-content__input">
            <lable className="dash-content__lable">User name: </lable>
            <input type ="text" class="form__input" name="username" value={state.username} onChange={handleChange} required />
        </div>

        <div className="dash-content__input">
            
            <lable className="dash-content__lable">Password: </lable>
            <input type ="text" class="form__input" name="password" value={state.password} onChange={handleChange} required />
        </div>

        <div>
            <button type ='submit'>Submit</button>
        </div>
        

        </form>
            
        </div>
    )
}

export default Login