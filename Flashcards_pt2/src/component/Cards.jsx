import React, { useState } from 'react';

function Cards() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isGuessCorrect, setIsGuessCorrect] = useState(true);
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [score, setScore] = useState(0);
  const [isGuessSubmitted, setIsGuessSubmitted] = useState(false);

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

  const handlePrevCard = () => {
    setIndex(prevIndex => Math.max(prevIndex - 1, 0));
    setGuess('');
    setIsGuessSubmitted(false);
    setIsGuessCorrect(true);
  };

  const handleNextCard = () => {
    setIndex(prevIndex => Math.min(prevIndex + 1, CONTENT.length - 1));
    setGuess('');
    setIsGuessSubmitted(false);
    setIsGuessCorrect(true);
  };

  const flipCard = () => {
    if (isGuessSubmitted) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
    setIsGuessCorrect(true);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    if (guess.toLowerCase() === CONTENT[index].answer.toLowerCase()) {
      setScore(score + 1);
    }else{
      setIsGuessCorrect(false);
    }
    setGuess('');
    setIsGuessSubmitted(true);
  };

  return (
    <div className='Cards'>
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`} onClick={flipCard}>
        <div className="Cards-front" onClick={flipCard}>
          {CONTENT[index].question}
        </div>
        <div className="Cards-back" onClick={flipCard}>
          {CONTENT[index].answer}
        </div>
      </div>
      <form onSubmit={handleGuessSubmit}>
        <input
          className={`submission ${isGuessCorrect ? "" : "wrong"}`}
          type="text"
          value={guess}
          onChange={handleGuessChange}
          placeholder="Type your guess..."
        />
        <button type="submit">Submit Guess</button>
      </form>
      <button className = "arrow-buttons" onClick={handlePrevCard} disabled={index === 0}>←</button>
      <button className = "arrow-buttons" onClick={handleNextCard} disabled={index === CONTENT.length - 1}>→</button>
      <div>Score: {score}</div>
    </div>
  );
}

export default Cards;
