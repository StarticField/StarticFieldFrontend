import { Box, styled} from "@mui/material";
import axios from 'axios'
import {useState} from "react";
import {Link, Image} from "@nextui-org/react";
import Router from "next/router"; 

const Wrapper = styled(Box)(
  () => `
  .div-color {
    background-color: rgb(31, 37, 47);
    max-height: 30vh;
    max-width: 50vw;
  }
  .left {
    width: 25%;
  }
  .right {
    width: 75%;
  }
  .username {
    font-size: 25px;
  }
  .info {
    font-size: 20px;
  }
  .progress-div {
    background-color: rgb(31, 37, 47);
    height: 67vh;
  }
  @media (max-width: 750px) {
    .div-color {
        max-height: auto;
        max-width: 100vw;
        padding: 0;
    }
    .username {
        font-size: 18px;
    }
    .info {
        font-size: 14px;
    }
  }
`
);

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

const SignUp = () => {

  const [username,setUsername] = useState("");
  const [emailid,setEmailid] = useState("");
  const [contact,setContact] = useState("");
  const [password,setPsswd] = useState("");
  const [confpassword,setConfPsswd] = useState("");
  const [message, setMessage] = useState("");

  const handleUsername = (e) => {setUsername(e.target.value)};
  const handlePsswd = (e) => {setPsswd(e.target.value)};
  const handleConfPsswd = (e) => {setConfPsswd(e.target.value)};
  const handleEmailid = (e) => {setEmailid(e.target.value)};
  const handleContact = (e) => {setContact(e.target.value)};

  const checkPassword = () => {
    if (password === confpassword) return true;
    return false;
  }

  const handleSubmit = () => {
    if (checkPassword()){
    try {
        axiosInstance.post('/user/create/', {
            username: username,
            password: password,
            contact: contact,
            emailid: emailid
        })
        .then((response) => {
          if (response.status==201){
            axiosInstance.post('/token/obtain/', {
                    username: username,
                    password: password,
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
            )
            .then(
              Router.push({
                pathname: "/"
              })
            );
          }
          else {console.log("Error")}
        });
    } 
    catch (error) {
        throw error;
    }
    } else {
      setMessage("Passwords didn't match !");
    }
  };


  return (
    <>
      <Wrapper className="w3-padding">
        <div className="w3-container div-color w3-padding w3-round-large w3-margin-bottom">
            <div className="w3-left w3-third left">
                <Image src={"./img3.png"} />
            </div>
            <div className="w3-right w3-padding w3-third right">
                <h3 className="w3-text-blue username w3-left" >@ashsenior</h3>
                <p className="info w3-row">ashutoshjunior@gmail.com</p>
                <p className="info w3-row">9667636296</p>
            </div>
        </div>
        <div className="w3-container progress-div w3-padding w3-round-large w3-margin-bottom">
            <h4 className="w3-text-grey w3-center ">Not Enrolled in any event !!</h4>
        </div>
        <button style={{"width": "100%"}} className="w3-right w3-border w3-border-red w3-button info w3-text-red w3-round" >logout</button>
      </Wrapper>
    </>
  );
};
SignUp.noLayout = true;
export default SignUp;
