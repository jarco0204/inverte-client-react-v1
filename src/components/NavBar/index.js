import React from "react"; //, { useState, useEffect }
import { FaBars } from "react-icons/fa";
// import { animateScroll as scroll } from "react-scroll";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
    NavBtnLink,
    NavBtn,
    Logo,
} from "./NavbarElements";
import logo from "../../assets/images/inverteLogo.png";

export const Navbar = ({ toggle }) => {
    // const [scrollNav, setScrollNav] = useState(true);
    // // const [colorNavButton, setColorNavButton] = useState(true);
    // const changeNav = () => {
    //     if (window.scrollY >= 20) {
    //         setScrollNav(false);
    //         // setColorNavButton(0);
    //     } else {
    //         setScrollNav(true);
    //         // setColorNavButton(1);
    //     }
    // };

    // useEffect(() => {
    //     let isCancelled = false;
    //     if (!isCancelled) {
    //         window.addEventListener("scroll", changeNav);
    //     }
    //     return () => {
    //         isCancelled = true;
    //     };
    // }, []);

    // function
    // const toggleHome = () => {
    //     scroll.scrollToTop(); //there is also scroll down
    // };

    return (
        <>
            <Nav>
                <NavbarContainer pos={true}>
                    <NavLogo to="/username/main">
                        <Logo src={logo} />
                        InVerte App
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/username/settings">
                                Settings
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/">Logout</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
