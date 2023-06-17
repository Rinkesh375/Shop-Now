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
// import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import React from "react";
import { ProductDatatype } from "../type";
import StarRating from "./StarRating";
// import { useParams } from "react-router-dom";

export default function SingleCard() {
  const [data] = React.useState<ProductDatatype>({
    type: "male",
    category: "top_ware",
    ratings: 4,
    reviews: "20.7k",
    image:
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg",
    brand: "Huetrap",
    title: "Typography Print T-shirt",
    size: "S",
    discountprice: 318,
    price: 1099,
    discountPercentage: "(71% OFF)",
    gender: "male",
    id: 3,
    isNew: true,
    assured: true,
  });
  //  const { id } = useParams();
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={"md"}
            alt={data.brand}
            src={data.image}
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
            <VStack
              spacing={{ base: 4, sm: 6 }}
              
              >
                           <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={500}
                fontSize={"4xl"}>
                {data.brand}</Text>
              <Text
                align="left"
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"500"}>
                {data.title}
                {"    "}
                {data.isNew && (
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
                MRP ₹ {data.discountprice}
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontWeight={500}
                  textDecoration="line-through"
                  fontSize={"xl"}>
                  MRP ₹ {data.price}
                </Text>{" "}
                <Box
                  pl={2}
                  fontSize="md"
                  fontWeight={"bolder"}
                  color={useColorModeValue("green.300", "green.200")}>
                  {data.discountPercentage}
                </Box>
              </Text>

              <Text>
                <StarRating
                  rating={data.ratings}
                  numReviews={data.reviews}
                  size={"xl"}
                />
              </Text>
              <Button
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
                Add to cart
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
                {/* <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Assure Product :{" "}
                    {data.assured && (
                      <Tooltip
                        label="Assured"
                        bg="white"
                        placement={"top"}
                        color={"gray.800"}
                        fontSize={"1.2em"}>
                        <chakra.text pl={2} display={"flex"}>
                          <Icon
                            as={MdGppGood}
                            h={7}
                            w={7}
                            alignSelf={"center"}
                          />
                        </chakra.text>
                      </Tooltip>
                    )}
                  </Text>
                </ListItem> */}
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Brand Name :{" "}
                  </Text>{" "}
                  {data.brand}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Title (name) :
                  </Text>{" "}
                  {data.title}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Made for :{" "}
                  </Text>
                  {data.gender === "male" ? (
                    <span>MEN/BOYS</span>
                  ) : data.gender === "women" ? (
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

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
