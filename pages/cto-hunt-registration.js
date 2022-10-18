import {Grid, Spacer, Button, Image, Link} from "@nextui-org/react";
import { Box, styled} from "@mui/material";
import styles from "../styles/hero.module.css";
import {useState} from "react";


const Wrapper = styled(Box)(
    () => `
    input {
      background-color: rgb(23, 40, 52);
      color: white;
      border: none;
    }
    .grey {
        background-color: rgb(23, 30, 32);
    }
    .margin {
        margin: 5vw;
        padding: 20px;
        margin-top: 0;
        border-radius: 30px;
    }
    @media (max-width: 750px) {
        .margin {
          margin: 0;
          padding: 10px;
          border-radius: 0;
        }
  `
  );

export default function CTOHuntRegistration(){


    return(
    <Wrapper>
        <Grid.Container className={styles.main}>
            <div style={{width: "100%"}} className="grey w3-card-4 margin w3-topbar w3-border-blue w3-round w3-container" >
            <h2 className="w3-center w3-row w3-margin" >
                <e className="w3-text-blue">All India CTO Hunt</e>
            </h2>
            <div className="w3-half w3-padding-large w3-margin-top w3-margin-bottom ">
                <h3>Personal Details</h3>
                <div>
                    <label className="" >Full Name <e className="w3-text-red">*</e></label>
                    <input
                        required
                        className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                        
                        type="text"
                        autoComplete="on"
                        name="full_name"
                        id="full_name"
                        placeholder="Enter your full name"
                    />
                    <label  >College Name</label>
                    <input
                        required
                        className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                        
                        type="text"
                        autoComplete="on"
                        name="full_name"
                        id="full_name"
                        placeholder="Enter your college name"
                    />
                    <label  >Your Skills <e className="w3-text-red">*</e></label>
                    <input
                        required
                        className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                        
                        type="text"
                        autoComplete="on"
                        name="full_name"
                        id="full_name"
                        placeholder="Your skills with comma ex: python,django..."
                    />
                    <label  >Current Field <e className="w3-text-red">*</e></label>
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
            </div>
            
            <div className="w3-half w3-padding w3-margin-top w3-margin-bottom ">
                <h3>Socials</h3>
                <div>
                    <label  >LinkedIn Profile <e className="w3-text-red">*</e></label>
                    <input
                        required
                        className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                        
                        type="text"
                        autoComplete="on"
                        name="full_name"
                        id="full_name"
                        placeholder="paste your profile link here ... "
                    />
                    <label  >Instagram Profile (Optional)</label>
                    <input
                        className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                        
                        type="text"
                        autoComplete="on"
                        name="full_name"
                        id="full_name"
                        placeholder="paste your profile link here ... "
                    />
                    <label  >Github Profile (If any)</label>
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
            </div>
        </Grid.Container>
        
    </Wrapper>
    )
}
