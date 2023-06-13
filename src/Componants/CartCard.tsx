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

interface cardType {
  isNew: boolean;
  imageURL: string;
  name: string;
  price: number;
  rating: number;
  numReviews: number;
  id: number;
  assured: boolean;
  size: string[];
}

const CartCard = ({
  isNew,
  imageURL,
  name,
  price,
  rating,
  numReviews,
  assured,
  id,
  size,
}: cardType) => {
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

        <Image src={imageURL} alt={`Picture of ${name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {name}
            </Box>
            {assured && (
              <Tooltip
                label="Assured"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}>
                <chakra.a href={"#"} display={"flex"}>
                  <Icon as={MdGppGood} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Tooltip>
            )}
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <StarRating rating={rating} numReviews={numReviews} />
          </Flex>
          <Flex
            // justifyContent="space-around"
            // alignContent="center"
            alignItems="baseline">
            <Box
              fontSize="xl"
              fontWeight={"bold"}
              color={useColorModeValue("gray.800", "white")}>
              <Box
                as="span"
                color={"gray.600"}
                fontSize="xl"
                fontWeight={"bold"}>
                ₹{" "}
              </Box>
              {price.toFixed(2)}
            </Box>

            <Box
              pl={2}
              fontSize="lg"
              textDecoration="line-through"
              color={useColorModeValue("gray.500", "white")}>
              <Box
                as="span"
                color={useColorModeValue("gray.500", "white")}
                fontSize="lg"
                fontWeight={"bold"}>
                ₹{" "}
              </Box>
              {price.toFixed(2)}
            </Box>
          </Flex>
          <b>
            <Flex>
              Size :{" "}
              {size.map((el) => (
                <Text color={"gray.500"} pl={3}>
                  {el}
                </Text>
              ))}
            </Flex>
          </b>
        </Box>
        <Center p={8}>
          <Button w={"full"} maxW={"md"} colorScheme={"messenger"}>
            <Center>
              <Text>Wiew Product</Text>
            </Center>
          </Button>
        </Center>
      </Box>
    </Flex>
  );
};

export default CartCard;
