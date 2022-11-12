import { Box, Button, styled } from "@mui/material";
import { Google } from "@mui/icons-material";
import { useState} from "react";
import axios from 'axios';
import Router, { useRouter } from "next/router"; 
import {Link} from "@nextui-org/react";

const Wrapper = styled(Box)(
  ({ theme }) => `
  input {
    background-color: rgb(36, 41, 36);
    color: white;
    border: none;
  }
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  .modal {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .modal-container {
    display: flex;
    max-width: 60vw;
    max-height: 78vh;
    width: 100%;
    overflow: hidden;
    position: absolute;
  }
  .form-error {
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    flex: 1.5;
    opacity: 1;
    overflow: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  
    background: rgb(47, 50, 53);
  }
  .modal-left::-webkit-scrollbar {
    display: none;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    display: block;
  }
  
  @media (max-height: 955px) {
    .modal-container {
        max-width: 70vw;
        max-height: 80vh;
    }
  }
  @media (max-height: 900px) {
    .modal-container {
        max-width: 70vw;
        max-height: 85vh;
    }
  }
  @media (max-height: 850px) {
    .modal-container {
        max-width: 70vw;
        max-height: 90vh;
    }
  }
  @media (max-height: 800px) {
    .modal-container {
        max-width: 70vw;
        max-height: 95vh;
    }
  }
  @media (max-width: 750px) {
    .modal-container {
      max-width: 100vw;
      max-height:100vh;
    }
    .modal-left {
      padding: 60px 20px 20px;
      height:100vh;
      background: black;
    }
    .modal-right {
      display: none;
    }
  }
  .full {
    width: 100%;
  }
`
);

export const config = {
  unstable_runtime:false
}

import axiosInstance from "../components/axiosAPI";
export default function LogIn() {
  const [username,setUsername] = useState("");
  const [password,setPsswd] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [reset, setReset] = useState(false);

  const handleUsername = (e) => {setUsername(e.target.value)};
  const handlePsswd = (e) => {setPsswd(e.target.value)};

  const resetPassword = () =>{
    return (
        <div className="modal-left left-color" >
            <h1 className="w3-center">
              Password Reset
            </h1>
            <br></br>
            <h3 className="w3-large" >Enter your email for password reset</h3>
            <input
                required
                onChange={handleUsername}
                className="w3-input inner-input w3-round w3-large w3-padding-large w3-margin-bottom"
                label="email"
                name="email"
                id="email"
                placeholder="Username" 
              />
            <br />
            <button style={{width:"100%"}} className=" w3-round-xxlarge w3-margin-bottom w3-button w3-indigo" >Send Reset Mail</button>
            <br></br>
            <div className="w3-center w3-margin-top w3-row">
              <p>New to StarticField ? <button className="w3-button w3-hover-black w3-text-blue" >Sign Up</button></p>
              <p>Forgot your password ? <a href="./sign-in" className="w3-text-blue" >Reset Password</a></p>
            </div>
        </div>
      );
  }

  const handleSubmit = () => {
    try {
        axiosInstance.post('/token/obtain/', {
            username: username,
            password: password
        })
          .then(
            (response) => {
              if (response!=undefined){
                  if (typeof window !== "undefined") {
                    console.log(response);
                    localStorage.setItem('access_token', response.data.access);
                    localStorage.setItem('refresh_token', response.data.refresh);
                    localStorage.setItem('username', username);
                    axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                    router.push({
                      pathname: "/complete-profile",
                      query: {"message": "Successfully Logged in !"}
                    });
                  }
              }
              else {
                  setMessage("Incorrect username or password!")
              }
            }
          )
    } 
    catch (error) {
        throw error;
    }
  };

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
            {
              reset ?
              resetPassword()
              :
              <div className="modal-left left-color">
                <div>
                  <h1 className="w3-center">
                    {message?
                    <p className="red w3-medium w3-text-red " >{message}</p>
                    :
                    null}
                    Electrify your Startup!
                  </h1>
                  <h3 className="w3-center w3-medium">
                    To the startic field website an eco-system for startup.
                  </h3>
                </div>
                <br></br>
                <div
                  className="w3-margin-top"
                  noValidate
                  autoComplete="off"
                >
                  <input
                    required
                    onChange={handleUsername}
                    className="w3-input inner-input w3-round w3-large w3-padding-large w3-margin-bottom"
                    label="email"
                    name="email"
                    id="email"
                    placeholder="Username" 
                  />
                  <input
                    required
                    onChange={handlePsswd}
                    className="w3-input inner-input w3-round w3-large w3-padding-large w3-margin-bottom"
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button
                    className="full w3-button w3-blue w3-hover-indigo w3-round"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Lets Go!
                  </button>
                <div
                  className="w3-margin-top"
                >
                  <Button
                    variant="contained"
                    color={"secondary"}
                    endIcon={<Google />}
                    disabled
                  >
                    Google
                  </Button>
                </div>
                <div className="w3-center w3-margin-top w3-row">
                  <p>New to StarticField ? <a href="./sign-in" className="w3-text-blue" >Sign Up</a></p>
                  <p>Forgot your password ? <a href="./sign-in" className="w3-text-blue" >Reset Password</a></p>
                </div>

                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={6}
                  className=""
                >
                  
                </Box>
              </div>
            }
              <div className="modal-right left-color">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={"img1.webp"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>        
    </>
  );
};
LogIn.noLayout = true;
