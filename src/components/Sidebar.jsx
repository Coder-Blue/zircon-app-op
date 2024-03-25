import { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { TbMessage2Code } from "react-icons/tb";
import { LuBookMarked } from "react-icons/lu";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useUserAuth } from "../api/UserAuthContext";
import NavItem from "./NavItem";

function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  const { currentUser } = useUserAuth();

  return (
    <Flex
      className="font-outfit font-semibold"
      pos="sticky"
      left="5"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      marginEnd={7}
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        h="81px"
        as="nav"
        flex={1}
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<IoMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem
          navSize={navSize}
          icon={TbMessage2Code}
          title="Home"
          description="Dùng để giao tiếp với Gemini"
          toWhere="/home"
        />
        <NavItem
          navSize={navSize}
          icon={LuBookMarked}
          title="Từ điển Anh"
          description="Dùng để tra cứu từ tiếng Anh"
          toWhere="/dictionary"
        />
        <NavItem
          navSize={navSize}
          icon={IoMdInformationCircleOutline}
          title="Thông tin"
          description="Dùng để tra cứu thông tin tác giả của phần mềm"
          toWhere="/about"
        />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4}>
          <Avatar size="md" src={currentUser.photoURL} />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Flex direction="column" justifyContent="flex-end">
              <Heading as="h3" size="sm">
                <span style={{ fontWeight: "bold" }}>
                  {currentUser.displayName ? currentUser.displayName : "User"}
                </span>
              </Heading>
              <Text color="gray">Người dùng</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
