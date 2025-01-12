function Status(currentPlayer) {
  // console.log("currentPlayer :>> ", currentPlayer);
  // let hhh = currentPlayer;
  console.log("hhh :>> ", currentPlayer);
  return (
    <>
      <div className="mt-[23px]">
        <h2 className="text-[36px] text-[#ffffff]">
          {/* Player 1's Turn */}
          {currentPlayer.Winner}
          {currentPlayer.Player}
          {/* <div className="text-[48px]">{winner}</div> */}
        </h2>
      </div>
    </>
  );
}

export default Status;
