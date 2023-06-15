import { HamburgerIcon } from "@chakra-ui/icons";
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
import { GrCart } from "react-icons/gr";
import { HashLink as Link } from "react-router-hash-link";
import { SearchIcon } from "@chakra-ui/icons"
const Navbar = () => {
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
        zIndex: "100",
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center",
        textDecoration: "none",
        top: "0",
        height: "100px",
      }}
    >
      <Box
        width="60px"
        style={{ border: "solid red", }}
        display={{ sm: "block", md: "none", xl: "none", base: "block" }}
      >
        <Menu >
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
        </Menu>
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
        <Link style={myStyle} to="/#">
          Home
        </Link>
        <Link style={myStyle} to="/#about-us">
          About
        </Link>
        <Link style={myStyle} to="/#collection">
          Collection
        </Link>
        <Link style={myStyle} to="/#new-arrivals" smooth>
          New Arrivals
        </Link>
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
        <Link to="/#">
        <Center fontSize="15px" flexDirection="column" cursor="pointer"><VscAccount size="28px" /><Text marginTop="5px">Login</Text></Center>
        </Link >
          <Link to="/#"><Center fontSize="15px" flexDirection="column" cursor="pointer"><GrCart size="28px" /><Text marginTop="5px">Cart</Text></Center></Link>    
        
      </Flex>
    </Box>
  );
};

export default Navbar;
