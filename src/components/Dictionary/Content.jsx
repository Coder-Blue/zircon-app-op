function Content({ partOfSpeech, definitions, synonyms, antonyms }) {
  return (
    <div className="my-3">
      <div className="flex flex-row items-center font-serif text-lg font-bold">
        <p>{partOfSpeech}</p>
        <hr className="ml-10 w-full" />
      </div>
      <p className="mt-3 font-outfit font-semibold text-gray-800">Ý nghĩa:</p>
      <ul className="list-disc space-y-2 px-10 font-outfit text-sm font-normal text-gray-800 ">
        {definitions.map((def, index) => (
          <li key={index}>{def.definition}</li>
        ))}
      </ul>

      {synonyms.length > 0 && (
        <p className="my-2 font-outfit text-sm font-bold text-gray-800">
          Từ đồng nghĩa:{" "}
          {synonyms.map((synonym, index) => (
            <span
              key={index}
              className="mx-1 font-outfit font-normal text-blue-500"
            >
              {synonym}
            </span>
          ))}
        </p>
      )}

      {antonyms.length > 0 && (
        <p className="my-2 font-outfit text-sm font-bold text-gray-800">
          Từ trái nghĩa:{" "}
          {antonyms.map((antonym, index) => (
            <span
              key={index}
              className="mx-1 font-outfit font-normal text-red-500"
            >
              {antonym}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

export default Content;
