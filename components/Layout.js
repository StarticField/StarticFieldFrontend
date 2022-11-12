import { Box } from "./Box.js";
import styles from "../styles/layout.module.css"
import dynamic from "next/dynamic.js";
import Nav from './Nav.js';
import Footer from './Footer.js'

// const Nav = dynamic(()=>import('./Nav.js'))
// const Footer = dynamic(()=>import('./Footer.js'))
export const Layout = ({ children }) => (
  <Box>
    <div className={styles.navTopSpace}></div>
    <Nav/>
    {children}
    <Footer/>
  </Box>
);
