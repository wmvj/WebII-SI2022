import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

export function OnlineUsers() {

    const countCtx = useContext(CountContext);

    const handleZero = () => {
        countCtx.setOnlineCount(0);
    }

  return (
    <>
      <p className="p-3 text-3xl">Online: {countCtx.onlineCount}</p>
      <button onClick={handleZero} className="bg-black text-white border px-4 py-3 rounded-md">Vamos zerar os valores!</button>
    </>
  );
}