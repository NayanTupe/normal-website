import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import LeftText from "./LeftText";
import RightImage from "./RightImage";
import Question from "./Question";
import Logo from "./Logo";


function Home() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // Step counter for No button clicks

  // 🔥 TRACK FUNCTION
  const trackClick = async (action, e) => {
    try {
      await fetch("http://localhost:5000/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: action,
          location:
            e?.target?.innerText || e?.target?.id || e?.target?.className,
          pageUrl: window.location.href,
          coordinates: {
            x: e?.clientX || 0,
            y: e?.clientY || 0,
          },
        }),
      });

      console.log("Tracked:", action);
    } catch (err) {
      console.log("Tracking Error:", err);
    }
  };

  // ✅ Yes button handler
  const handleYes = (e) => {
    trackClick("YES_BUTTON", e);
    navigate("/yes");
  };

  // ✅ No button handler (click-based steps)
  const handleNo = (e) => {
    trackClick("NO_BUTTON", e);

    setStep((prev) => {
      const nextStep = prev + 1;

      // On third click, navigate to /yes after a short delay
      if (nextStep === 10) {
        setTimeout(() => navigate("/yes"), 1000); // delay to show final message
      }

      return nextStep > 10 ? 10 : nextStep; // cap step at 10
    });
  };

  return (
    <div className="hero">
      {/* <header>
        <h1>Moments Into Feelings</h1>
      </header> */}
      <Logo />

      <LeftText />
      <RightImage />

      {/* 💬 Dynamic Messages */}
      {step === 1 && <p className="fun-text">तुला खात्री आहे ना? 🥺</p>}

      {step === 2 && <p className="fun-text">एकदा अजून विचार कर ना... 💭</p>}

      {step === 3 && (
        <p className="fun-text">हं... मला वाटतं उत्तर YESच आहे 😌💖</p>
      )}

      {step === 4 && (
        <p className="fun-text">
          इतकं cute confusion नको ना... YES क्लिक कर 😊
        </p>
      )}

      {step === 5 && (
        <p className="fun-text">मी वाट बघतोय तुझ्या YES ची... ❤️</p>
      )}

      {step === 6 && (
        <p className="fun-text">
          थोडंसं हसून YES कर ना... खूप special आहेस तू ✨
        </p>
      )}

      {step === 7 && (
        <p className="fun-text">आता नाही म्हणायचं नाहीये... मला माहित आहे 😉</p>
      )}

      {step === 8 && (
        <p className="fun-text">चल ना... एक छोटंसं YES आणि सगळं perfect 💖</p>
      )}

      {step === 9 && (
        <p className="fun-text">तुझं YES माझ्यासाठी खूप important आहे 🥰</p>
      )}

      {step === 10 && (
        <p className="fun-text">Finally… मला माहित होतंच तू YES म्हणणार 😍💘</p>
      )}

      {/* ✅ Buttons */}
      <Question onYes={handleYes} onNo={handleNo} />

      <footer>
        <p>Created with feelings, not just code.</p>
      </footer>
    </div>
  );
}

function YesPage() {
  return (
    <div className="yes-container">
      {/* 🎵 Background Music */}
      <audio autoPlay loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      {/* 💖 Floating Hearts */}
      <div className="hearts">
        <span>💖</span>
        <span>💗</span>
        <span>💓</span>
        <span>💞</span>
      </div>

      {/* ✨ Animation Box */}
      <motion.div
        className="message-box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>I'm really happy you said YES 🥹💖</h1>

        {/* 🐻 Bear GIF */}
        <img src="/bear.gif" alt="cute bear" className="bear" />

        <p className="contact">
          Let’s make beautiful moments together 💕 <br />
          <strong>+91 9152110404</strong>
        </p>
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yes" element={<YesPage />} />
    </Routes>
  );
}

export default App;
