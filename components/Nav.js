import {
  Navbar,
  Dropdown,
  Image,
  Button,
  Link
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import style from '../styles/nav.module.css';

export default function Nav() {
  const [authenticated, setAuthenticated] = useState(false);
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setAuthenticated(false);
  }
  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token){
      setAuthenticated(true);
    }
  }, []);
  const collapseItems = [
    "About Us",
    "For Student Startups",
    "For Students",
    "Events & Programs",
    "For Corporate Startups",
    "Premium Membership",
  ];
  const collapseItemsLink = [
    "/aboutUs",
    "/forStartups",
    "/forStudents",
    "/eventsAndProgram",
    "/forCorporateContributors",
    "/premium",
  ];

  return (
    <Navbar maxWidth={'fluid'} height={'15vh'} shouldHideOnScroll variant="sticky">
      <div className={style.navParent}>
        <Navbar.Brand
            css={{
              w: "150px",
            }}
        >
          <Link href={"/"}>
            <Image src="logo.svg" alt=""></Image>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle showIn="xs"/>
        <Navbar.Content enableCursorHighlight activeColor="white" hideIn="xs">
          <Navbar.Item>
            <Dropdown>
              <Dropdown.Button auto light ripple={false}>
                Why Startic Field?
              </Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions" css={{ $$dropdownMenuWidth: "280px" }}>
                <Dropdown.Item >
                  <Link href="./forStartups" color="text">
                    For Student Startups
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item >
                  <Link href="./forStudents" color="text">
                    For Students
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="./profile" color="text">
                    Profile
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="./eventsAndProgram" color="text">
                    Events and Programs
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item >
                  <Link href="./forCorporateContributors" color="text">
                    For Corporate contributors
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Item>
          <Navbar.Link href="./aboutUs">About Us</Navbar.Link>
          <Navbar.Link  href="./premium">
              Premium Membership
          </Navbar.Link>
          {authenticated?
            <Button onPress={logout} className="w3-large" bordered color="gradient" auto>
              Logout
            </Button>
          :
            <Navbar.Link href="./sign-in">
              <Button className="w3-large" bordered color="gradient" auto>
                Sign In
              </Button>
            </Navbar.Link>
          }
        </Navbar.Content>
        <Navbar.Collapse css={{paddingLeft:'10vw'}}>
          {collapseItems.map((item, index) => (
              <Navbar.CollapseItem key={item}>
                <Link
                    color="inherit"
                    css={{
                      minWidth: "100%",
                    }}
                    href={collapseItemsLink[index]}
                    >
                  {item}
                </Link>
              </Navbar.CollapseItem>  
          ))}
          {
            authenticated ?
            <Navbar.CollapseItem key={"logout"}>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  onPress={logout}
                  className={
                    style.premium
                  }>
                Logout
              </Link>
            </Navbar.CollapseItem>  
            :
            <Navbar.CollapseItem key={"sign-in"}>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href={"/sign-in"}
                  className={
                    style.premium
                  }>
                SignUp / Login
              </Link>
            </Navbar.CollapseItem> 
          }
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
