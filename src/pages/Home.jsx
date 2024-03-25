import { Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Tab from "../components/Home/Tab";
import ChatBody from "../components/Home/ChatBody";
import ChatInput from "../components/Home/ChatInput";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { fetchResponse } from "../api/geminiFetch";
import Markdown from "react-markdown";

function Home() {
  const [chat, setChat] = useState([]);

  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat);
    },
    onSuccess: (data) =>
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: <Markdown>{data.message}</Markdown> },
      ]),
  });

  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate();
  };

  return (
    <Flex h="100vh">
      <Sidebar />
      <Flex flex={1} direction="column">
        <Tab />
        <Flex
          flex={1}
          direction="column"
          pt={4}
          mx={5}
          overflowX="scroll"
          sx={{ scrollbarWidth: "none" }}
        >
          <ChatBody chat={chat} />
        </Flex>
        <div className="w-full min-w-[20rem] max-w-4xl self-center px-4 py-4">
          <ChatInput sendMessage={sendMessage} loading={mutation.isLoading} />
        </div>
      </Flex>
    </Flex>
  );
}

export default Home;
