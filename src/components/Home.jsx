import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="w-[375px] h-[667px] bg-gradient-to-t to-[#00D2FF] from-[#3A7BD5] flex flex-col items-center rounded-xl relative overflow-hidden">
        {/* <Timer />
          <Status /> */}
        {/* <Board /> */}

        <div className="">
          <div className="absolute left-0 top-[83px]">
            <img src="/vector(stroke).png" alt="" />
          </div>
          <div className="absolute right-0">
            <img src="/ellipse(stroke).png" alt="" />
          </div>
        </div>

        <h1 className="text-[42px] text-[#ffffff] mt-[208px]">TIC-TAC-TOE</h1>

        <h3 className="text-[#ffffff] text-[24px] mt-[153px]">
          Pick who goes first?
        </h3>

        <div className="flex gap-[25px] mt-[21px]">
          <Link href="/tictac">
            <div className="bg-[#ffffff] rounded-[20px] w-[143px] h-[143px] flex justify-center items-center">
              <img src="/vector.png" alt="" />
            </div>
          </Link>
          {/* <Board /> */}
          <a href="./tictac">
            <div className="bg-[#ffffff] rounded-[20px] w-[143px] h-[143px] flex justify-center items-center">
              <img src="/ellipse.png" alt="" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
