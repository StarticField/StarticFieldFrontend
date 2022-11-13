import { Box, Button, Grid, styled} from "@mui/material";
import { Google } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import axios from 'axios'
import {useState} from "react";
import {Link} from "@nextui-org/react";
import Router from "next/router"; 

const Wrapper = styled(Box)(
  () => `
  .container {
    position: relative;
    justify-content: center;
    align-items: center; 
  }
  .modal {
    background: rgb(31, 37, 47);
    align-items: center;
    justify-content: center;
  }
  .modal-container {
    margin-left: 13vw;
    background-color: rgb(31, 37, 47);
  }
  .form-error {
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    color: #b22b27;
  }
  .modal-desc {
    margin: 0px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 10px;
    
    opacity: 1;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  
  }
  .modal-left::-webkit-scrollbar {
    display: none;
  }

  .modal-right {
    padding: 60px 30px 10px;
    height: 87.7vh;
    opacity: 1;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  
  }
  .modal-right img {
    width: 120%;
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
      margin-left: 0;
    }
    .modal-left {
      background: black;
      height:100vh;
      padding: 0px 0px 0px;
      margin: 0;
    }
    .modal-right {
      display: none;
    }
  }
  input {
    background-color: rgb(23, 25, 30);
    color: white;
    border: none;
  }
`
);

import axiosInstance from "../components/axiosAPI";
import Image from "next/image";


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
    // return false;
  }

  const handleSubmit = async() => {
    if (checkPassword()){
    try {
      const response = await axiosInstance.post('/user/create/', {
          username: username,
          password: password,
          contact: contact,
          email: emailid
      });

      if(response.status===200){
        Router.push({
          pathname: "/",
          query: {"message": "Hi, @"+username+" your account has been created successfully!"}
        })
      }
      if (response.status===201){
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
                localStorage.setItem('username', username);
              }
              Router.push({
                pathname: "/",
                query: {"message": "Hi, @"+username+" your account has been created successfully!"}
              })
          }
         
        )
      
      }
      // else {
      //   setMessage("An error occured while creating your account (Try with different username)!");
      // }
    } 
    catch (error) {
        throw error;
    }
    } else {
      setMessage("Given passwords didn't match !");
    }
  };


  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left w3-half">
                <Grid item paddingBottom={4} paddingLeft={1}>
                  <Typography variant="h4" component="h3" gutterBottom>
                    Begin your Startup journey!
                  </Typography>
                  <Typography variant="subtitle2">
                    To the startic field website an eco-system for startup.
                    {message?
                    <p className="red w3-medium w3-text-red " >{message}</p>
                    :
                    null}
                  </Typography>
                </Grid>
               
                  <input
                    required
                    className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                    onChange={handleUsername}
                    type="text"
                    autoComplete="off"
                    name="username"
                    id="username"
                    placeholder="Username"
                  />
                  <input
                    required
                    className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                    onChange={handleContact}
                    type="name"
                    autoComplete="off"
                    name="contact"
                    id="contact"
                    placeholder="Mobile No."
                  />
                  <input
                    required
                    className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                    onChange={handleEmailid}
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <input
                    required
                    className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                    onChange={handlePsswd}
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <input
                    required
                    className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                    onChange={handleConfPsswd}
                    type="password"
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                  />
                
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={2}
                  mb={2}
                  ml={1}
                >
                  <Button
                    variant="contained"
                    color={"secondary"}
                    endIcon={<Google />}
                    disabled
                  >
                    Google
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Register
                  </Button>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={6}
                  className=""
                >
                  Already have an account? 
                  <Link href="./log-in">
                    <Button className="w3-text-blue">Log In</Button>
                  </Link>
                </Box>
              </div>
              <div className="modal-right w3-half left-color">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  src={"img2.webp"}
                  alt=""
                  height="100px"
                  width="100px"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
SignUp.noLayout = true;
export default SignUp;
