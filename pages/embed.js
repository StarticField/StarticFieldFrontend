import axios from 'axios'
import {useState, useEffect} from "react";
import Router from "next/router";
import {useRouter} from "next/router"; 

import axiosInstance from "../components/axiosAPI";
const Form = () => {
    const [available, setAvailable] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [error, setError] = useState("Form not available");
    const message = useRouter().query.message;
    const router = useRouter();
    useEffect(() => {
        var access_token = localStorage.getItem("access_token");
        var refresh_token = localStorage.getItem("refresh_token");
        if (access_token && refresh_token){
          setAuthenticated(true);
          getAvailable();
        }
        else {
          router.push({
            pathname: "/",
            query: {"message": "Not authenticated !"}
          });
        }
      }, []);
    const getAvailable = () => {
        try {
            axiosInstance.get('/form-available/mockpitch/', {
                params: {username: localStorage.getItem("username")}
            })
            .then((response) => {
              if (response.status==200){
                setAvailable(response.data.available);
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
        <div style={{width:"100%"}} className="startic-grey">
            {message?
            <h5 id="message" className="w3-row w3-margin-top w3-green w3-padding" >
                {message}
            </h5>
            :
            null}
            {
            available ? 
            <iframe style={{width: "100%"}} className="form" 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdvmptZA14jLVS4bRuor28L95kRvcM96WsvQFVxV0tjf7KtYA/viewform?embedded=true" 
            width="640"
            height="4500" 
            // frameborder="0" 
            // marginheight="0" 
            // marginwidth="0"
            scrolling="no">Loading…</iframe>
            :
            <div className='w3-margin w3-padding w3-round-large w3-center w3- '>{error}</div>
            }
        </div>
    )
}

Form.noLayout = false;
export default Form;