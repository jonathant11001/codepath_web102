import React, { useState } from 'react';

function Cards() {
  const [isFlipped, setIsFlipped] = useState(false);

  const [index, setIndex] = useState(0);

  const CONTENT = [
    {
      id: 1,
      question: "🐲🔥💫🐉🗡️",
      answer: 'Fairy Tail'
    },
    {
      id: 2,
      question: "🤠🔫🎤🎵🌃",
      answer: 'Cowboy Bebop'
    },
    {
      id: 3,
      question: "🐉🔥💥💪👊",
      answer: 'Dragon Ball'
    },
    {
      id: 4,
      question: "🍜👹🍥🍃🍃",
      answer: 'Naruto'
    },
    {
      id: 5,
      question: "🤖👦🤖🌃🌆",
      answer: 'Astro Boy'
    },
    {
      id: 6,
      question: "🎭🎩🐇🔪💼",
      answer: 'Black Butler'
    },
    {
      id: 7,
      question: "🐙🌊🚢⚔️👒",
      answer: 'One Piece'
    },
    {
      id: 8,
      question: "🏫🍎📚🧑‍🏫✨",
      answer: 'My Hero Academia'
    },
    {
      id: 9,
      question: "🧙‍♂️📚🐉🔥🏰",
      answer: 'Magi: The Labyrinth of Magic'
    },
    {
      id: 10,
      question: "🍽️🍙🥋👊🏻🍜",
      answer: 'Food Wars! Shokugeki no Soma'
    },
  ];

  const handleNextCard = () => {
    setIndex((prevIndex) => (prevIndex + 1) % CONTENT.length);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='Cards'>
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`} onClick={flipCard}>
        <div class="Cards-front" onClick={flipCard}>
          {CONTENT[index].question}
        </div>
        <div class="Cards-back" onClick={flipCard}>
          {CONTENT[index].answer}
        </div>
      </div>
      <button onClick={handleNextCard}>Next Card</button>
    </div>
  );
}

export default Cards;