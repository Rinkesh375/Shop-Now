import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  IconButton,
  Input
} from "@chakra-ui/react";
import { GrLogin } from "react-icons/gr";
import {GrCart} from "react-icons/gr";
import {GrShop} from "react-icons/gr"
import {GrSearch} from "react-icons/gr"
import { Link } from "react-router-dom";
const Navbar = () => {
  const myStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <Box
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
        height: "80px",
        borderBottom: "2px solid black"
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
            <MenuItem as="a" href="blog">
              Blog
            </MenuItem>
            <MenuItem as="a" href="#about-us">
              About
            </MenuItem>
            <MenuItem as="a" href="products">
              Collection
            </MenuItem>
            <MenuItem as="a" href="member">
              Cart
            </MenuItem>
            <MenuItem as="a" href="member">
              Shop
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
        ]}
        
      >
        <Link style={myStyle} to="/">
          Home
        </Link>
        <Link style={myStyle} to="/about">
          About
        </Link>
        <Link style={myStyle} to="/collection">
          Collection
        </Link>
        <Link style={myStyle} to="/blog">
          Blog
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
      <Input variant='flushed' placeholder='search' />
        <Button
        _hover={{bagroundColor:"white"}}
            cursor="pointer"
            borderRadius="6px"
            border="none"
            padding="3px 8px"
            fontWeight="bold"
          >
            <GrSearch/>
          </Button>
      </Box>
      <Box
        display={{ sm: "none", md: "flex", xl: "flex", base: "none" }}
        justifyContent="space-between"
        width={[
          "60%", // 0-30em
          "45%", // 30em-48em
          "30%", // 48em-62em
          "26%", // 62em+
          "19%",
          "12%",
        ]}
       
      >
        
        <Link to={"/products"}>
          <Button
            borderRadius="6px"
            backgroundColor="#2FD0DA"
            border="none"
            padding="3px 8px"
            color="#06181C"
            fontWeight="bold"
          >
            <GrShop/>
          </Button>
        </Link>
        <Link to="/cart">
          <Button
            cursor="pointer"
            borderRadius="6px"
            backgroundColor="#2FD0DA"
            border="none"
            padding="3px 8px"
            color="#06181C"
            fontWeight="bold"
          >
            <GrCart/>
          </Button>
        </Link>
        <Button
          borderRadius="6px"
          backgroundColor="#2FD0DA"
          border="none"
          padding="3px 8px"
          color="#06181C"
          fontWeight="bold">
          <GrLogin />
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
