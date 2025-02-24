// import React from 'react'
// import Card from './components/Card'
// import users from './assets/Users';

// const App = () => {


//   return (
//     <div>
      
//       {users.map(function(elem){

//         return <Card user={elem} />
//       })}
      


//     </div>
//   )
// }

// export default App
import React, { useState, useEffect } from "react";
import { motion } from "motion";


const App = () => {
  const [basketX, setBasketX] = useState(50);
  const [balls, setBalls] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalls((prevBalls) => [
        ...prevBalls,
        { id: Date.now(), x: Math.random() * 90, y: 0 },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setBalls((prevBalls) =>
        prevBalls.map((ball) => ({ ...ball, y: ball.y + 5 }))
      );
    }, 100);

    return () => clearInterval(gameLoop);
  }, []);

  useEffect(() => {
    setBalls((prevBalls) =>
      prevBalls.filter((ball) => {
        if (ball.y > 90) {
          if (Math.abs(ball.x - basketX) < 10) {
            setScore((prev) => prev + 1);
            return false;
          } else {
            setLives((prev) => prev - 1);
          }
        }
        return ball.y <= 100;
      })
    );
  }, [basketX, balls]);

  const moveBasket = (direction) => {
    setBasketX((prevX) => Math.max(0, Math.min(90, prevX + direction)));
  };

  return (
    <div className="relative w-full h-screen bg-blue-400 overflow-hidden">
      <h1 className="text-center text-white text-2xl p-4">Score: {score} | Lives: {lives}</h1>
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className="absolute bg-red-500 w-6 h-6 rounded-full"
          style={{ top: `${ball.y}%`, left: `${ball.x}%` }}
        ></motion.div>
      ))}
      <motion.div
        className="absolute bottom-10 bg-yellow-500 w-16 h-6 rounded-md"
        style={{ left: `${basketX}%` }}
      ></motion.div>
      <div className="absolute bottom-4 w-full text-center">
        <button
          onClick={() => moveBasket(-10)}
          className="bg-gray-800 text-white px-4 py-2 m-2"
        >
          Left
        </button>
        <button
          onClick={() => moveBasket(10)}
          className="bg-gray-800 text-white px-4 py-2 m-2"
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default App;

