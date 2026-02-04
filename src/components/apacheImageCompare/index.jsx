import { useRef, useState } from "react";
import "./ApacheImageCompare.css";

export default function ApacheImageCompare({ imgBefore, imgAfter }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = (clientY) => {
    const rect = containerRef.current.getBoundingClientRect();
    let y = ((clientY - rect.top) / rect.height) * 100;
    y = Math.max(0, Math.min(100, y));
    setPosition(y);
  };
  
  // Mouse
  const onMouseDown = (e) => {
    setDragging(true);
    updatePosition(e.clientY);
  };
  
  const onMouseMove = (e) => {
    if (dragging) updatePosition(e.clientY);
  };

  const onMouseUp = () => setDragging(false);

  // Touch (mobile)
  const onTouchStart = (e) => {
    setDragging(true);
    updatePosition(e.touches[0].clientY);
  };
  
  const onTouchMove = (e) => {
    if (dragging) updatePosition(e.touches[0].clientY);
  };
  const onTouchEnd = () => setDragging(false);

  return (
    <div className="apache-wrapper">
      <div className="apache-title">Vista frontal - trasera</div>

      <div
        ref={containerRef}
        className="apache-compare-container"
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={imgBefore}
          alt="Frontal"
          className="apache-image apache-base"
        />

        <div
          className="apache-image apache-overlay"
          style={{ height: `${position}%` }}
        >
          <img src={imgAfter} alt="Trasera" />
        </div>

        <div
          className="apache-slider"
          style={{ top: `${position}%` }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          <div className="apache-slider-button">↕</div>
        </div>
      </div>
    </div>
  );
}
