import { useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { useEffect } from "react";

function ChatBody({ chat }) {
  const aiStyle =
    "bg-white text-black bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";

  const parent = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="flex flex-col gap-4">
      {chat?.map((message, index) => {
        return (
          <div
            key={index}
            className={`max-w-[80%] self-end rounded-xl border border-[#999999] bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-3 text-white ${message.sender === "ai" && aiStyle}`}
          >
            <pre className=" whitespace-pre-wrap font-outfit">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}
      <div ref={bottomRef} className="h-3"></div>
    </div>
  );
}

export default ChatBody;
