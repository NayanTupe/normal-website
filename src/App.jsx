import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import LeftText from "./LeftText";
import RightImage from "./RightImage";
import Question from "./Question";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <header>
        <h1>Moments Into Feelings</h1>
      </header>

      <LeftText />
      <RightImage />

      <Question
        onYes={() => navigate("/yes")}
        onNo={() => navigate("/no")}
      />

      <footer>
        <p>Created with feelings, not just code.</p>
      </footer>
    </div>
  );
}

function YesPage() {
  return (
    <div className="next-page">
      <div className="message-box">
        <h1>I’m really happy you’d like that… 😊</h1>

        <p className="contact">
          You can reach me here: <br />
          <strong>+91 9152110404</strong>
        </p>
      </div>
    </div>
  );
}

function NoPage() {
  return (
    <div className="next-page">
      <div className="message-box">
        <h1>🙂 It’s okay…</h1>
        <p>Maybe someday things will feel right.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yes" element={<YesPage />} />
      <Route path="/no" element={<NoPage />} />
    </Routes>
  );
}

export default App;