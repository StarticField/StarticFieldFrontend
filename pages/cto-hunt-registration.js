import {Grid, Spacer, Button, Image, Link} from "@nextui-org/react";
import { Box, styled} from "@mui/material";
import styles from "../styles/hero.module.css";
import {useState} from "react";


const Wrapper = styled(Box)(
    () => `
    input {
      background-color: rgb(23, 30, 42);
      color: white;
      border: none;
    }
  `
  );

export default function CTOHuntRegistration(){


    return(
    <Wrapper>
        <h3 className="w3-center w3-row w3-margin" >
            <e className="w3-text-green">All India CTO Hunt</e> by <e className="w3-text-blue">StarticField </e>
        </h3>
        <Grid.Container className={styles.main}>
            <form className="w3-half w3-padding w3-margin-top w3-margin-bottom ">
                <h3>Personal Details</h3>
                <div className="w3-margin w3-padding w3-round-large">
                    <label className="w3-margin-left" >Full Name</label>
                    <input
                        required
                        className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                        
                        type="text"
                        autoComplete="on"
                        name="full_name"
                        id="full_name"
                        placeholder="Enter your full name"
                    />
                    <label className="w3-margin" >College Name</label>
                    <input
                        required
                        className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                        
                        type="text"
                        autoComplete="on"
                        name="full_name"
                        id="full_name"
                        placeholder="Enter your college name"
                    />
                    <label className="w3-margin" >Your Skills</label>
                    <input
                        required
                        className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                        
                        type="text"
                        autoComplete="on"
                        name="full_name"
                        id="full_name"
                        placeholder="Your skills with comma ex: python,django..."
                    />
                    <label className="w3-margin" >Current Field</label>
                    <input
                        required
                        className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                        
                        type="text"
                        autoComplete="on"
                        name="full_name"
                        id="full_name"
                        placeholder="ex: marketing, technology, crypto, economics, literature ...."
                    />
                </div>
            </form>
            
            <div className="w3-half w3-padding w3-margin-top w3-margin-bottom ">
                <h3>Socials</h3>
                <div className="w3-margin w3-padding w3-round-large">
                    <label className="w3-margin" >LinkedIn Profile</label>
                    <input
                        required
                        className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                        
                        type="text"
                        autoComplete="on"
                        name="full_name"
                        id="full_name"
                        placeholder="paste your profile link here ... "
                    />
                    <label className="w3-margin" >Instagram Profile (Optional)</label>
                    <input
                        className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                        
                        type="text"
                        autoComplete="on"
                        name="full_name"
                        id="full_name"
                        placeholder="paste your profile link here ... "
                    />
                    <label className="w3-margin" >Github Profile (If any)</label>
                    <input
                        className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                        
                        type="text"
                        autoComplete="on"
                        name="full_name"
                        id="full_name"
                        placeholder="paste your profile link here ... "
                    />
                </div>
                <p className="w3-padding">
                <label className="w3-margin-right">I Agree, to the terms & conditions. 
                    <a className="w3-text-blue" href="#"> check here</a>
                </label>
                <input class="w3-check" type="checkbox" />
                </p>
                <button type="submit" className="w3-button w3-blue w3-round-large" style={{width:"100%"}} >Register</button>
            </div>
        </Grid.Container>
        
    </Wrapper>
    )
}
