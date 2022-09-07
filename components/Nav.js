import {
  Navbar,
  Link,
  Dropdown,
  useTheme,
  Image,
  Button,
} from "@nextui-org/react";

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
    <Navbar maxWidth={"fluid"} variant={"sticky"}>
      <Navbar.Brand
        css={{
          w: "150px",
        }}
      >
        <Image src="logo.png" alt=""></Image>
      </Navbar.Brand>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Content enableCursorHighlight activeColor="white" hideIn="xs">
        <Navbar.Link isActive href="#">
          Home
        </Navbar.Link>
        <Navbar.Item>
          <Dropdown>
            <Dropdown.Button auto light ripple={false}>
              Programs
            </Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
              <Dropdown.Item key="new">For Student Startups</Dropdown.Item>
              <Dropdown.Item key="copy">
                For Corporate contributors
              </Dropdown.Item>
              <Dropdown.Item key="edit">Premium Membership</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Item>
        <Navbar.Link href="#">About Us</Navbar.Link>
        <Navbar.Link href="#">For Students</Navbar.Link>
        <Navbar.Link href="#">Premium Membership</Navbar.Link>
        <Navbar.Link href="#">
          <Button bordered color="gradient" auto>
            Get Started
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
    </Navbar>
  );
}
