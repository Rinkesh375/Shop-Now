// import { HamburgerIcon } from "@chakra-ui/icons";

import {
  Box,
  Image,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  IconButton,
  Input,
  Text,
  Flex,
  Center
} from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";

import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
// import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons"
import { useState } from "react";
import { useAppSelector } from "src/store";
import { adminLogout } from "src/redux/AdminProductReducer/actions";
const Navbar = () => {
  const { isAdminAuth} = useAppSelector(state => state.adminProductReducer);
  const dispatch: Dispatch<any> = useDispatch();
  const myStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <Box
      fontFamily='Poppins,sans-serif'
      letterSpacing="wide"
      fontWeight="bold"
      height={{
        base: "15%",
        sm: "15%", // 0-48em
        md: "14%", // 48em-80em,
        xl: "13%", // 80em+
      }}
      style={{
        padding: "10px 0px 10px 0px",
       
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center",
        textDecoration: "none",
        top: "0",
        height: "100px",
        marginBottom:"3rem",
     
      }}
    >
      <Box
        width="60px"
        style={{ border: "solid red", }}
        display={{ sm: "block", md: "none", xl: "none", base: "block" }}
      >
        {/* <Menu >
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            color="#2FB0DA"
          >
            Open menu
          </MenuButton>
          <MenuList bgColor="#06181C" >
            <MenuItem as="a" href="/">
              Home
            </MenuItem>
            <MenuItem as="a" href="#new-arrivals">
              New Arrivals
            </MenuItem>
            <MenuItem as="a" href="#about-us">
              About
            </MenuItem>
            <MenuItem as="a" href="collection">
              Collection
            </MenuItem>
            <MenuItem as="a" href="cart">
              Cart
            </MenuItem>
            <MenuItem as="a" href="login">
              Login
            </MenuItem>
          </MenuList>
        </Menu> */}
      </Box>
      <Box width={["40%", "20%", "10%", "6%"]}>
        <Link to="/#" >
          <Image src="https://i.ibb.co/G5qpJkc/construct-week-project-image.png" width="100px"></Image>
        </Link>
      </Box>
      <Box
        fontSize={{ md: "18px", xl: "18px" }}
        display={{ sm: "none", md: "flex", xl: "flex", base: "none" }}
        justifyContent={{ md: "space-around", xl: "space-around" }}
        width={[
          "20%", // 0-30em
          "50%", // 30em-48em
          "55%", // 48em-62em
          "45%",
          "40%", // 62em+
        ]}>
        <Link style={myStyle} to="/admin-products">
          All Products
        </Link>
        <Link style={myStyle} to="/admin-add-product">
          Add New Product
        </Link>
        {/* <Link style={myStyle} to="/#collection">
          Collection
        </Link>
        <Link style={myStyle} to="/#new-arrivals" >
          New Arrivals
        </Link> */}
      </Box>
      <Box display={{ sm: "none", md: "flex", xl: "flex", base: "none" }}
        justifyContent="space-between"
        width={[
          "60%", // 0-30em
          "45%", // 30em-48em
          "30%", // 48em-62em
          "26%", // 62em+
          "19%",
          "25%",
        ]}>
        <Input position="relative" variant='flushed' placeholder='search' borderBottom="1px" borderColor='gray' />
        {/* <GrSearch /> */}
        <SearchIcon w="18px" h="18px" position="absolute" right="295px" top="45px" color="gray" />
      </Box>
      <Flex fontFamily='Poppins,sans-serif' display={{ sm: "none", md: "flex", xl: "flex", base: "none" }} justifyContent="space-around" width={[
        "60%", // 0-30em
        "45%", // 30em-48em
        "30%", // 48em-62em
        "26%", // 62em+
        "19%",
        "13%",
      ]}>
        {/* <Link to="/admin-login">
        <Center fontSize="15px" flexDirection="column" cursor="pointer"><VscAccount size="28px" /><Text marginTop="5px">{localStorage.getItem("currentUser")?localStorage.getItem("userName"):"Login"}</Text></Center>
        </Link > */}
         <Menu >
          <MenuButton >
          <VscAccount size="28px" style={{marginLeft:"1rem"}} />
          <Text marginTop="5px">{localStorage.getItem("currentUser")?localStorage.getItem("currentUser"):"Login"}</Text>
          </MenuButton>
          <MenuList bgColor="#06181C" > 
            {localStorage.getItem("currentUser")? <MenuItem onClick={()=>{
              localStorage.removeItem("currentUser");
              dispatch(adminLogout(dispatch))
              
            }}>Logout</MenuItem> :<Link to="/admin-login">Login</Link>}
          
          
          </MenuList>
        </Menu>
          {/* <Link to="/#"><Center fontSize="15px" flexDirection="column" cursor="pointer"><GrCart size="28px" /><Text marginTop="5px">Cart</Text></Center></Link>     */}
        
      </Flex>
    </Box>
  );
};

export default Navbar;