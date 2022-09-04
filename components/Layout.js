import { Box } from "./Box.js";
import Nav from "./Nav.js";

export const Layout = ({ children }) => (
  <Box>
    <Nav></Nav>
    {children}
  </Box>
);
