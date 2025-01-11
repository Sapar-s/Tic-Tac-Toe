import Square from "./Square";

export const Board = () => {
  return (
    <>
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
    </>
  );
};
