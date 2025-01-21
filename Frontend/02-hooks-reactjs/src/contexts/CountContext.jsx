import { createContext } from "react"


var CountContextObject = {
    onlineCount: 0,
    setOnlineCount: (n) => {}
}

export const CountContext = createContext(CountContextObject)