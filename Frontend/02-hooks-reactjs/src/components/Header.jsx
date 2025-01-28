import { useContext } from "react";
import { OnlineUsers } from "./OnlineUsers";
import { CountContext } from "../contexts/CountContext";

export function Header() {

    const countCtx = useContext(CountContext);

  return (
    <header>
        <h1 className="text-5xl p-3">Página contador de usuários On-line({countCtx.onlineCount})</h1>
        <OnlineUsers/>
    </header>
  );
}