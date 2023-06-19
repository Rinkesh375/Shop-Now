import { Box, Image } from "@chakra-ui/react";
import React from "react";
import image from "../Images/Product_error_02.svg";

const ProductError = () => {
  return (
    <Box
      width="80vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center">
      <Image src={image} alt="Product Error" width="30%" />
    </Box>
  );
};

export default ProductError;
