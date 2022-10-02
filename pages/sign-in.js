import { Box, Button, Grid, styled, TextField } from "@mui/material";
import { Google } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Router from "next/router";
import {Link} from "@nextui-org/react";

const Wrapper = styled(Box)(
  ({ theme }) => `
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
    background: rgba(51, 51, 51, 0.5);
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
    background: #fff;
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
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
    overflow: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  
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
      max-width: 90vw;
    }
    .modal-right {
      display: none;
    }
  }
  .left-color {
    background: rgb(47, 50, 53);
  }
  input {
    background-color: rgb(36, 41, 36);
    color: white;
    border: none;
  }
`
);

const SignUp = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left left-color">
                <Grid item paddingBottom={4} paddingLeft={1}>
                  <Typography className="" variant="h4" component="h3" gutterBottom>
                    Begin your Startup journey!
                  </Typography>
                  <Typography className="" variant="subtitle2">
                    To the startic field website an eco-system for startup.
                  </Typography>
                </Grid>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "97%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <input
                    required
                    className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                    label="firstname"
                    type="name"
                    autoComplete="off"
                    name="firstname"
                    id="firstname"
                    placeholder="Full Name"
                  />
                  <input
                    required
                    className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                    label="lastname"
                    type="name"
                    autoComplete="off"
                    name="lastname"
                    id="lastname"
                    placeholder="Mobile No."
                  />
                  <input
                    required
                    className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                    label="email"
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <input
                    required
                    className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                    label="password"
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <input
                    required
                    className="w3-input w3-round-large w3-large w3-padding-large w3-margin-bottom"
                    label="Conform Password"
                    type="password"
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                  />
                </Box>
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
                  >
                    Google
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={() => {
                      Router.push("/signin");
                    }}
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
              <div className="modal-right left-color">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={"img2.png"}
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
SignUp.noLayout = true;
export default SignUp;
