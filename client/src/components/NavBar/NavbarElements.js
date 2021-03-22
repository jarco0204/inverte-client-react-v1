import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom"; //Using alias
// import { Link as LinkScroll } from "react-scroll";
import { MdKeyboardArrowDown } from "react-icons/md";

//Dealing with multiple props for a styled component
const handleBackgroundColor = (scroll, homeNav) => {
    if (homeNav) {
        if (scroll) {
            // return "linear-gradient(-90deg,rgba(44, 239, 12, 0.5) 26%,rgba(22, 200, 18, 0.4) 46%,rgba(1, 24, 156, 0.4) 46%, rgba(1, 24, 156, 0.5) 76%)";
            return "black";
        }
    } else {
        if (scroll) {
            return "linear-gradient(90deg,rgba(44, 239, 12, 0.9) 26%,rgba(22, 200, 18, 0.5) 46%,rgba(1, 24, 156, 0.5) 46%, rgba(1, 24, 156, 0.99) 76%)";
        }
    }
    return "rgba(1, 1, 1, 0.9)";
};
export const Nav = styled.nav`
    background: ${({ scrollNav, mainNav }) =>
        handleBackgroundColor(scrollNav, mainNav)};
    position: sticky;
    top: 0;
    z-index: 99;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    z-index: 1;
    height: 80px;
    width: 100%;
    max-width: 1400px;
`;

//Using router so that it nows it is a different page
export const NavLogo = styled(LinkRouter)`
    display: flex;
    align-items: center;

    padding: 0px 10px;
    color: #ccff33;
    cursor: pointer;
    font-size: 36px;
    font-weight: 900;
    text-decoration: none;

    &:hover {
        scale: 1.1;
        transition: all 0.2s ease-in-out;
        color: #ccff33;
        text-decoration: none;
    }
    /*It controls the whitespace of the logo in bigger screens. In order to keep the page symmetric, the same property was applied to the nav button*/
    @media screen and (max-width: 456px) {
        font-size: 1.5rem;
        position: relative;
        left: -10px;
    }
`;
export const Logo = styled.img`
    height: 45px;
    width: 50px;
    margin-right: 10px;

    @media screen and (max-width: 456px) {
        height: 40px;
        width: 40px;
    }
`;
export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-20%, 20%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
        padding-top: 6px;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    /* margin-left: 50px; */
    /* margin-right: 30px; */
    padding: 40px 30px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    display: flex;
    padding: 0 30px;
    @media screen and (max-width: 968px) {
        padding: 0 5px;
    }
`;

export const NavLinks = styled(LinkRouter)`
    color: whitesmoke;
    font-size: 17px;
    text-decoration: none;
    cursor: pointer;

    &.active {
        scale: 1.05;
        color: NavajoWhite;
        text-decoration: none;
        border-bottom: 2px solid #b9e769;
    }
    &:hover {
        scale: 1.1;
        text-decoration: none;
        color: NavajoWhite; /*Here write a rule when the bg is light*/
    }
`;

export const NavBtn = styled.div`
    display: flex;
    margin-left: 50px;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkRouter)`
    margin-left: 50px;
    padding: 6px 10px;
    border-radius: 10px;
    background: #ff9e00;
    box-shadow: 0px 0px 2px 1px #fff;
    color: ${({ primary }) => (primary ? "white" : "white")};
    font-size: 17px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        box-shadow: 0px 0px 6px 2px #fff;
        color: #ccff33;
        text-decoration: none;
    }
`;

export const arrowUtilities = styled(MdKeyboardArrowDown)`
    color: black;
    font-size: 20px;
`;
