import { Box,  Heading, Checkbox,  Stack, HStack, Select } from '@chakra-ui/react';
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import {  useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchProduct } from '../../redux/searchReducer/action';




const SideBar = ({page}) => {
    const [searchParam, setSearchParam] = useSearchParams();
    const searchText = useSelector(state => state.searchReducer.searchText) || searchParam.get("query");
    const dispatch = useDispatch();
    const [gender, setGender] = useState(searchParam.getAll("gender") || []);
    const [rating, setRating] = useState(searchParam.getAll("rating") || []);
    const [order, setOrder] = useState(searchParam.get("order") || "")
  

    const handleGender = (e) => {
        const { value } = e.target;
        let tempArr = [...gender];
        if (tempArr.includes(value)) tempArr = tempArr.filter(ele => ele !== value)
        else tempArr.push(value);
        setGender(tempArr)
    }

    const handleRating = (e) => {
        const { value } = e.target;
        let tempArr = [...rating];
        if (tempArr.includes(value)) tempArr = tempArr.filter(ele => ele !== value)
        else tempArr.push(value);
        setRating(tempArr)
    }
    const handleSorting = (e) => {
            setOrder(e.target.value)
    }

    let  queriesObject = {
        params: {
          
            q: searchText,
            gender,
            rating,
            _page:page,
            _limit:9,
            _order: order || null,
            _sort: order && "price"
        }
    }
    useEffect(() => {
        let searchValue = { query: searchText, gender, rating };
        order && (searchValue.order = order);
        setSearchParam(searchValue)
        dispatch(searchProduct(dispatch, queriesObject))
    }, [searchText, gender, rating, order,page]);
    return (
        <Stack spacing="3rem">
            <Box>
                <Heading as="h4" size="md">Sort By Gender</Heading>
                <Stack>
                    <Checkbox value="male" isChecked={gender.includes("male")} onChange={handleGender}>Male</Checkbox>
                    <Checkbox value="female" isChecked={gender.includes("female")} onChange={handleGender}>Female</Checkbox>
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
                <Select value={order} onChange={handleSorting}>
                    <option value=''>Sort by price</option>
                    <option value='asc'>Low to High</option>
                    <option value='desc'>High to Low</option>
                </Select>
            </Box>
           

        </Stack>

    )
}

export default SideBar
