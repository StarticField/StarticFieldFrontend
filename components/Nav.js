import {
  Navbar,
  Link,
  Dropdown,
  useTheme,
  Image,
  Button,
} from "@nextui-org/react";

import style from '../styles/nav.module.css'

export default function Nav() {
  const collapseItems = [
    "Home",
    "About Us",
    "For Student Startups",
    "For Corporate Startups",
    "For Stusents",
    "Premium Membership",
  ];


  const theme = useTheme();

  return (
    <Navbar maxWidth={'fluid'} height={'15vh'} shouldHideOnScroll variant="sticky">
      <div className={style.navParent}>
        <Navbar.Brand
            css={{
              w: "150px",
            }}
        >
          <Image src="logo.svg" alt=""></Image>
        </Navbar.Brand>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Content enableCursorHighlight activeColor="white" hideIn="xs">
          <Navbar.Link isActive href="/">
            Home
          </Navbar.Link>
          <Navbar.Item>
            <Dropdown>
              <Dropdown.Button auto light ripple={false}>
                Why Startic Field?
              </Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions" css={{ $$dropdownMenuWidth: "280px" }}>
                <Dropdown.Item >
                  <Link href="./forStudents" color="text">
                    For Student Startups
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item >For Students</Dropdown.Item>
                <Dropdown.Item>
                  <Link href="./eventsAndProgram" color="text">
                    Events and Programs
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item >For Corporate contributors</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Item>
          <Navbar.Link href="#">About Us</Navbar.Link>
          <Navbar.Link href="./premium">Premium Membership</Navbar.Link>
          <Navbar.Link href="#">
            <Button bordered color="gradient" auto>
              Sign In
            </Button>
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
              <Navbar.CollapseItem
                  key={item}
                  activeColor={theme.primary}
                  css={{
                    color: index === collapseItems.length - 1 ? "$error" : "",
                  }}
                  isActive={index === 2}
              >
                <Link
                    color="inherit"
                    css={{
                      minWidth: "100%",
                    }}
                    href="#"
                >
                  {item}
                </Link>
              </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
