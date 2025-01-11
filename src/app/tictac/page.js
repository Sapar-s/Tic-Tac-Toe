// import Square from "./Square";
import Link from "next/link";

import Status from "@/components/Status";
import Timer from "@/components/Time";

export default function Board() {
  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh]">
      <div className="w-[375px] h-[667px] bg-gradient-to-t to-[#00D2FF] from-[#3A7BD5] flex flex-col items-center rounded-xl relative overflow-hidden">
        <Timer />
        <Status />
        <div className="w-[324px] h-[324px] bg-[#ffffff] rounded-[20px] p-[28px] flex  flex-wrap mt-[45px]">
          {" "}
          <button className="w-[89px] h-[89px] border-[black]/20 border-r-[2px] border-b-[2px]"></button>
          <button className="w-[89px] h-[89px] border-[black]/20  border-r-[2px] border-b-[2px]"></button>
          <button className="w-[89px] h-[89px] border-[black]/20  border-b-[2px]"></button>
          <button className="w-[89px] h-[89px] border-[black]/20  border-r-[2px] border-b-[2px]"></button>
          <button className="w-[89px] h-[89px] border-[black]/20  border-r-[2px] border-b-[2px]"></button>
          <button className="w-[89px] h-[89px] border-[black]/20  border-b-[2px]"></button>
          <button className="w-[89px] h-[89px] border-[black]/20  border-r-[2px] "></button>
          <button className="w-[89px] h-[89px] border-[black]/20  border-r-[2px] "></button>
          <button className="w-[89px] h-[89px] border-[black]/20"></button>
        </div>
        <div className="text-[#ffffff] text-[20px] mt-[30px]">
          <Link href="/">Home</Link>
        </div>
      </div>
    </div>
  );
}
