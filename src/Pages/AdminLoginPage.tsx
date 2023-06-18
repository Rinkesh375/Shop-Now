import React from 'react';

import { Grid, Flex } from '@chakra-ui/react';
import AdminPageLoginLeft from '../components/AdminPageLoginLeft';
import AdminLoginRight from '../components/AdminLoginRight';
import Navbar from '../Componants/Navbar';
// import AdminPageLoginLeft from 'src/components/AdminPageLoginLeft';
// import AdminLoginRight from 'src/components/AdminLoginRight';
// import Navbar from 'src/components/Navbar';

const AdminLoginPage = () => {
  return (
    <>
   
      <Flex h="100vh" w="80%" m="auto" alignItems="center" >
        <Grid w="90%" gridTemplateColumns="repeat(2,1fr)" >
          <AdminPageLoginLeft />
          <AdminLoginRight />
        </Grid>

      </Flex>
    </>
  );
}

export default AdminLoginPage;
