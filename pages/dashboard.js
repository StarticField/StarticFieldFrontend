import { Box, styled} from "@mui/material";
import axios from 'axios'
import {useState, useEffect} from "react";
import {Link, Image} from "@nextui-org/react";
import {Router, useRouter} from "next/router"; 
import styles from "../styles/footer.module.css";
import UpcomingEvents from "../components/UpcomingEvents";

const Wrapper = styled(Box)(
  () => `
  
  .mar {
    margin: 20px;
    background-color: rgba(28, 43, 61, 0.858);
    color: white;
    @media screen and (max-width: 768px) {
      margin: 0px;
    }
  }
  .grn {
    
    margin: 3px;
    max-width: 32.5%;
    border-radius: 20px;
    @media screen and (max-width: 768px) {
      max-width: 100%;
      margin: 0px;
      border-radius: 0px;
    }
  }
  .red {
    margin: 3px;
    background-color: black;
    max-width: 32.5%;
    border-radius: 20px;
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
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
    padding-bottom: 10px;
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
    margin-bottom: 7px;

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
      padding: 5px 5px;
      min-width: 50px;

      @media screen and (max-width: 768px) {
        padding: 10px 20px;
        min-width: 50px;
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

export const config = {
  unstable_runtime:false
}
const Dashboard = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("username");
  const [emailid, setEmailid] = useState("emailid");
  const [contact, setContact] = useState("993XXXXXX02");
  const [linkedin, setLinkedin] = useState("https://www.linkedin.com/");
  const [instagram, setInstagram] = useState("https://www.instagram.com/");
  const [github, setGithub] = useState("https://www.github.com/");
  const [enrolled, setEnrolled] = useState(false);
  const [mockenrolled, setMockEnrolled] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [fullname, setFullname] = useState("Full Name");
  const [error, setError] = useState(null);
  const router = useRouter();
  const message = useRouter().query.message;

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token){
      setAuthenticated(true);
      setUsername(localStorage.getItem("username"));
      getUserData();
    }
    else {
      router.push({
        pathname: "/",
        query: {"message": "Not authenticated !"}
      });
    }
  }, []);

  const getUserData = () => {
    try {
        axiosInstance.get('/user/get-data/',
              {params: {
                  username: localStorage.getItem("username")
                }}
        )
        .then((response) => {
          if (response.status===200){
            setEmailid(response.data.emailid);
            setContact(response.data.contact);
            setLinkedin(response.data.linkedin);
            setInstagram(response.data.instagram);
            setGithub(response.data.github);
            setEnrolled(response.data.enrolled);
            setCompleted(response.data.completed);
            setFullname(response.data.fullname);
            setMockEnrolled(response.data.mockenrolled);
            console.log(response);
          }
          else {setError(response);}
        });
    } 
    catch (error) {
        throw error;
    }
  };

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
      {error?
      <h5 id="message" className="w3-row w3-margin-top w3-red w3-padding" >
        {error}
      </h5>
      :
      null}
      <div className="wrapper">
        <div className="profile-card js-profile-card w3-round-xlarge">
          <div className="profile-card__img">
            <Image src={"./img3.webp"} />
          </div>
          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__txt w3-text-blue">{fullname} <e className="w3-text-grey w3-medium">( {username} )</e></div>
            <div className="profile-card__txt w3-text-white w3-medium">📧 {emailid}</div>
            <div className="profile-card__txt w3-text-white w3-medium">📱 {contact}</div>
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
      <div className="w3-black">
      {
        enrolled ?
        <div className="w3-row" >
          <h3 className="w3-margin">All India Student CTO Hunt</h3>
          <div className="grn w3-indigo w3-third w3-padding w3-round-large">
            <p className=" w3-left w3-large">🔥 Round 1 - OPPORTUNITY FINDING</p><p className="w3-right">📅 Ends on 30 Nov</p>
            <div className="w3-row">
              <p className="w3-large">We've provided a list of platforms in the brochure for you to analyze and choose from - choose 5 unique features which are not already listed and prepare a document outlining these features for review.</p>
              <div className=" w3-padding" ><a style={{width:"100%"}} href="https://docs.google.com/forms/d/e/1FAIpQLSdXyXfgAyPjowKflIet0q5kT39yZlzJN3m3UdpfDcBx1fPOAA/viewform?usp=sf_link" className="w3-button w3-black w3-round-xxlarge w3-medium" >Submit Presentation 📑</a></div>
            </div>
          </div>
          <div className="red w3-third w3-padding">
            <p className=" w3-left w3-large w3-text-indigo">🔥 Round 2 - THE BUILD</p><p className="w3-right">📅 Ends on 8 Dec</p>
            <div className="w3-row">
              <p className="w3-large">Selected participants will now have to build the platform with at least one suggested feature and submit the deployyed or video link.</p>
              <div className=" w3-padding" ><button style={{width:"100%"}} className="w3-button w3-indigo w3-round-xxlarge w3-medium">Submit Project</button></div>
            </div>
          </div>
          <div className="red w3-third w3-padding">
            <p className=" w3-left w3-large w3-text-indigo">🔥 Round 3 - DEMO PITCH</p><p className="w3-right">📅 Ends on 11 Dec</p>
            <div className="w3-row">
              <p className="w3-large">Selected participants are eligible to enter our CTO Pool. They will be interviewed about the build and their entrepreneurial skills will be judged by our team. The interview will take place during the closing session of the event in front of a CTO guest from a company and the audience. Winners will be announced live in the same session with the prizes.</p>
              <div className=" w3-padding" ><button style={{width:"100%"}} className="w3-button w3-indigo w3-round-xxlarge w3-medium">Get Zoom Link</button></div>
            </div>
          </div>
        </div>
        :
        null
      }
      {
        mockenrolled ?
        <div className="w3-row cen w3-padding " >
          <h3>All India Student CTO Hunt</h3>
          <div className="grn w3-quarter w3-padding">
            <p className=" w3-left w3-large">Round 1 - OPPORTUNITY FINDING</p><p className="w3-right w3-text-green">Opened</p>
            <div className="w3-row">
              <p className="">If you're a student with technical skills and an entrepreneurial mindset, then this is the perfect competition for you! You'll have the chance to join an ambitious student-led startup as a Tech Cofounder or CTO and win exciting prizes for sure - so don't miss out and register now!</p>
              <div className=" w3-padding" ><a style={{width:"100%"}} className="w3-button w3-green w3-round-xxlarge w3-small" >Complete Round 1</a></div>
            </div>
          </div>
          <div className="red w3-quarter  w3-padding">
            <p className=" w3-left w3-large">Round 1 - OPPORTUNITY FINDING</p><p className="w3-right w3-text-green">Opened</p>
            <div className="w3-row">
              <p className="">If you're a student with technical skills and an entrepreneurial mindset, then this is the perfect competition for you! You'll have the chance to join an ambitious student-led startup as a Tech Cofounder or CTO and win exciting prizes for sure - so don't miss out and register now!</p>
              <div className=" w3-padding" ><a style={{width:"100%"}} className="w3-button w3-yellow w3-round-xxlarge w3-small" >Complete Round 1</a></div>
            </div>
          </div>
          <div className="red w3-quarter  w3-padding">
            <p className=" w3-left w3-large">Round 1 - OPPORTUNITY FINDING</p><p className="w3-right w3-text-green">Opened</p>
            <div className="w3-row">
              <p className="">If you're a student with technical skills and an entrepreneurial mindset, then this is the perfect competition for you! You'll have the chance to join an ambitious student-led startup as a Tech Cofounder or CTO and win exciting prizes for sure - so don't miss out and register now!</p>
              <div className=" w3-padding" ><a style={{width:"100%"}} className="w3-button w3-yellow w3-round-xxlarge w3-small" >Complete Round 1</a></div>
            </div>
          </div>
          <div className="red w3-quarter  w3-padding">
            <p className=" w3-left w3-large">Round 1 - OPPORTUNITY FINDING</p><p className="w3-right w3-text-green">Opened</p>
            <div className="w3-row">
              <p className="">If you're a student with technical skills and an entrepreneurial mindset, then this is the perfect competition for you! You'll have the chance to join an ambitious student-led startup as a Tech Cofounder or CTO and win exciting prizes for sure - so don't miss out and register now!</p>
              <div className=" w3-padding" ><a style={{width:"100%"}} className="w3-button w3-yellow w3-round-xxlarge w3-small" >Complete Round 1</a></div>
            </div>
          </div>
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
      </div>
      </Wrapper>
    </>
  );
};
Dashboard.noLayout = false;
export default Dashboard;
