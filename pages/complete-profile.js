import {
    Container,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Divider,
} from '@mui/material';
import { useState, useEffect } from 'react';
import {
    Image,
    Link
  } from "@nextui-org/react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from '../components/Footer_new';
import {styled} from "@mui/material";
import Router from "next/router";

const genders = [
    {
        value: 'Male',
        label: '♂ Male'
    },
    {
        value: 'Female',
        label: '♀ Female'
    },
    {
        value: 'Other',
        label: '⚢ / ⚣ Other'
    }
];
const roles = [
    {
        value: 'Tech',
        label: 'Tech'
    },
    {
        value: 'Sales',
        label: 'Sales'
    },
    {
        value: 'Marketing',
        label: 'Marketing'
    },
    {
        value: 'Legal & Admin',
        label: 'Legal & Admin'
    },
    {
        value: 'Operations',
        label: 'Operations'
    }
];
const founderVal = [
    {
        value: '1',
        label: 'Yes'
    },
    {
        value: '0',
        label: 'No'
    },
];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}



const Wrapper = styled(Box)(
    () => `
    input {
      background-color: rgb(30, 35, 32);
      color: white;
      border: none;
    }
    .grey {
        background: white;
    }
    .margin {
        margin: 5vw;
        padding: 20px;
        margin-top: 10px;
        border-radius: 30px;
    }
    @media (max-width: 750px) {
        .margin {
          margin: 2vw;
          padding: 10px;
          border-radius: 0;
        }
  `
  );

import axiosInstance from "../components/axiosAPI";
function TabsDemo() {
    const [full_name, setFullName] = useState("");
    const [college_name, setCollegeName] = useState('');
    const [skills, setSkills] = useState('');
    const [field, setField] = useState('Startup');
    const [linkprofile, setLinkprofile] = useState('https://linkedin.com/');
    const [instaprofile, setInstaprofile] = useState('https://instagram.com/');
    const [gitprofile, setGitprofile] = useState('https://github.com/');
    const [username, setUserName] = useState("");
    const [authenticated, setAuthenticated] = useState(false);
    const [message, setMessage] = useState("");

    const handleFullName = (e) => {setFullName(e.target.value)};
    const handleCollegeName = (e) => {setCollegeName(e.target.value)};
    const handleSkills = (e) => {setSkills(e.target.value)};
    const handleField = (e) => {setField(e.target.value)};
    const handleLinkprofile = (e) => {setLinkprofile(e.target.value)};
    const handleInstaprofile = (e) => {setInstaprofile(e.target.value)};
    const handleGitprofile = (e) => {setGitprofile(e.target.value)};
  
    useEffect(() => {
        var access_token = localStorage.getItem("access_token");
        var refresh_token = localStorage.getItem("refresh_token");
        if (access_token && refresh_token){
          setAuthenticated(true);
          setUserName(localStorage.getItem("username"));
        }
      }, [authenticated]);

    const handleSubmit = () => {
      try {
          axiosInstance.post('/user/complete-profile/', {
              username: username,
              fullname: full_name,
              collegename: college_name,
              skills: skills,
              field: field,
              linkedin: linkprofile,
              instagram: instaprofile,
              github: gitprofile,
          })
          .then((response) => {
            if (response.status==200){
              console.log("done !");
              Router.push({
                pathname: "/dashboard",
                query: {"message": "Profile completed successfully!"}
              })
            }
            else {setMessage("Some error occurred while completing your profile!");}
          });
      } 
      catch (error) {
          throw error;
      }
    };

    return (
        <>
            <div className='w3-left w3-margin-left'>
            <Link href={"/"}>
                <Image style={{width:"130px"}} src="logo.svg" alt=""></Image>
            </Link>
            </div>
            <Container maxWidth="lg" >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                    marginTop={4}
                    marginBottom={4}
                >
                    <Grid item xs={13}>
                    <Wrapper>
                        <Card  className="w3-black w3-padding" >
                            <Box display={"flex"} className="w3-black" justifyContent={"space-between"}  height={"7vh"}>
                                <CardHeader title="Complete your profile" />
                                {message?
                                <p className="red w3-medium w3-text-red " >{message}</p>
                                :
                                null}
                            </Box>
                            <Divider />
                            <CardContent className="w3-black"  >
                                <Box sx={{ width: '100%' }} minHeight={"50vh"}>
                                
                                    <div style={{width: "100%"}}>
                                    <div className="w3-half w3-padding-xlarge w3-margin-top w3-margin-bottom ">
                                        <h3 className="w3-text-blue">Personal Details</h3>
                                        <div>
                                            <label className="" >Full Name <e className="w3-text-red">*</e></label>
                                            <input
                                                required
                                                className="w3-input w3-round w3-large w3-padding w3-margin-bottom"
                                                onChange={handleFullName}
                                                type="text"
                                                autoComplete="on"
                                                name="full_name"
                                                id="full_name"
                                                placeholder="Enter your full name"
                                            />
                                            <label  >College Name</label>
                                            <input
                                                required
                                                className="w3-input w3-round w3-large w3-padding w3-margin-bottom"
                                                onChange={handleCollegeName}
                                                type="text"
                                                autoComplete="on"
                                                name="college_namee"
                                                id="college_namee"
                                                placeholder="Enter your college name"
                                            />
                                            <label  >Your Skills <e className="w3-text-red">*</e></label>
                                            <input
                                                required
                                                className="w3-input w3-round w3-large w3-padding w3-margin-bottom"
                                                onChange={handleSkills}
                                                type="text"
                                                autoComplete="on"
                                                name="skills"
                                                id="skills"
                                                placeholder="Your skills with comma ex: python,django..."
                                            />
                                            <label  >Current Field <e className="w3-text-red">*</e></label>
                                            <input
                                                required
                                                className="w3-input w3-round w3-large w3-padding w3-margin-bottom"
                                                onChange={handleField}
                                                type="text"
                                                autoComplete="on"
                                                name="field"
                                                id="field"
                                                placeholder="ex: marketing, technology, crypto, economics, literature ...."
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="w3-half w3-padding w3-margin-top w3-margin-bottom ">
                                        <h3 className="w3-text-blue">Socials</h3>
                                        <div>
                                            <label >LinkedIn Profile <e className="w3-text-red">*</e></label>
                                            <input
                                                required
                                                className="w3-input w3-round w3-large w3-padding w3-margin-bottom"
                                                onChange={handleLinkprofile}
                                                type="text"
                                                autoComplete="on"
                                                name="linkedin"
                                                id="linkedin"
                                                placeholder="paste your profile link here ... "
                                            />
                                            <label  >Instagram Profile (Optional)</label>
                                            <input
                                                className="w3-input w3-round w3-large w3-padding w3-margin-bottom"
                                                onChange={handleInstaprofile}
                                                type="text"
                                                autoComplete="on"
                                                name="instagram"
                                                id="instagram"
                                                placeholder="paste your profile link here ... "
                                            />
                                            <label  >Github Profile (If any)</label>
                                            <input
                                                className="w3-input w3-round w3-large w3-padding w3-margin-bottom"
                                                onChange={handleGitprofile}
                                                type="text"
                                                autoComplete="on"
                                                name="github"
                                                id="github"
                                                placeholder="paste your profile link here ... "
                                            />
                                        </div>
                                        <p className="w3-padding">
                                        <label className="w3-margin-right">I Agree, to the terms & conditions. 
                                            <a className="w3-text-blue" href="#"> check here</a>
                                        </label>
                                        <input class="w3-check" type="checkbox" />
                                        </p>
                                        <button type="submit" onClick={handleSubmit} className="w3-button w3-blue w3-round-large" style={{width:"100%"}} >Register</button>
                                    </div>
                                    </div>

                                </Box>
                            </CardContent>
                        </Card>
                        </Wrapper>
                    </Grid>
                </Grid>
                <Footer />
            </Container>
        </>
    );
}

TabsDemo.noLayout = true;
export default TabsDemo;
