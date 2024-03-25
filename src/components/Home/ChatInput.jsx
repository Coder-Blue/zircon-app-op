import send from "../../assets/send.svg";
import { useState } from "react";
import loader from "../../assets/loader.gif";

function ChatInput({ sendMessage, loading }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };

  return (
    <div className="relative max-h-40 w-full overflow-auto rounded-xl border border-gray-200 bg-gray-500 bg-opacity-5 px-4 py-4 shadow-2xl">
      {loading ? (
        <img src={loader} className="m-auto w-8" />
      ) : (
        <>
          <textarea
            row={1}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) =>
              e.keyCode === 13 && e.shiftKey === false && handleSubmit()
            }
            type="text"
            className="w-11/12 border-0 bg-transparent outline-none"
          />
          <img
            src={send}
            width={23}
            alt="send-button"
            onClick={handleSubmit}
            className="absolute right-3 top-4 font-outfit duration-100 ease-in hover:scale-125 hover:cursor-pointer"
          />
        </>
      )}
    </div>
  );
}

export default ChatInput;
