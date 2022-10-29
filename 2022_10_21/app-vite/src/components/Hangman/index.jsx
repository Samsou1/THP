import React, { useEffect, useState } from "react";

const Hangman = () => {
  const [targetWord, setTargetWord] = useState("");
  const [lifes, setLifes] = useState(7);
  const [letters, setLetters] = useState([]);
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then(response => response.json())
      .then(result => {
        setTargetWord(result[0].toUpperCase());
        setCurrentWord("_".repeat(result[0].length));
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    let word = targetWord;
    const mappedWord = word.split("").map(letter => letters.includes(letter) ? letter : "_").join("");

    if (mappedWord === currentWord) setLifes(lifes - 1);

    setCurrentWord(mappedWord);
  }, [letters]);

  const handleChange = (event) => {
    const key = event.nativeEvent.data.toUpperCase();

    setLetters(oldLetters => [...oldLetters, key]);
  }

  if (lifes === 0) {
    return <h3>Game Over ! Le mot était {targetWord} !</h3>
  }

  if (currentWord === targetWord) {
    return <h3>Bravo ! C'est gagné !</h3>
  }

  return (
    <div className="hangman">
      <input type="text" value="" onChange={handleChange} />
      <p>{currentWord}</p>
      <p>Vies restantes: {lifes}</p>
      <p>Lettres déjà proposées: {letters.join(", ")}</p>
    </div>
  );
}

export default Hangman;