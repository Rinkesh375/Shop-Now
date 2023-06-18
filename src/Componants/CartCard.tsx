import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Center,
  Button,
  Text,
} from "@chakra-ui/react";
import { MdGppGood } from "react-icons/md";
import StarRating from "./StarRating";
import { ProductDatatype } from "../type";
import { Link } from "react-router-dom";

const CartCard = ({
  ratings,
  reviews,
  image,
  brand,
  title,
  size,
  discountprice,
  price,
  discountPercentage,
  id,
  isNew,
  assured,
  gender,
}: ProductDatatype) => {
  return (
    <Flex>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image src={image} alt={`Picture of ${title}`} roundedTop="lg" />

        <Box p="4">
          <Box display="flex" alignItems="center">
            {isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
            {assured && (
              <Tooltip
                label="Assured"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}>
                <chakra.text pl={2} display={"flex"}>
                  <Icon as={MdGppGood} h={7} w={7} alignSelf={"center"} />
                </chakra.text>
              </Tooltip>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {brand}
            </Box>
          </Flex>
          <Box
            fontSize="lg"
            fontWeight="semibold"
            as="h4"
            color={"gray.500"}
            lineHeight="tight"
            isTruncated>
            {title}
          </Box>

          <Flex justifyContent="space-between" alignContent="center">
            <StarRating rating={ratings} numReviews={reviews} />
          </Flex>
          <Flex alignItems="baseline">
            <Box
              fontSize="xl"
              fontWeight={"bold"}
              color={useColorModeValue("gray.800", "white")}>
              ₹ {discountprice}
            </Box>

            <Box
              pl={2}
              fontSize="md"
              textDecoration="line-through"
              color={useColorModeValue("gray.500", "white")}>
              ₹ {price}
            </Box>

            <Box
              pl={2}
              fontSize="md"
              fontWeight={"bolder"}
              color={useColorModeValue("green.300", "green.200")}>
              {discountPercentage}
            </Box>
          </Flex>
          <b>
            <Flex>
              Size :{" "}
              <Text color={"gray.500"} pl={3}>
                {size}
              </Text>
            </Flex>
          </b>
        </Box>
          <Link to={`/products/${id}`}>
        <Center p={2}>
            <Button w={"full"} maxW={"md"} colorScheme={"messenger"}>
              <Center>
                <Text>Wiew Product</Text>
              </Center>
            </Button>
        </Center>
          </Link>
      </Box>
    </Flex>
  );
};

export default CartCard;
