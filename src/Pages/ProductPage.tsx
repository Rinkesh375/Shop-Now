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
} from "@chakra-ui/react";

import { FiMenu } from "react-icons/fi";

import { Breadcrumb } from "@chakra-ui/react";
import { BreadcrumbItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BreadcrumbLink } from "@chakra-ui/react";

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
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
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
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
          <Checkbox>Top ware</Checkbox>
          <Checkbox>Bottom ware</Checkbox>
          <Checkbox>Shoes</Checkbox>
          <Divider colorScheme="blackAlpha" />
          <Text>
            <b>Filter By Gender</b>
          </Text>
          <Checkbox>Top ware</Checkbox>
          <Checkbox>Bottom ware</Checkbox>
          <Checkbox>Shoes</Checkbox>
          <Text>
            <b>Sort By Price</b>
          </Text>
          <RadioGroup>
            <Stack>
              <Radio value="1">Assending</Radio>
              <Radio value="2">Dessending</Radio>
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
