import { useContext } from "react";
import { OnlineUsers } from "./OnlineUsers";
import { CountContext } from "../contexts/CountContext";

export function Header() {

    const countCtx = useContext(CountContext);

  return (
    <header>
        <h1 className="text-5xl">Titulo da página({countCtx.onlineCount})</h1>
        <OnlineUsers/>
    </header>
  );
}