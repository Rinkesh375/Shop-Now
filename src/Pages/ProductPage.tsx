import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Checkbox,
  Stack,
  Center,
  Divider,
  Badge,
  Radio,
  RadioGroup,
  Breadcrumb,
  CheckboxGroup,
  BreadcrumbLink,
  BreadcrumbItem,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import { ChevronRightIcon } from "@chakra-ui/icons";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCartegory = searchParams.getAll("category");
  const inintialGender = searchParams.getAll("gender");
  const [category, setCategory] = React.useState(initialCartegory || []);
  const [gender, setGender] = React.useState(inintialGender || []);
  const inintialsort = searchParams.get("order");
  let [order, setOrder] = React.useState(inintialsort || "");

  const handleFilterChange = (value: string[]) => {
    setCategory(value);
  };
  const handleGender = (value: string[]) => {
    setGender(value);
  };
  const handleOrder = (value: string) => {
    setOrder(value);
  };

  React.useEffect(() => {
    let params: { category?: string[]; gender?: string[]; order?: string } = {};
    if (category.length) params.category = category;
    if (gender.length) params.gender = gender;
    if (order.length) params.order = order;
    setSearchParams(params);
  }, [category, gender, order]);

  return (
    <>
      <Navbar />
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          handleFilterChange={handleFilterChange}
          category={category}
          gender={gender}
          handleGender={handleGender}
          order={order}
          handleOrder={handleOrder}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <SidebarContent
              onClose={onClose}
              handleFilterChange={handleFilterChange}
              category={category}
              gender={gender}
              handleGender={handleGender}
              order={order}
              handleOrder={handleOrder}
            />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
  handleFilterChange: (value: string[]) => void;
  category: string[];
  handleGender: (value: string[]) => void;
  gender: string[];
  handleOrder: (value: string) => void;
  order: string;
}

const SidebarContent = ({
  category,
  gender,
  order,
  handleFilterChange,
  handleOrder,
  handleGender,
  onClose,
  ...rest
}: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="md" fontFamily="monospace">
          <HomeBreadcrumb />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <Center>
        <Stack pl={3} direction={"column"}>
          <Text>
            <b>Filter By Type</b>
          </Text>
          <CheckboxGroup value={category} onChange={handleFilterChange}>
            <Checkbox value={"top_ware"}>Top ware</Checkbox>
            <Checkbox value={"bottom_ware"}>Bottom ware</Checkbox>
            <Checkbox value={"shoes"}>Shoes</Checkbox>
          </CheckboxGroup>
          <Divider colorScheme="blackAlpha" />
          <Text>
            <b>Filter By Gender</b>
          </Text>
          <CheckboxGroup value={gender} onChange={handleGender}>
            <Checkbox value={"male"}>Male</Checkbox>
            <Checkbox value={"women"}>Women</Checkbox>
            <Checkbox value={"kids"}>Kids</Checkbox>
          </CheckboxGroup>
          <Text>
            <b>Sort By Price</b>
          </Text>
          <RadioGroup onChange={handleOrder} value={order}>
            <Stack>
              <Radio value="asc" defaultChecked={order === "asc"}>
                Assending
              </Radio>
              <Radio value="desc" defaultChecked={order === "desc"}>
                Dessending
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>
      </Center>
    </Box>
  );
};

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
// }
/*const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
 */
interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="xx-small" ml="8" fontFamily="monospace">
        <HomeBreadcrumb />
      </Text>
    </Flex>
  );
};

const HomeBreadcrumb = () => {
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          <Badge>Home</Badge>
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          <Badge>Product</Badge>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
