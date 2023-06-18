import { Box, Heading, Checkbox, Stack, Select, useBreakpointValue } from '@chakra-ui/react';
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useEffect, ChangeEvent } from 'react';

interface PropType {
  handleGender: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCategory: (e: ChangeEvent<HTMLInputElement>) => void;
  gender: string[];
  category: string[];
  order: string;
  handleSorting: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SideBarFilter = ({ handleGender, handleCategory, gender, category, order, handleSorting }: PropType) => {
  const headingSize = useBreakpointValue({ base: "sm", sm: "md" });

  return (
    <Stack spacing={["1.5rem", "3rem"]}>
      <Box>
        <Heading as="h4" size={headingSize}>Sort By Gender</Heading>
        <Stack>
          <Checkbox value="male" isChecked={gender.includes("male")} onChange={handleGender}>Male</Checkbox>
          <Checkbox value="women" isChecked={gender.includes("women")} onChange={handleGender}>Female</Checkbox>
          <Checkbox value="kids" isChecked={gender.includes("kids")} onChange={handleGender}>Kids</Checkbox>
        </Stack>
      </Box>

      <Box>
        <Heading as="h4" size={headingSize}>Fiter By Product Category</Heading>
        <Stack>
          <Checkbox value="top_ware" isChecked={category.includes("top_ware")} onChange={handleCategory}>Top Ware</Checkbox>
          <Checkbox value="bottom_ware" isChecked={category.includes("bottom_ware")} onChange={handleCategory}>Bottom Ware</Checkbox>
          <Checkbox value="shoes" isChecked={category.includes("shoes")} onChange={handleCategory}>Shoes</Checkbox>
        </Stack>
      </Box>

      <Box>
        <Heading as="h4" size={headingSize}>Sort By Price</Heading>
        <Select value={order} onChange={handleSorting}>
          <option value=''>Sort by price</option>
          <option value='asc'>Low to High</option>
          <option value='desc'>High to Low</option>
        </Select>
      </Box>
    </Stack>
  )
}

export default SideBarFilter;

