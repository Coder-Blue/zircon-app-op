/* eslint-disable react/prop-types */
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import NavHoverBox from "./NavHoverBox";

function NavItem({ icon, title, description, active, navSize, toWhere }) {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active && "#96DED1"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#96DED1" }}
          w={navSize == "large" && "100%"}
          as={NavLink}
          to={toWhere}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "#96DED1" : "gray.500"}
              />
              <Text ml={5} display={navSize == "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
        <MenuList py={0} border="none" w={200} h={200} ml={5}>
          <NavHoverBox title={title} icon={icon} description={description} />
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default NavItem;
