import {
  Box,
  //   chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,

  //   Center,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  //   VisuallyHidden,
  List,
  ListItem,
  Badge,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import React from "react";
import { ProductDatatype } from "../type";
import StarRating from "./StarRating";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { useParams } from "react-router-dom";
import { postCartData, singleuser } from "../Redux/Product/prooduct.api";

export default function SingleCard() {
  // const { data } = useAppSelector((store: any) => store.ProuductReducer);

  const initialProduct: ProductDatatype = {
    type: "",
    category: "",
    ratings: 0,
    reviews: "",
    image: "",
    brand: "",
    title: "",
    size: "",
    discountprice: 0,
    price: 0,
    discountPercentage: "",
    id: 1,
    isNew: true,
    assured: true,
    gender: ",",
  };

  const [addcart, setAddcart] = React.useState<boolean>(false);
  const [datas, setData] = React.useState<ProductDatatype>(initialProduct);
  // console.log("omkar", datas);

  const handleCart = () => {
    if (addcart === false) {
      postCartData(datas);
    }
    setAddcart(true);
  };
  const { id } = useParams<string>();
  // console.log(id);

  React.useEffect(() => {
    singleuser(id).then((res) => {
      setData(res);
      // console.log(res);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={"md"}
              alt={datas.brand}
              src={datas.image}
              fit={"cover"}
              align={"center"}
              // w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}>
                {" "}
              </Heading>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={500}
                  fontSize={"4xl"}>
                  {datas.brand}
                </Text>
                <Text
                  align="left"
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"500"}>
                  {datas.title}
                  {"    "}
                  {datas.isNew && (
                    <Badge
                      rounded="full"
                      px="2"
                      // fontSize="0.8em"
                      size={"sm"}
                      colorScheme="blue">
                      New
                    </Badge>
                  )}{" "}
                </Text>
                <Text
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={500}
                  fontSize={"2xl"}>
                  MRP ₹ {datas.discountprice}
                  <Text
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontWeight={500}
                    textDecoration="line-through"
                    fontSize={"xl"}>
                    MRP ₹ {datas.price}
                  </Text>{" "}
                  <Box
                    pl={2}
                    fontSize="md"
                    fontWeight={"bolder"}
                    color={useColorModeValue("green.300", "green.200")}>
                    {datas.discountPercentage}
                  </Box>
                </Text>

                <Text>
                  <StarRating
                    rating={datas.ratings}
                    numReviews={datas.reviews}
                    size={"xl"}
                  />
                </Text>
                <Button
                  onClick={handleCart}
                  rounded={"none"}
                  w={"full"}
                  mt={8}
                  size={"xl"}
                  py={"7"}
                  bg={useColorModeValue("gray.900", "gray.50")}
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}>
                  {addcart === true ? "added in the cart" : "Add to cart"}
                </Button>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}>
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Brand Name :{" "}
                    </Text>{" "}
                    {datas.brand}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Title (name) :
                    </Text>{" "}
                    {datas.title}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Made for :{" "}
                    </Text>
                    {datas.gender === "male" ? (
                      <span>MEN/BOYS</span>
                    ) : datas.gender === "women" ? (
                      "WOMEN/GIRLS"
                    ) : (
                      "KIDS"
                    )}
                  </ListItem>
                </List>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}>
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{" "}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
}
