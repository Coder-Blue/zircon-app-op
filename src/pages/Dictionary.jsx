import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Tab from "../components/Dictionary/Tab";
import search_dict from "../assets/search_dict.png";
import Heading from "../components/Dictionary/Heading";
import Content from "../components/Dictionary/Content";

function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  const searchWord = async () => {
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word,
    );

    const data = await response.json();

    setResults(data[0]);
  };

  const heading = () => {
    const audio = results?.phonetics.find((phone) => phone.audio !== "")?.audio;
    return {
      audioUrl: audio,
      word: results?.word,
      phonetic: results?.phonetic,
    };
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
          <div className="relative">
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              onKeyDown={(e) => e.keyCode === 13 && searchWord()}
              className="w-full rounded-lg border-none bg-gray-100 px-3 py-4 font-outfit shadow-sm outline-none hover:bg-gray-300"
            />
            <button
              className="absolute inset-y-0 right-5 flex items-center rounded-lg px-3 py-4"
              onClick={searchWord}
            >
              <img src={search_dict} width={18} />
            </button>
          </div>
          {results?.meanings?.length > 0 && (
            <>
              <Heading {...heading()} />
              {results.meanings.map((content, index) => {
                return <Content {...content} key={index} />;
              })}
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Dictionary;
