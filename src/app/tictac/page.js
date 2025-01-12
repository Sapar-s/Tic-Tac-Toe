"use client";

import Link from "next/link";
import Square from "@/components/Square";
import Status from "@/components/Status";
import Timer from "@/components/Time";
import { useState } from "react";

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerOne, setIsPlayerOne] = useState(true);

  function handleClick(index) {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isPlayerOne ? "X" : "O";
    setBoard(newBoard);
    setIsPlayerOne(!isPlayerOne);
  }

  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh]">
      <div className="w-[375px] h-[667px] bg-gradient-to-t to-[#00D2FF] from-[#3A7BD5] flex flex-col items-center rounded-xl relative overflow-hidden">
        <Timer />
        <Status />
        <div className="w-[324px] h-[324px] bg-[#ffffff] rounded-[20px] p-[28px] flex  flex-wrap mt-[45px]">
          {board.map((value, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="w-[89px] h-[89px] border-[black]/20  border-[1px]"
            >
              {value}
            </button>
          ))}
        </div>
        <div className="text-[#ffffff] text-[20px] mt-[30px] flex justify-between w-[85%]">
          <Link href="/">Home</Link>
          <Link href="/" className="mr-[3px]">
            New Game
          </Link>
        </div>
      </div>
    </div>
  );
}
