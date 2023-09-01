import React, { useState } from 'react';
import SearchProductsList from './SearchProductsList';
import SideBar from './SideBar';
import NoItem from "../../Images/noItemFoundIage.png"
import { Center, Container, Grid, GridItem, Box, Image, Heading } from '@chakra-ui/react';
import Pagination from '../pagination/Pagination';
import HelpAssistant from '../../HelpAssistant/HelpAssistant';
import Footer from '../../Footer/Footer';
import { useSelector } from 'react-redux';





const SearchProductResult = () => {
  const {searchArr} = useSelector(state=>state.searchReducer)
  const [page, setPage] = useState(1)
  const handlePages = (page) => {
    setPage(page)
  }
  return (
    <>

      <Grid templateColumns="1fr 4fr" w="90%" m="3rem auto" gap="2">
        <GridItem><SideBar page={page} /></GridItem>
        <GridItem><SearchProductsList /></GridItem>
      </Grid>
      {searchArr.length?<Center><Pagination page={page} handlePages={handlePages} /></Center>:null}
      <HelpAssistant />
      <Footer w="95%" m="2rem auto" />


    </>

  );
}

export default SearchProductResult;
