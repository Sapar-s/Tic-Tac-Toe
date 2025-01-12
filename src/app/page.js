import Board from "./tictac/page";
import Status from "@/components/Status";
import Timer from "@/components/Time";
import HomePage from "@/components/Home";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center w-[100vw] h-[100vh]">
        <HomePage />
      </div>
    </>
  );
}
