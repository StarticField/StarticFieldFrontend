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
      background-color: rgb(4, 4, 4);
      color: white;
      border: none;
    }
    .grey {
        background: white;
    }
    .margin {
        
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
    const [field, setField] = useState('');
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

    const checkForm = () => {
        if (!full_name) {
            alert("FullName field cannot be left empty !");
            return false;
        }
        else if (!college_name) {
            alert("College name field cannot be left empty !");
            return false;
        }
        else if (!skills) {
            alert("Skills field cannot be left empty !");
            return false;
        }
        else if (!field) {
            alert("Please enter your current field !");
            return false;
        }
        else if (linkprofile==="https://linkedin.com/" && gitprofile==="https://github.com/" && instaprofile==="https://instagram.com/") {
            alert("Please enter any one of the given social fields !");
            return false;
        }
        else return true;
    }

    const handleSubmit = () => {
        if (checkForm()){
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
                    if (response.status===200){
                    console.log("done !");
                    Router.push({
                        pathname: "/cto-hunt",
                        query: {"message": "Profile completed successfully!"}
                    })
                    }
                    else {setMessage("Some error occurred while completing your profile!");}
                });
            } 
            catch (error) {
                throw error;
            }
        } else{
            setMessage("Fill the compulsory fields.")
        }
    };

    return (
        <>
            <div className='w3-left w3-margin-left'>
            <Link href={"/"}>
                <Image width="130px" src="logo.svg" alt="logo"/>
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
                        <Card className="w3-black" >
                            <Box display={"flex"} className="w3-black" justifyContent={"space-between"}  height={"7vh"}>
                                <CardHeader title="Complete your profile" />
                            </Box>
                            {message?
                                <p className="w3-medium w3-text-red w3-margin-left " >{message}</p>
                                :
                                null}
                            <Divider />
                            <CardContent className="w3-black"  >
                                <Box sx={{ width: '100%' }} minHeight={"50vh"}>
                                
                                    <div style={{width: "100%"}}>
                                    <div className="w3-half w3-margin-top w3-margin-bottom ">
                                        <h3 className="w3-text-indigo">Personal Details</h3>
                                        <div>
                                            <label className="" >Full Name <e className="w3-text-red">*</e></label>
                                            <input
                                                required
                                                className="w3-input w3-round-xxlarge w3-large w3-padding w3-margin-bottom"
                                                onChange={handleFullName}
                                                type="text"
                                                autoComplete="on"
                                                name="full_name"
                                                id="full_name"
                                                placeholder="Enter your full name"
                                            />
                                            <label >College Name <e className="w3-text-red">*</e></label>
                                            <input
                                                required
                                                className="w3-input w3-round-xxlarge w3-large w3-padding w3-margin-bottom"
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
                                                className="w3-input w3-round-xxlarge w3-large w3-padding w3-margin-bottom"
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
                                                className="w3-input w3-round-xxlarge w3-large w3-padding w3-margin-bottom"
                                                onChange={handleField}
                                                type="text"
                                                autoComplete="on"
                                                name="field"
                                                id="field"
                                                placeholder="ex: marketing, technology, crypto, economics, literature ...."
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="w3-half w3-margin-top w3-margin-bottom ">
                                        <h3 className="w3-text-indigo">Socials <e className="w3-medium w3-text-yellow">( Atleast one )</e></h3>
                                        <div>
                                            <label >LinkedIn Profile</label>
                                            <input
                                                required
                                                className="w3-input w3-round-xxlarge w3-large w3-padding w3-margin-bottom"
                                                onChange={handleLinkprofile}
                                                type="text"
                                                autoComplete="on"
                                                name="linkedin"
                                                id="linkedin"
                                                placeholder="paste your profile link here ... "
                                            />
                                            <label  >Instagram Profile (Optional)</label>
                                            <input
                                                className="w3-input w3-round-xxlarge w3-large w3-padding w3-margin-bottom"
                                                onChange={handleInstaprofile}
                                                type="text"
                                                autoComplete="on"
                                                name="instagram"
                                                id="instagram"
                                                placeholder="paste your profile link here ... "
                                            />
                                            <label  >Github Profile (If any)</label>
                                            <input
                                                className="w3-input w3-round-xxlarge w3-large w3-padding w3-margin-bottom"
                                                onChange={handleGitprofile}
                                                type="text"
                                                autoComplete="on"
                                                name="github"
                                                id="github"
                                                placeholder="paste your profile link here ... "
                                            />
                                        </div>
                                        
                                        <button type="submit" onClick={handleSubmit} className="w3-button w3-indigo w3-round-xxlarge" style={{width:"100%"}} >Complete</button>
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
