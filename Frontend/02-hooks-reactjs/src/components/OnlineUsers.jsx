import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

export function OnlineUsers() {

    const countCtx = useContext(CountContext);

    const handleZero = () => {
        countCtx.setOnlineCount(0);
    }

  return (
    <>
      <p>Online: {countCtx.onlineCount}</p>
      <button onClick={handleZero}>Vamos zerar os valores!</button>
    </>
  );
}