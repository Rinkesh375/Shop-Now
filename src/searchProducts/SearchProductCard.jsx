import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import {
    HStack,
    Heading,
    Stack,
    Card,
    CardBody,
    Image,
    Text,
    Divider,
    GridItem,

} from "@chakra-ui/react"


const SearchProductCard = ({ id, image, name, price, rating }) => {
    return (
        <Link to={`/productDetails/${id}`}>
            <GridItem p="2rem" style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}>
                <Card >
                    <CardBody>
                        <Image
                            src={image}
                            alt={name}
                            borderRadius='lg'
                            h="350px"
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='sm'>{name.substring(0, 60)}...</Heading>
                            <HStack>
                                <Text color='blue.600' fontSize='2xl'>&#8377; {price}</Text> <Heading as="h6" size="xxl" textDecoration="line-through">&#8377; {price + 199}</Heading>
                            </HStack>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <Stack >
                        <HStack ><Heading as="h4" size="md">Rating -</Heading><Text> {rating}</Text>{
                            new Array(Math.floor(rating)).fill(0)?.map((ele, index) => <AiFillStar key={index} />)
                        } </HStack>

                    </Stack>
                </Card>
            </GridItem>
        </Link>

    );
}

export default SearchProductCard;
