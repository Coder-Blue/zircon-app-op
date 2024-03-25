import { useUserAuth } from "../../api/UserAuthContext";
import {
  Flex,
  Avatar,
  Heading,
  Text,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import googleGemini from "../../assets/googleGemini.svg";
import { MdOutlineLogout } from "react-icons/md";

function Tab() {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const signOut = async (e) => {
    e.preventDefault();
    try {
      await logOut();
      navigate("/");
      toast({
        title: "Đăng xuất thành công",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (err) {
      toast({
        title: "Lỗi đăng xuất",
        description: err.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Flex
      h="81px"
      w="100%"
      align="center"
      className="font-outfit"
      p={5}
      marginTop="2.5vh"
      borderRadius="15px"
      justifyContent="space-between"
    >
      <Flex alignItems="flex-start" alignContent="center">
        <Avatar src={googleGemini} size="md" marginEnd={3} />
        <Flex flexDirection="column">
          <Heading
            size="lg"
            className="inline-block bg-gradient-to-r from-red-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Gemini
          </Heading>
          <Text size="sm">
            Sử dụng AI để hỗ trợ bạn, thông tin có thể thiếu tính chính xác, nên
            hãy cẩn thận.
          </Text>
        </Flex>
      </Flex>
      <IconButton
        aria-label="Đăng xuất"
        icon={<MdOutlineLogout />}
        onClick={signOut}
        width="50px"
        height="50px"
        variant="solid"
        rounded="md"
        margin="5px"
        background="gray.50"
      />
    </Flex>
  );
}

export default Tab;
