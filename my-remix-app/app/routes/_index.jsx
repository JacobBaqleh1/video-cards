import { useState } from "react";

export const meta = () => {
  return [
    { title: "FlashCards" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [userDeckList, setUserDeckList] = useState([]);

  const newDeck = () => {
    const newDeckName = prompt(
      "Give name to the new Deck",
      "Example: Algebra 1 "
    );
    if (newDeckName !== null) {
      setUserDeckList([...userDeckList, newDeckName]);
    }
  };

  return (
    <body className="flex flex-col">
      <header className="text-6xl">
        <p>Flash Card (with video!)</p>
      </header>
      {/* main menu section*/}
      <section className="border-4 border-red-300 flex flex-col justify-center items-center">
        <div className="flex flex-row justify-around">
          <p>Your Decks</p>
          <button onClick={newDeck}>Create New Deck</button>
        </div>
        {/* Deck List */}
        <div className="mt-8">
          {/* individual deck */}
          <div className="border-4 border-blue-200">
            <p>Deck One: Spanish Alphabet</p>
            <ul>
              {" "}
              {userDeckList.map((deck, index) => (
                <li key={index}>
                  <button>
                    <a href="/deckMenu">{deck}</a>
                  </button>
                  {/* add delete button and edit name button */}
                  <button>
                    <img className="w-3 h-3" src="trash.svg" alt="" />
                  </button>
                  <button>
                    <img className="w-3 h-3" src="marker.svg" alt="" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </body>
  );
}
