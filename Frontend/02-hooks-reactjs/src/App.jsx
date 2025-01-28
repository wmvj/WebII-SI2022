import { useState } from "react";
import { CountContext } from "./contexts/CountContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {

  const [onlineCount, setOnlineCount] = useState(90);

  return (
    <div className="container mx-auto">
      <CountContext.Provider value={{onlineCount, setOnlineCount}}>
        <Header />
        <Footer/>
      </CountContext.Provider>
    </div>
  );
};

export default App;