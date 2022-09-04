import { Box } from "./Box.js";
import Nav from "./nav.js";

export const Layout = ({ children }) => (
  <Box>
    <Nav></Nav>
    {children}
  </Box>
);
