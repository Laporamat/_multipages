import React, { useState, useEffect, useRef } from 'react';
import "./Animation.css";
import footballImage from './Football.jpg';
import volleyballImage from './imagesvolleyball.jpg';
import personImage from './person.jpg';
import gutImage from './gut.jpg';
import logoImage from './logo.jpg';
import lolImage from './lol.jpg';

function Animation() {
  const [running, setRunning] = useState(false);
  const [x1, setX1] = useState(0);
  const [y1, setY1] = useState(0);
  const [rotation1, setRotation1] = useState(15);
  const [backgroundImage, setBackgroundImage] = useState("none");
  const [animationFrameId, setAnimationFrameId] = useState(null); // สร้าง state สำหรับเก็บ ID ของ animation frame

  const ball1Ref = useRef(null);
  const vx = 5;
  const vy = 5;
  const rotationSpeed = 15;
  const fieldWidth = 1000;
  const fieldHeight = 650;
  const ballDiameter = 80;
  const maxLeft = fieldWidth - ballDiameter;
  const maxTop = fieldHeight - ballDiameter;

  const [goRight1, setGoRight1] = useState(true);
  const [goDown1, setGoDown1] = useState(true);

  const toggleRun = () => {
    setRunning(!running);
  };
  const resetBall = () => {
    console.log("Reset ball called");
    
    // ยกเลิก animation frame ถ้ามีการทำงานอยู่
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      setAnimationFrameId(null);
    }
    
    // รีเซ็ตค่า state กลับไปที่ตำแหน่งเริ่มต้น
    setX1(0);
    setY1(0);
    setRotation1(15);
    setGoRight1(true);
    setGoDown1(true);
    
    // เริ่มการเคลื่อนไหวใหม่
    setRunning(true);
  };
  
  

  useEffect(() => {
    if (running) {
      const id = requestAnimationFrame(process);
      setAnimationFrameId(id); // เก็บ ID ของ animation frame
    }
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [running, x1, y1, goRight1, goDown1, animationFrameId]);

  const process = () => {
    let newX1 = x1;
    let newY1 = y1;
    let newRotation1 = rotation1 + rotationSpeed;
    let newGoRight1 = goRight1;
    let newGoDown1 = goDown1;

    // Horizontal movement
    if (goRight1) {
      newX1 += vx;
      if (newX1 >= maxLeft) newGoRight1 = false;
    } else {
      newX1 -= vx;
      if (newX1 <= 0) newGoRight1 = true;
    }

    // Vertical movement
    if (goDown1) {
      newY1 += vy;
      if (newY1 >= maxTop) newGoDown1 = false;
    } else {
      newY1 -= vy;
      if (newY1 <= 0) newGoDown1 = true;
    }

    setX1(newX1);
    setY1(newY1);
    setRotation1(newRotation1);
    setGoRight1(newGoRight1);
    setGoDown1(newGoDown1);
    
    requestAnimationFrame(process);
  };

  const handleBackgroundChange = (image) => {
    setBackgroundImage(image === 'none' ? 'none' : `url(${image})`);
  };

  return (
    <div id="container">
      <div id="field" style={{ width: `${fieldWidth}px`, height: `${fieldHeight}px` }}>
        <div
          id="Ball1"
          ref={ball1Ref}
          style={{
            width: `${ballDiameter}px`,
            height: `${ballDiameter}px`,
            backgroundImage: backgroundImage,
            position: 'absolute',
            top: `${y1}px`,
            left: `${x1}px`,
            transform: `rotate(${rotation1}deg)` // หมุนบอลตามค่า rotation1
          }}
        ></div>
      </div>

      <div id="control">
        <div
          id="run"
          className={`control-box ${running ? 'pause' : 'primary'}`}
          onClick={toggleRun}
        >
          <span className={`bi bi-${running ? 'pause' : 'play'}`}></span>
          {running ? 'Pause' : 'Run'}
        </div>
        <div className="control-box reset" onClick={resetBall}>
          Reset
        </div>
        <div className="control-box none" onClick={() => handleBackgroundChange('none')}>
          None
        </div>
        <div className="control-box basketball" onClick={() => handleBackgroundChange(lolImage)}>
          Basketball
        </div>
        <div className="control-box football" onClick={() => handleBackgroundChange(footballImage)}>
          Football
        </div>
        <div className="control-box volleyball" onClick={() => handleBackgroundChange(volleyballImage)}>
          Volleyball
        </div>
        <div className="control-box human" onClick={() => handleBackgroundChange(personImage)}>
          Human
        </div>
        <div className="control-box cartoon" onClick={() => handleBackgroundChange(gutImage)}>
          Cartoon
        </div>
        <div className="control-box logo" onClick={() => handleBackgroundChange(logoImage)}>
          Logo
        </div>
      </div>
    </div>
  );
}

export default Animation;
