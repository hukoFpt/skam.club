"use client";

import { useState, useEffect, useRef } from "react";

const BOX_WIDTH = 104; // 100px width + 4px gap

const Playground = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3]);
  const [nextNumber, setNextNumber] = useState(4);
  const [isShifting, setIsShifting] = useState(false);
  const [animNumbers, setAnimNumbers] = useState<{ value: number; pos: number }[]>([
    { value: 1, pos: 0 },
    { value: 2, pos: 1 },
    { value: 3, pos: 2 },
  ]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShifting(true);

      // Animate: move all current numbers right by 1
      setAnimNumbers((prev) => [
        { value: nextNumber, pos: 0 }, // New number slides in from left
        ...prev.map((item) => ({ ...item, pos: item.pos + 1 })),
      ]);

      // After animation, update the numbers state
      timeoutRef.current = setTimeout(() => {
        const newNumbers = [nextNumber, ...numbers.slice(0, -1)];
        setNumbers(newNumbers);
        setNextNumber((prev) => prev + 1);

        // Reset animNumbers to match new numbers and positions
        setAnimNumbers([
          { value: newNumbers[0], pos: 0 },
          { value: newNumbers[1], pos: 1 },
          { value: newNumbers[2], pos: 2 },
        ]);
        setIsShifting(false);
      }, 500);
    }, 2000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line
  }, [numbers, nextNumber]);

  return (
    <div className="h-[1024px] mx-11 mt-2 text-white text-2xl">
      <div className="relative" style={{ width: BOX_WIDTH * 3, height: 120 }}>
        {animNumbers
          .filter((item) => item.pos >= 0 && item.pos < 3)
          .map((item) => (
            <div
              key={item.value}
              className={`w-[100px] h-[100px] bg-blue-600 p-4 rounded-lg text-center flex items-center justify-center absolute transition-all duration-200 ease-in-out
        ${item.pos === 0 ? "transition-[visibility] duration-0" : ""}
        ${isShifting && item.pos === 0 ? "invisible" : "visible"}`}
              style={{
                left: `${item.pos * BOX_WIDTH}px`,
                top: 0,
                zIndex: 10 - item.pos,
              }}
            >
              {item.value}
            </div>
          ))}

        {/* New number sliding in from top */}
        {isShifting && (
          <div
            className="w-[100px] h-[100px] bg-blue-600 p-4 rounded-lg text-center flex items-center justify-center absolute transition-all duration-500 ease-in-out"
            style={{
              left: 0,
              top: 0,
              zIndex: 20,
              transform: "translateY(-104px)",
              animation: "slideInTop 0.5s forwards",
            }}
          >
            {nextNumber}
            <style jsx>{`
              @keyframes slideInTop {
                from {
                  transform: translateY(-104px);
                }
                to {
                  transform: translateY(0px);
                }
              }
            `}</style>
          </div>
        )}
      </div>

      <div className="mt-8 text-lg">
        <p>Next number: {nextNumber}</p>
        <p>Queue: {numbers.join(", ")}</p>
        <p>Status: {isShifting ? "Shifting..." : "Waiting..."}</p>
      </div>
    </div>
  );
};

export default Playground;
