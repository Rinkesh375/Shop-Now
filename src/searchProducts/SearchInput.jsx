import React,{ useState} from 'react';
import { SearchIcon } from "@chakra-ui/icons"
import { FormControl, Icon } from '@chakra-ui/react';
import { GridItem,Flex,Input,Box,Button } from '@chakra-ui/react';
import {  useDispatch, useSelector} from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { SEARCH_INPUT_TEXT } from '../../redux/searchReducer/actionTypes';




const SearchInput = () => {

    const [searchInput,setSearchInput]  = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    const searchHandler = (e)=>{
            e.preventDefault();
     
            dispatch({type:SEARCH_INPUT_TEXT,payload:searchInput})
            searchInput && navigate("/result")
    }
 

    return (
        <>
            <GridItem ><Flex borderBottom="2px solid #60f" justify="space-between" px="1rem" align="center">
                <form onSubmit={searchHandler}><FormControl bg="white"  isRequired><Input  pr="1rem" mr="1rem" variant="none" type='text' placeholder="What are you looking for?" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} required /></FormControl></form>
                 <Box _hover={{ cursor: "pointer" }}> <Icon onClick={searchHandler} as={SearchIcon} /></Box> </Flex></GridItem>
        </>
    );
}

export default SearchInput;
