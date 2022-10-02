import { useState , useEffect } from "react";
import axios from 'axios';

const token = (typeof window !== "undefined")?localStorage.getItem("access_token"):"none";
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + token,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export default function Login() {
    const [username,setUsername] = useState("");
    const [password,setPsswd] = useState("");
  
    const handleUsername = (e) => {setUsername(e.target.value)};
    const handlePsswd = (e) => {setPsswd(e.target.value)};
  
    const handleSubmit = () => {
      try {
          axiosInstance.post('/token/obtain/', {
              username: username,
              password: password
          })
            .then(
              result => {
                  axiosInstance.defaults.headers['Authorization'] = "JWT " + result.data.access;
                  if (typeof window !== "undefined") {
                    console.log("done!");
                    localStorage.setItem('access_token', result.data.access);
                    localStorage.setItem('refresh_token', result.data.refresh);
                  }
              }
            );
      } 
      catch (error) {
          throw error;
      }
    };
    return (
    <div className="w3-sans-serif">
        <div className="w3-center w3-margin" >
            <form className="auth-div w3-card w3-half" >
                <h2 className="w3-text-teal">Hey, how are you ?</h2>
                <br />
                <p className=" w3-text-grey w3-left " >Username or Email ID</p>
                <input type="text" onChange={handleUsername} className="w3-input w3-round-large w3-border-teal w3-border-bottom " required/>
                <br />
                <p className="w3-text-grey w3-left " >Password</p>
                <input autoComplete="on" type="password" onChange={handlePsswd} className="w3-input w3-round-large w3-border-teal w3-border-bottom " required/>
                <br />
                <div className="w3-conatiner w3-small">
                <button type="button" onClick={handleSubmit} className=" bttn w3-teal " >LOGIN</button>
                </div>
            </form>
        </div>
        <br></br>
        <br></br>
    </div>
    );
};

Login.noLayout = true;