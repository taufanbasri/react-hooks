import { createContext } from "react";
import "./App.css";

import ComponentC from "./components/ComponentC";

export const UserContext = createContext();
export const ChannelContext = createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Taufan Prasetyo"}>
        <ChannelContext.Provider value={"Lubna Tech"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
