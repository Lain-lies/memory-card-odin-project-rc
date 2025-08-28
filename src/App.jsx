import { useState } from "react";
import { Container } from "./components/Container";

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  if (score > best) {
    setBest(score);
  }

  return (
    <>
      <header>
        <h1>Pokemon Memory Game</h1>
        <div class="scoreboard">
          <p>Score: {score}</p>
          <p>Best: {best}</p>
        </div>
      </header>
      <Container updateScore={setScore} />
    </>
  );
}

export default App;
