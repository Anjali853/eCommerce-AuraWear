
import { useEffect, useState } from "react";
import "./IntroAnimation.css";

const IntroAnimation = ({ onComplete }) => {
  const [joining, setJoining] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const joinTimer = setTimeout(() => {
      setJoining(true);
    }, 1200);

    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 3300);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(joinTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`aura-intro ${exiting ? "intro-exit" : ""}`}>
      <div
        className={`intro-panel intro-left ${
          joining ? "panel-joined" : ""
        }`}
      />

      <div
        className={`intro-panel intro-right ${
          joining ? "panel-joined" : ""
        }`}
      />

      <div className={`intro-brand ${joining ? "brand-visible" : ""}`}>
        <h1>
          AURA<span>WEAR</span>
        </h1>
        <p>YOUR VIBE. YOUR RULES.</p>
      </div>
    </div>
  );
};

export default IntroAnimation;
