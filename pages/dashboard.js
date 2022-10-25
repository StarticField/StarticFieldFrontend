import { Box, styled} from "@mui/material";
import axios from 'axios'
import {useState, useEffect} from "react";
import {Link, Image} from "@nextui-org/react";
import {Router, useRouter} from "next/router"; 
import styles from "../styles/footer.module.css";
import UpcomingEvents from "../components/UpcomingEvents";

const Wrapper = styled(Box)(
  () => `
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .background {
    background-image: rgb(11, 37, 47);
  }
  .div-profile {
    background-color: rgb(11, 37, 47);
  }
  .img {
    max-width: 50vw;
    height: auto;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  .details {
    display: flex;
    justify-content: center;
  }

html {
  position: relative;
  overflow-x: hidden!important;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Quicksand', sans-serif;
  color: #324e63;
}

a, a:hover {
  text-decoration: none;
}
.wrapper {
  padding: 20px 20px;
  padding-top: 80px;
  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }

}

.profile-card {
  width: 100%;
  margin: auto;
  box-shadow: 0px 8px 60px -10px rgba(13,28,39,0.6);
  background: black;
  max-width: 700px;
  position: relative;

  &.active {
    .profile-card__cnt {
      filter: blur(0px);
    }
    .profile-card__overlay {
      opacity: 1;
      pointer-events: auto;
    }
  }

  &__img {
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(-50%);
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    z-index: 4;

    @media screen and (max-width: 576px) {
      width: 120px;
      height: 120px;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }

  }

  &__cnt {
    margin-top: -55px;
    text-align: center;
    padding-bottom: 20px;
    transition: all .3s;
  }

  &__name {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 15px;
  }

  &__txt {
    font-size: 18px;
    font-weight: 500;
    color: #324e63;
    margin-bottom: 15px;

    strong {
      //color: #ff2846;
      font-weight: 700;
    }

  }

  &-loc {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;

    &__icon {
      display: inline-flex;
      font-size: 27px;
      margin-right: 10px;
      //color: #6944ff;
    }

  }

  &-inf {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 5px;

    &__item {
      padding: 10px 35px;
      min-width: 150px;

      @media screen and (max-width: 768px) {
        padding: 10px 20px;
        min-width: 120px;
      }

    }

    &__title {
      font-weight: 700;
      font-size: 27px;
      //color: #6944ff;
      color: #324e63;
    }

    &__txt {
      font-weight: 500;
      margin-top: 7px;
    }

  }


`
);

import axiosInstance from "../components/axiosAPI";
const Dashboard = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("username");
  const [emailid, setEmailid] = useState("emailid");
  const [contact, setContact] = useState("993XXXXXX02");
  const [linkedin, setLinkedin] = useState("https://www.linkedin.com/");
  const [instagram, setInstagram] = useState("https://www.instagram.com/");
  const [github, setGithub] = useState("https://www.github.com/");
  const [enrolled, setEnrolled] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [fullname, setFullname] = useState("Full Name");
  const message = useRouter().query.message;

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token){
      setAuthenticated(true);
      setUsername(localStorage.getItem("username"));
    }
  }, [authenticated]);

  const getUserData = () => {
    try {
        axiosInstance.post('/user/get-data/', {
            username: localStorage.getItem("username"),
        })
        .then((response) => {
          if (response.status==200){
            setEmailid(response.data.emailid);
            setContact(response.data.contact);
            setLinkedin(response.data.linkedin);
            setInstagram(response.data.instagram);
            setGithub(response.data.github);
            setEnrolled(response.data.enrolled);
            setCompleted(response.data.completed);
            setFullname(response.data.fullname);
            console.log("saved!")
          }
          else {console.log("Error")}
        });
    } 
    catch (error) {
        throw error;
    }
  };

  useEffect(() => {
    getUserData();
  }, [])


  return (
    <>
      <Wrapper>
      <div className="background">
      {message?
      <h5 id="message" className="w3-row w3-margin-top w3-green w3-padding" >
        {message}
      </h5>
      :
      null}
      <div className="wrapper">
        <div className="profile-card js-profile-card w3-round">
          <div className="profile-card__img">
            <Image src={"./img3.webp"} />
          </div>
          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name w3-text-blue">{fullname?fullname:"fullname"} | @{username?username:"username"}</div>
            <div className="profile-card__txt w3-text-white w3-medium">{emailid}  |  {contact}</div>
            <div className="profile-card-loc w3-text-white">
              <span className="profile-card-loc__txt w3-medium">
                
              </span>
              {
                completed ?
                  null
                  :
                  <a href={"./complete-profile"} className="w3-margin-left w3-text-green w3-hover-green w3-border-green w3-button w3-small w3-border" >Complete profile</a>
              }
            </div> 

            <div className="profile-card-inf">
              <a href={linkedin} className="profile-card-inf__item">
                <Image className={styles.socialIcons} src="/linkedin.svg" />
              </a>
              <a href={instagram} className="profile-card-inf__item">
                <Image className={styles.socialIcons} src="/instagram.svg" />
              </a>
              <a href={github} className="profile-card-inf__item">
                <Image className={styles.socialIcons} src="/github.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {
        enrolled ?
        <div className="w3-row w3-center w3-black w3-margin w3-padding w3-card" >
          <h3>Your are not enrolled in any event !</h3>
          <Image src={"./img3.webp"} className="img" />
        </div>
        :
        null
      }
      <div style={{
              width:'80vw',
              margin:"auto",
              marginTop:'8vh',
              textAlign:'center'
          }}>
            < UpcomingEvents/>
        </div>
      <div className=" w3-container" ></div>
      </div>
      </Wrapper>
    </>
  );
};
Dashboard.noLayout = false;
export default Dashboard;
