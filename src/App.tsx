import React { useState } from "react";
import words from "./wordsList.json";

export default function App() {
  const [wordToGuess, setWordToGuess] = useState(() => { return words[Math.floor(Math.random() * words.length)]
});
const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

return <div 
style={{
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  margin: "auto",
  alignItems: "center"
}}
></div>

}