import { Box,  Heading, Checkbox,  Stack, HStack, Select } from '@chakra-ui/react';
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import {  useSearchParams } from 'react-router-dom';
import { useEffect, useState,ChangeEvent,ChangeEventHandler } from 'react';

interface PropType{
  handleGender:(e:ChangeEvent<HTMLInputElement>)=>void;
  handleRating:(e:ChangeEvent<HTMLInputElement>)=>void;
  gender:string[];
  rating:string[];
  order:string;
  
}




const SideBarFilter = ({handleGender,handleRating}:PropType) => {
    const [searchParam, setSearchParam] = useSearchParams();
    // const searchText = useSelector(state => state.searchReducer.searchText) || searchParam.get("query");
    const dispatch = useDispatch();
  
  

 


    // const handleSorting = (e:ChangeEventHandler) => {
    //         // setOrder(e.target.value)
    // }

  
    useEffect(() => {
        let searchValue = {   gender, rating };
        // order && (searchValue.order = order);
        setSearchParam(searchValue)
        // dispatch(searchProduct(dispatch, queriesObject))
    }, [ gender, rating, order]);
    return (
        <Stack spacing="3rem">
            <Box>
                <Heading as="h4" size="md">Sort By Gender</Heading>
                <Stack>
                    <Checkbox value="male" isChecked={gender.includes("male")} onChange={handleGender}>Male</Checkbox>
                    <Checkbox value="women" isChecked={gender.includes("women")} onChange={handleGender}>Female</Checkbox>
                    <Checkbox value="kids" isChecked={gender.includes("kids")} onChange={handleGender}>Kids</Checkbox>
                </Stack>

            </Box>

            <Box>
                <Heading as="h4" size="md">Rating</Heading>
                <Stack>
                    <Checkbox value="1" isChecked={rating.includes("1")} onChange={handleRating}><AiFillStar /></Checkbox>
                    <Checkbox value="2" isChecked={rating.includes("2")} onChange={handleRating}> <HStack><AiFillStar /> <AiFillStar /></HStack></Checkbox>
                    <Checkbox value="3" isChecked={rating.includes("3")} onChange={handleRating}><HStack><AiFillStar /> <AiFillStar /> <AiFillStar /></HStack></Checkbox>
                    <Checkbox value="4" isChecked={rating.includes("4")} onChange={handleRating}><HStack><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></HStack></Checkbox>
                    <Checkbox value="5" isChecked={rating.includes("5")} onChange={handleRating}><HStack><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></HStack></Checkbox>

                </Stack>

            </Box>
            <Box>
                <Heading as="h4" size="md">Sort By Price</Heading>
                <Select value={order} >
                    <option value=''>Sort by price</option>
                    <option value='asc'>Low to High</option>
                    <option value='desc'>High to Low</option>
                </Select>
            </Box>
           

        </Stack>

    )
}

export default SideBarFilter;