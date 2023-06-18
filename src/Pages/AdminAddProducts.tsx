import React, { useState,FormEvent } from 'react';
import Navbar from '../components/Navbar';
import { Heading, Input, Select, Radio, RadioGroup, HStack, Box, FormControl, FormLabel, Stack,Button,useToast } from '@chakra-ui/react';
import { addNewProductAdmin } from '../api/api';
import Footer from '../components/Footer';

export interface NewProductType {
    ratings: number;
    reviews: string;
    image: string;
    brand: string;
    title: string;
    size: string;
    discountprice: number;
    price: number;
    discountPercentage: string;
    isNew: boolean;
    assured: boolean;
    gender: string

}

const AdminAddProducts = () => {
    const [newProduct, setNewProduct] = useState<NewProductType>({
        "ratings": 0,
        "reviews": "",
        "image": "",
        "brand": "",
        "title": "",
        "gender": "",
        "size": "L",
        "discountprice": 0,
        "price": 0,
        "discountPercentage": "",
        "isNew": false,
        "assured": false
    })
    const toast = useToast()
    const formHandler = (e:FormEvent)=>{
            e.preventDefault();
            const tempValue = {...newProduct,discountPercentage:`(${Math.ceil(discountprice*100)/price}% OFF)`}
            setNewProduct(tempValue)
            addNewProductAdmin(tempValue)
            .then((req)=>{
                toast({ position: "top", title: 'Product has been added successfully', status: 'success', duration: 2000, isClosable: true, });
            })
            
       
    }
    const { ratings, reviews, image, brand, title, gender,  discountprice, price,  isNew } = newProduct
    return (
        <>
            <Navbar />
            <Box w="35%" m="3rem auto" p="2rem" boxShadow='rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;'>
                <Heading as="h3" mb="1rem" size="lg">Add Product</Heading>
                <form onSubmit={formHandler}>
                    <Stack spacing="2rem">
                        <FormControl><Input type='text' required border="2px solid #282828" placeholder="Enter the title (name):-" value={title} onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} /></FormControl>
                        <FormControl><Input type='text' required border="2px solid #282828" placeholder='Enter the image:-' value={image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} /></FormControl>
                        <FormControl><Input type='text' required border="2px solid #282828" placeholder="Enter product price" value={price == 0?"":price} onChange={(e) => setNewProduct({ ...newProduct, price: +e.target.value })} /></FormControl>
                        <FormControl><Input type='text' required border="2px solid #282828" placeholder="Enter the price after discount" value={discountprice == 0?"":discountprice} onChange={(e) => setNewProduct({ ...newProduct, discountprice: +e.target.value })} /></FormControl>
                        <FormControl><Input type='text' required border="2px solid #282828" placeholder="Product rating" value={ratings == 0?"":ratings} onChange={(e) => setNewProduct({ ...newProduct, ratings: +e.target.value })} /></FormControl>
                        <FormControl><Input type='text' required border="2px solid #282828" placeholder="Product review" value={reviews} onChange={(e) => setNewProduct({ ...newProduct, reviews: e.target.value })} /></FormControl>
                       

                        <Select border="2px solid #282828" value={brand} onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}>
                            <option value="">Select Brand</option>
                            <option value="Puma">Puma</option>
                            <option value="HIGHLANDER">HIGHLANDER</option>
                            <option value="U.S. Polo Assn. Kids">U.S. Polo Assn. Kids</option>
                            <option value="VASTRAMAY">VASTRAMAY</option>
                        </Select>

                        <Select value={gender} border="2px solid #282828" onChange={(e) => setNewProduct({ ...newProduct, gender: e.target.value })}>
                            <option value="">Select Gender</option>
                            <option value="male">Men</option>
                            <option value="women">Women</option>
                            <option value="kids">Kids</option>

                        </Select>

                        <RadioGroup value={isNew === true ? "true" : "false"} onChange={(e) => setNewProduct({ ...newProduct, isNew: e === "true" ? true : false })}>
                            <HStack spacing='24px'>
                                <FormLabel as='legend'>Is Product New?</FormLabel>
                                <Radio value="true">True</Radio>
                                <Radio value="false">False</Radio>

                            </HStack>
                        </RadioGroup>

                        <Button bg="#fa6f1e" color="white" _hover={{color:'white',bg:"#fa6f1e"}} type="submit">Add Product</Button>

                    </Stack>


                </form>
            </Box>
            <Footer/>


        </>
    );
}

export default AdminAddProducts;
